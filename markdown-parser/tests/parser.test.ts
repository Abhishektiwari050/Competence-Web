import { parse } from '../src/parser';

describe('parse', () => {
  it('should be a function', () => {
    expect(typeof parse).toBe('function');
  });

  it('should throw an error for an unterminated fenced code block', () => {
    const markdown = '```\nconst x = 1;';
    expect(() => parse(markdown)).toThrow('Unterminated fenced code block');
  });

  it('should throw an error for an unterminated bold tag', () => {
    const markdown = '**Hello, World!';
    expect(() => parse(markdown)).toThrow('Unterminated bold tag');
  });

  it('should throw an error for an unterminated italic tag', () => {
    const markdown = '*Hello, World!';
    expect(() => parse(markdown)).toThrow('Unterminated italic tag');
  });

  it('should throw an error for an unterminated link text', () => {
    const markdown = '[Google';
    expect(() => parse(markdown)).toThrow('Unterminated link text');
  });

  it('should throw an error for an unterminated link url', () => {
    const markdown = '[Google](https://www.google.com';
    expect(() => parse(markdown)).toThrow('Unterminated link url');
  });

  it('should throw an error for an unterminated image alt text', () => {
    const markdown = '![Alt Text';
    expect(() => parse(markdown)).toThrow('Unterminated image alt text');
  });

  it('should throw an error for an unterminated image url', () => {
    const markdown = '![Alt Text](https://via.placeholder.com/150';
    expect(() => parse(markdown)).toThrow('Unterminated image url');
  });

  it('should parse a heading', () => {
    const markdown = '# Hello, World!';
    const ast = parse(markdown);
    expect(ast).toEqual({
      type: 'root',
      children: [
        {
          type: 'heading',
          level: 1,
          children: [{ type: 'text', value: 'Hello, World!' }],
        },
      ],
    });
  });

  it('should parse an unordered list', () => {
    const markdown = '* Item 1\n* Item 2';
    const ast = parse(markdown);
    expect(ast).toEqual({
      type: 'root',
      children: [
        {
          type: 'list',
          ordered: false,
          indent: 0,
          children: [
            { type: 'listItem', children: [{ type: 'text', value: 'Item 1' }] },
            { type: 'listItem', children: [{ type: 'text', value: 'Item 2' }] },
          ],
        },
      ],
    });
  });

  it('should parse an ordered list', () => {
    const markdown = '1. Item 1\n2. Item 2';
    const ast = parse(markdown);
    expect(ast).toEqual({
      type: 'root',
      children: [
        {
          type: 'list',
          ordered: true,
          indent: 0,
          children: [
            { type: 'listItem', children: [{ type: 'text', value: 'Item 1' }] },
            { type: 'listItem', children: [{ type: 'text', value: 'Item 2' }] },
          ],
        },
      ],
    });
  });

  it('should parse a blockquote', () => {
    const markdown = '> Hello, World!';
    const ast = parse(markdown);
    expect(ast).toEqual({
      type: 'root',
      children: [
        {
          type: 'blockquote',
          children: [
            { type: 'paragraph', children: [{ type: 'text', value: 'Hello, World!' }] },
          ],
        },
      ],
    });
  });

  it('should parse a multi-line blockquote', () => {
    const markdown = '> Hello, World!\n> This is a test.';
    const ast = parse(markdown);
    expect(ast).toEqual({
      type: 'root',
      children: [
        {
          type: 'blockquote',
          children: [
            { type: 'paragraph', children: [{ type: 'text', value: 'Hello, World!\nThis is a test.' }] },
          ],
        },
      ],
    });
  });

  it('should parse a fenced code block', () => {
    const markdown = '```\nconst x = 1;\n```';
    const ast = parse(markdown);
    expect(ast).toEqual({
      type: 'root',
      children: [
        {
          type: 'code',
          children: [{ type: 'text', value: 'const x = 1;' }],
        },
      ],
    });
  });

  it('should parse a horizontal rule', () => {
    const markdown = '---';
    const ast = parse(markdown);
    expect(ast).toEqual({
      type: 'root',
      children: [{ type: 'hr' }],
    });
  });

  it('should parse bold text', () => {
    const markdown = '**Hello, World!**';
    const ast = parse(markdown);
    expect(ast).toEqual({
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'bold',
              children: [{ type: 'text', value: 'Hello, World!' }],
            },
          ],
        },
      ],
    });
  });

  it('should parse italic text', () => {
    const markdown = '*Hello, World!*';
    const ast = parse(markdown);
    expect(ast).toEqual({
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'italic',
              children: [{ type: 'text', value: 'Hello, World!' }],
            },
          ],
        },
      ],
    });
  });

  it('should parse a link', () => {
    const markdown = '[Google](https://www.google.com)';
    const ast = parse(markdown);
    expect(ast).toEqual({
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'link',
              url: 'https://www.google.com',
              children: [{ type: 'text', value: 'Google' }],
            },
          ],
        },
      ],
    });
  });

  it('should parse a link with a title', () => {
    const markdown = '[Google](https://www.google.com "Google\'s Homepage")';
    const ast = parse(markdown);
    expect(ast).toEqual({
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'link',
              url: 'https://www.google.com',
              title: "Google's Homepage",
              children: [{ type: 'text', value: 'Google' }],
            },
          ],
        },
      ],
    });
  });

  it('should parse an image', () => {
    const markdown = '![Alt Text](https://via.placeholder.com/150)';
    const ast = parse(markdown);
    expect(ast).toEqual({
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'image',
              alt: 'Alt Text',
              url: 'https://via.placeholder.com/150',
            },
          ],
        },
      ],
    });
  });

  it('should parse an image with a title', () => {
    const markdown = '![Alt Text](https://via.placeholder.com/150 "Placeholder Image")';
    const ast = parse(markdown);
    expect(ast).toEqual({
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'image',
              alt: 'Alt Text',
              url: 'https://via.placeholder.com/150',
              title: 'Placeholder Image',
            },
          ],
        },
      ],
    });
  });

  it('should parse nested lists', () => {
    const markdown = `
* Item 1
  * Item 1.1
  * Item 1.2
* Item 2
`;
    const ast = parse(markdown);
    expect(ast).toEqual({
      type: 'root',
      children: [
        {
          type: 'list',
          ordered: false,
          indent: 0,
          children: [
            {
              type: 'listItem',
              children: [
                { type: 'text', value: 'Item 1' },
                {
                  type: 'list',
                  ordered: false,
                  indent: 2,
                  children: [
                    {
                      type: 'listItem',
                      children: [{ type: 'text', value: 'Item 1.1' }],
                    },
                    {
                      type: 'listItem',
                      children: [{ type: 'text', value: 'Item 1.2' }],
                    },
                  ],
                },
              ],
            },
            {
              type: 'listItem',
              children: [{ type: 'text', value: 'Item 2' }],
            },
          ],
        },
      ],
    });
  });

  it('should parse an unordered list with mixed markers', () => {
    const markdown = '* Item 1\n- Item 2';
    const ast = parse(markdown);
    expect(ast).toEqual({
      type: 'root',
      children: [
        {
          type: 'list',
          ordered: false,
          indent: 0,
          children: [
            { type: 'listItem', children: [{ type: 'text', value: 'Item 1' }] },
            { type: 'listItem', children: [{ type: 'text', value: 'Item 2' }] },
          ],
        },
      ],
    });
  });

  it('should parse a heading with trailing hashes', () => {
    const markdown = '# Hello, World! #';
    const ast = parse(markdown);
    expect(ast).toEqual({
      type: 'root',
      children: [
        {
          type: 'heading',
          level: 1,
          children: [{ type: 'text', value: 'Hello, World!' }],
        },
      ],
    });
  });

  it('should parse a Setext heading (level 1)', () => {
    const markdown = 'Hello, World!\n=============';
    const ast = parse(markdown);
    expect(ast).toEqual({
      type: 'root',
      children: [
        {
          type: 'heading',
          level: 1,
          children: [{ type: 'text', value: 'Hello, World!' }],
        },
      ],
    });
  });

  it('should parse a Setext heading (level 2)', () => {
    const markdown = 'Hello, World!\n-------------';
    const ast = parse(markdown);
    expect(ast).toEqual({
      type: 'root',
      children: [
        {
          type: 'heading',
          level: 2,
          children: [{ type: 'text', value: 'Hello, World!' }],
        },
      ],
    });
  });
});