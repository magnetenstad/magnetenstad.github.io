export type { Document, Metadata };

interface Document {
  metadata: Metadata;
  content: string;
}

interface Metadata {
  title: string;
  date: string;
  author: string;
  tags: Array<string>;
  image: string;
}
