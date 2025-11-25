import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || "";
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || "";

let urlToken = "";
try {
  if (typeof window !== "undefined") {
    const params = new URLSearchParams(window.location.search);
    urlToken = params.get("token") || "";
  }
} catch (e) {
  void e;
}

export const supabase = SUPABASE_URL && SUPABASE_ANON_KEY
  ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      global: {
        headers: urlToken ? { "x-url-token": urlToken } : {},
      },
    })
  : null;
export const isSupabaseConfigured = !!supabase;