# Markdown Parser

A comprehensive markdown parser that can identify and process all standard markdown elements.

## Installation

```bash
npm install
```

## Usage

```typescript
import { markdownToHtml } from './index';

const markdown = '# Hello, World!\n\nThis is a paragraph.';
const html = markdownToHtml(markdown);

console.log(html);
```

## Testing

```bash
npm test
```