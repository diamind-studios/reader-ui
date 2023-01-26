export type StateSetter<T> = React.Dispatch<React.SetStateAction<T>>;

export interface Setters {
  [name: string]: StateSetter<any>;
}

export interface Passage {
  book_name: string;
  chapter: number;
  verse?: number;
}

export interface Version {
  id: number;
  name: string;
  full_name: string;
  type: 'translation' | 'source';
  language?: string;
}

export interface VersionListData {
  translations: Version[];
  sources: Version[];
}

export interface Word {
  word: string;
  punctuation: string;
  verse: number;
  words_id: number;
  parsing_id: number;
}

export interface ReaderMeta {
  key: string;
  setReaders?: any;
}

export interface Parsing {
  parsing_id: number;
  language: string;
  parsing_title: string;
  description: string;
}
