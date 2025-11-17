import { render } from '../src/renderer';
import { parse } from '../src/parser';

describe('render', () => {
  it('should render a heading', () => {
    const markdown = '# Hello, World!';
    const ast = parse(markdown);
    const html = render(ast);
    expect(html).toBe('<h1>Hello, World!</h1>');
  });

  it('should render a paragraph', () => {
    const markdown = 'This is a paragraph.';
    const ast = parse(markdown);
    const html = render(ast);
    expect(html).toBe('<p>This is a paragraph.</p>');
  });

  it('should render an unordered list', () => {
    const markdown = '* Item 1\n* Item 2';
    const ast = parse(markdown);
    const html = render(ast);
    expect(html).toBe('<ul><li>Item 1</li><li>Item 2</li></ul>');
  });

  it('should render an ordered list', () => {
    const markdown = '1. Item 1\n2. Item 2';
    const ast = parse(markdown);
    const html = render(ast);
    expect(html).toBe('<ol><li>Item 1</li><li>Item 2</li></ol>');
  });

  it('should render a blockquote', () => {
    const markdown = '> Hello, World!';
    const ast = parse(markdown);
    const html = render(ast);
    expect(html).toBe('<blockquote><p>Hello, World!</p></blockquote>');
  });

  it('should render a code block', () => {
    const markdown = '```\nconst x = 1;\n```';
    const ast = parse(markdown);
    const html = render(ast);
    expect(html).toBe('<pre><code>const x = 1;</code></pre>');
  });

  it('should render a horizontal rule', () => {
    const markdown = '---';
    const ast = parse(markdown);
    const html = render(ast);
    expect(html).toBe('<hr>');
  });

  it('should render bold text', () => {
    const markdown = '**Hello, World!**';
    const ast = parse(markdown);
    const html = render(ast);
    expect(html).toBe('<p><strong>Hello, World!</strong></p>');
  });

  it('should render italic text', () => {
    const markdown = '*Hello, World!*';
    const ast = parse(markdown);
    const html = render(ast);
    expect(html).toBe('<p><em>Hello, World!</em></p>');
  });

  it('should render a link', () => {
    const markdown = '[Google](https://www.google.com)';
    const ast = parse(markdown);
    const html = render(ast);
    expect(html).toBe('<p><a href="https://www.google.com">Google</a></p>');
  });

  it('should render an image', () => {
    const markdown = '![Alt Text](https://via.placeholder.com/150)';
    const ast = parse(markdown);
    const html = render(ast);
    expect(html).toBe('<p><img src="https://via.placeholder.com/150" alt="Alt Text"></p>');
  });

  it('should escape HTML tags in text content', () => {
    const markdown = 'Hello <script>alert(1)</script>';
    const ast = parse(markdown);
    const html = render(ast);
    expect(html).toBe('<p>Hello &lt;script&gt;alert(1)&lt;/script&gt;</p>');
  });

  it('should sanitize javascript URLs in links', () => {
    const markdown = '[XSS](javascript:alert)';
    const ast = parse(markdown);
    const html = render(ast);
    expect(html).toBe('<p><a href="#">XSS</a></p>');
  });

  it('should escape quotes in image alt attributes', () => {
    const markdown = '![Alt "Text"](https://example.com/img.png)';
    const ast = parse(markdown);
    const html = render(ast);
    expect(html).toBe('<p><img src="https://example.com/img.png" alt="Alt &quot;Text&quot;"></p>');
  });
});