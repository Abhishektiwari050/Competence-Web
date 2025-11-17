import { Node } from './types';

function parseInline(text: string): Node[] {
  const nodes: Node[] = [];
  let remainingText = text;

  while (remainingText.length > 0) {
    // Bold
    if (remainingText.startsWith('**')) {
      const endIndex = remainingText.indexOf('**', 2);
      if (endIndex === -1) {
        throw new Error('Unterminated bold tag');
      }
      const content = remainingText.substring(2, endIndex);
      nodes.push({ type: 'bold', children: parseInline(content) });
      remainingText = remainingText.substring(endIndex + 2);
      continue;
    }

    // Italic (but not bold)
    if (remainingText.startsWith('*') || remainingText.startsWith('_')) {
      const marker = remainingText[0];
      const endIndex = remainingText.indexOf(marker, 1);
      if (endIndex === -1) {
        throw new Error(`Unterminated ${marker === '*' ? 'italic' : 'emphasis'} tag`);
      }
      const content = remainingText.substring(1, endIndex);
      nodes.push({ type: 'italic', children: parseInline(content) });
      remainingText = remainingText.substring(endIndex + 1);
      continue;
    }

    // Image
    if (remainingText.startsWith('![')) {
      const altEndIndex = remainingText.indexOf(']', 2);
      if (altEndIndex === -1) {
        throw new Error('Unterminated image alt text');
      }
      if (remainingText[altEndIndex + 1] === '(') {
        const urlEndIndex = remainingText.indexOf(')', altEndIndex + 2);
        if (urlEndIndex === -1) {
          throw new Error('Unterminated image url');
        }

        const altText = remainingText.substring(2, altEndIndex);
        const urlPart = remainingText.substring(altEndIndex + 2, urlEndIndex);

        let url = urlPart;
        let title: string | undefined = undefined;

        if (urlPart.endsWith('"')) {
            const titleStartIndex = urlPart.lastIndexOf(' "');
            if (titleStartIndex > 0) {
                const potentialUrl = urlPart.substring(0, titleStartIndex);
                if (!potentialUrl.includes('"')) { // Heuristic to avoid parsing part of URL as title
                    url = potentialUrl;
                    title = urlPart.substring(titleStartIndex + 2, urlPart.length - 1);
                }
            }
        }

        const node: Node = { type: 'image', alt: altText, url };
        if (title) {
          node.title = title;
        }
        nodes.push(node);
        remainingText = remainingText.substring(urlEndIndex + 1);
        continue;
      }
    }

    // Link
    if (remainingText.startsWith('[')) {
      const textEndIndex = remainingText.indexOf(']', 1);
      if (textEndIndex === -1) {
        throw new Error('Unterminated link text');
      }
      if (remainingText[textEndIndex + 1] === '(') {
        const urlEndIndex = remainingText.indexOf(')', textEndIndex + 2);
        if (urlEndIndex === -1) {
          throw new Error('Unterminated link url');
        }

        const linkText = remainingText.substring(1, textEndIndex);
        const urlPart = remainingText.substring(textEndIndex + 2, urlEndIndex);

        let url = urlPart;
        let title: string | undefined = undefined;

        if (urlPart.endsWith('"')) {
            const titleStartIndex = urlPart.lastIndexOf(' "');
            if (titleStartIndex > 0) {
                const potentialUrl = urlPart.substring(0, titleStartIndex);
                if (!potentialUrl.includes('"')) { // Heuristic to avoid parsing part of URL as title
                    url = potentialUrl;
                    title = urlPart.substring(titleStartIndex + 2, urlPart.length - 1);
                }
            }
        }

        const node: Node = { type: 'link', url, children: parseInline(linkText) };
        if (title) {
          node.title = title;
        }
        nodes.push(node);
        remainingText = remainingText.substring(urlEndIndex + 1);
        continue;
      }
    }

    const nextMarker = /(\*\*|\*|!\[|\[)/.exec(remainingText);
    const nextIndex = nextMarker ? nextMarker.index : -1;

    if (nextIndex === 0) {
        // This case should not happen if the parsers above are correct and consume the token
        // But as a fallback, consume one character as text and continue.
        nodes.push({ type: 'text', value: remainingText.substring(0, 1) });
        remainingText = remainingText.substring(1);
        continue;
    }

    const textEnd = nextIndex === -1 ? remainingText.length : nextIndex;

    if (textEnd > 0) {
      nodes.push({ type: 'text', value: remainingText.substring(0, textEnd) });
      remainingText = remainingText.substring(textEnd);
    }
  }

  return nodes;
}

export function parse(markdown: string): Node {
  const lines = markdown.split('\n');
  const children: Node[] = [];
  let listStack: Node[] = [];
  let inCode = false;
  let code: Node | null = null;

  for (const line of lines) {
    // Fenced Code Block
    if (line.startsWith('```')) {
      if (inCode) {
        inCode = false;
        code = null;
      } else {
        inCode = true;
        code = { type: 'code', children: [] };
        children.push(code);
      }
      listStack = []; // Reset list stack when code block starts
      continue;
    }

    if (inCode) {
      if (code && code.children) {
        code.children.push({ type: 'text', value: line });
      }
      continue;
    }

    // Horizontal Rule
    if (line.match(/^(---|\*\*\*|___)$/)) {
      children.push({ type: 'hr' });
      listStack = []; // Reset list stack
      continue;
    }

    // Heading
    const headingMatch = line.match(/^(#{1,6})[ \t]+(.*?) *#* *$/);
    if (headingMatch) {
      const content = headingMatch[2].trim();
      if (content.includes(' #') && !content.endsWith(' #')) {
        const lastHashIndex = content.lastIndexOf(' #');
        const textAfterLastHash = content.substring(lastHashIndex + 2);
        if (textAfterLastHash.replace(/#/g, '').trim() === '') {
          children.push({
            type: 'heading',
            level: headingMatch[1].length,
            children: parseInline(content.substring(0, lastHashIndex)),
          });
        } else {
          children.push({
            type: 'heading',
            level: headingMatch[1].length,
            children: parseInline(content),
          });
        }
      } else {
        children.push({
          type: 'heading',
          level: headingMatch[1].length,
          children: parseInline(content),
        });
      }
      listStack = []; // Reset list stack
      continue;
    }

    // Setext Heading
    const setextMatch = line.match(/^(-+|=+)$/);
    if (setextMatch && children.length > 0) {
      const lastNode = children[children.length - 1];
      if (lastNode.type === 'paragraph') {
        lastNode.type = 'heading';
        lastNode.level = setextMatch[1].startsWith('=') ? 1 : 2;
        continue;
      }
    }

    // Blockquote
    const blockquoteMatch = line.match(/^>\s+(.*)/);
    if (blockquoteMatch) {
      const lastChild = children[children.length - 1];
      if (lastChild && lastChild.type === 'blockquote' && lastChild.children) {
        const lastParagraph = lastChild.children[lastChild.children.length - 1];
        if (lastParagraph && lastParagraph.type === 'paragraph' && lastParagraph.children) {
            const lastText = lastParagraph.children[lastParagraph.children.length - 1];
            if (lastText && lastText.type === 'text') {
                lastText.value += '\n' + blockquoteMatch[1];
            }
        }
      } else {
        children.push({
          type: 'blockquote',
          children: [{ type: 'paragraph', children: parseInline(blockquoteMatch[1]) }],
        });
      }
      listStack = []; // Reset list stack
      continue;
    }

    // List Item
    const listMatch = line.match(/^(\s*)(\*|-|\d+\.)\s+(.*)/);
    if (listMatch) {
      const indent = listMatch[1].length;
      const ordered = /^\d+\./.test(listMatch[2]);
      const content = listMatch[3];

      while (listStack.length > 0 && indent < (listStack[listStack.length - 1].indent || 0)) {
        listStack.pop();
      }

      if (listStack.length === 0 || indent > (listStack[listStack.length - 1].indent || 0)) {
        const newList: Node = { type: 'list', ordered, children: [], indent };
        if (listStack.length === 0) {
          children.push(newList);
        } else {
          const parentList = listStack[listStack.length - 1];
          if (parentList.children) {
            const lastItem = parentList.children[parentList.children.length - 1];
            if (lastItem.children) {
              lastItem.children.push(newList);
            }
          }
        }
        listStack.push(newList);
      }

      const currentList = listStack[listStack.length - 1];
      if (currentList && currentList.children) {
        currentList.children.push({ type: 'listItem', children: parseInline(content) });
      }
      continue;
    }

    // If it's not a list item, we're out of the list
    listStack = [];

    // If no other block-level element is matched, treat it as a paragraph
    if (line.trim() !== '') {
      children.push({ type: 'paragraph', children: parseInline(line) });
    }
  }

  if (inCode) {
    throw new Error('Unterminated fenced code block');
  }

  return { type: 'root', children };
}