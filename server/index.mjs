import http from "node:http";
import { URL } from "node:url";
import crypto from "node:crypto";
import { createClient } from "@supabase/supabase-js";
import sanitizeHtml from "sanitize-html";

const PORT = process.env.PORT || 8787;
const SUPABASE_URL = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL || "";
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || "";

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  console.error("Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY env.");
}

const supabase = SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY ? createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY) : null;

function json(res, status, body) {
  res.writeHead(status, { "Content-Type": "application/json" });
  res.end(JSON.stringify(body));
}

function notHttps(req, res) {
  const xfproto = req.headers["x-forwarded-proto"];
  const isHttps = xfproto ? String(xfproto).toLowerCase() === "https" : req.socket.encrypted === true;
  if (!isHttps && process.env.NODE_ENV === "production") {
    json(res, 400, { error: "HTTPS required" });
    return true;
  }
  return false;
}

function readJson(req) {
  return new Promise((resolve, reject) => {
    let data = "";
    req.on("data", (chunk) => (data += chunk));
    req.on("end", () => {
      try {
        resolve(data ? JSON.parse(data) : {});
      } catch (e) {
        reject(e);
      }
    });
    req.on("error", reject);
  });
}

async function rpc(name, params) {
  if (!supabase) throw new Error("Server not configured");
  const { data, error } = await supabase.rpc(name, params);
  if (error) throw error;
  return data;
}

const server = http.createServer(async (req, res) => {
  try {
    if (notHttps(req, res)) return;
    const url = new URL(req.url, `http://${req.headers.host}`);
    const pathname = url.pathname;
    const method = req.method || "GET";

    if (pathname === "/api/validate-token" && method === "GET") {
      const token = url.searchParams.get("token") || "";
      const result = await rpc("fn_validate_token", { p_token: token });
      return json(res, 200, result || {});
    }

    if (pathname === "/api/redeem-token" && method === "GET") {
      const token = url.searchParams.get("token") || "";
      const result = await rpc("fn_redeem_token", { p_token: token });
      return json(res, 200, result || {});
    }

    if (pathname === "/api/posts" && method === "POST") {
      const body = await readJson(req);
      const { token, title, content, category, tags = [], image = null, status = "draft" } = body;
      if (!token) return json(res, 401, { error: "Missing token" });
      if (!title || title.length < 3 || title.length > 100) return json(res, 422, { error: "Invalid title length" });
      const clean = sanitizeHtml(String(content || ""), { allowedTags: [], allowedAttributes: {} });
      const created = await rpc("fn_create_post", {
        p_token: token,
        p_title: title,
        p_content: clean,
        p_category: category || "",
        p_tags: tags,
        p_image: image,
        p_status: status,
        p_ip: req.socket.remoteAddress || null,
        p_user_agent: req.headers["user-agent"] || null,
      });
      return json(res, 201, { id: created });
    }

    if (pathname.startsWith("/api/posts/") && method === "PUT") {
      const id = pathname.split("/").pop();
      const body = await readJson(req);
      const { token, title, content, category, tags = [], image = null, status } = body;
      if (!token) return json(res, 401, { error: "Missing token" });
      const clean = typeof content === "string" ? sanitizeHtml(content, { allowedTags: [], allowedAttributes: {} }) : null;
      await rpc("fn_update_post", {
        p_token: token,
        p_id: id,
        p_title: title || null,
        p_content: clean,
        p_category: category || null,
        p_tags: tags || null,
        p_image: image || null,
        p_status: status || null,
        p_ip: req.socket.remoteAddress || null,
        p_user_agent: req.headers["user-agent"] || null,
      });
      return json(res, 200, { ok: true });
    }

    if (pathname.startsWith("/api/posts/") && method === "DELETE") {
      const id = pathname.split("/").pop();
      const body = await readJson(req);
      const { token } = body;
      if (!token) return json(res, 401, { error: "Missing token" });
      await rpc("fn_delete_post", { p_token: token, p_id: id, p_ip: req.socket.remoteAddress || null, p_user_agent: req.headers["user-agent"] || null });
      return json(res, 200, { ok: true });
    }

    if (pathname === "/api/tokens" && method === "POST") {
      const body = await readJson(req);
      const { user_id, permissions = ["create", "update", "delete"], expires_at } = body;
      if (!user_id) return json(res, 400, { error: "Missing user_id" });
      const raw = crypto.randomBytes(32).toString("hex");
      const result = await rpc("fn_issue_token", { p_user_id: user_id, p_token_plain: raw, p_permissions: permissions, p_expires_at: expires_at || null });
      return json(res, 201, { token: raw, meta: result });
    }

    json(res, 404, { error: "Not found" });
  } catch (e) {
    const code = e?.code === "PGRST301" ? 400 : 500;
    json(res, code, { error: String(e?.message || e) });
  }
});

server.listen(PORT, () => console.log(`API server on http://localhost:${PORT}`));