import { Node } from './types';

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function escapeAttr(text: string): string {
  return escapeHtml(text).replace(/"/g, '&quot;');
}

function sanitizeUrl(url: string | undefined): string {
  if (!url) return '';
  const trimmed = url.trim();
  const lower = trimmed.toLowerCase();
  // Block dangerous protocols
  if (lower.startsWith('javascript:') || lower.startsWith('data:')) {
    return '#';
  }
  return trimmed;
}

function renderNodes(nodes: Node[]): string {
  return nodes.map(node => render(node)).join('');
}

export function render(node: Node): string {
  switch (node.type) {
    case 'root':
      return renderNodes(node.children || []);
    case 'heading':
      return `<h${node.level}>${renderNodes(node.children || [])}</h${node.level}>`;
    case 'paragraph':
      return `<p>${renderNodes(node.children || [])}</p>`;
    case 'blockquote':
      return `<blockquote>${renderNodes(node.children || [])}</blockquote>`;
    case 'list': {
      const tag = node.ordered ? 'ol' : 'ul';
      return `<${tag}>${renderNodes(node.children || [])}</${tag}>`;
    }
    case 'listItem':
      return `<li>${renderNodes(node.children || [])}</li>`;
    case 'code':
      return `<pre><code>${renderNodes(node.children || [])}</code></pre>`;
    case 'hr':
      return '<hr>';
    case 'bold':
      return `<strong>${renderNodes(node.children || [])}</strong>`;
    case 'italic':
      return `<em>${renderNodes(node.children || [])}</em>`;
    case 'link':
      {
        const href = escapeAttr(sanitizeUrl(node.url));
        const titleAttr = node.title ? ` title="${escapeAttr(node.title)}"` : '';
        return `<a href="${href}"${titleAttr}>${renderNodes(node.children || [])}</a>`;
      }
    case 'image':
      {
        const src = escapeAttr(sanitizeUrl(node.url));
        const alt = escapeAttr(node.alt || '');
        const titleAttr = node.title ? ` title="${escapeAttr(node.title)}"` : '';
        return `<img src="${src}" alt="${alt}"${titleAttr}>`;
      }
    case 'text':
      return escapeHtml(node.value || '');
    default:
      return '';
  }
}