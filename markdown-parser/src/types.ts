export type NodeType =
  | 'root'
  | 'heading'
  | 'paragraph'
  | 'text'
  | 'bold'
  | 'italic'
  | 'link'
  | 'image'
  | 'list'
  | 'listItem'
  | 'code'
  | 'blockquote'
  | 'hr';

export interface Node {
  type: NodeType;
  children?: Node[];
  value?: string;
  level?: number; // for headings
  url?: string; // for links and images
  alt?: string; // for images
  title?: string; // for links and images
  ordered?: boolean; // for lists
  indent?: number; // for lists
}