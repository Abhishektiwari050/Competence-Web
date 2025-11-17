import { parse } from './parser';
import { render } from './renderer';

export function markdownToHtml(markdown: string): string {
  const ast = parse(markdown);
  return render(ast);
}