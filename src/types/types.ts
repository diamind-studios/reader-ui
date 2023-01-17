export type StateSetter<T> = React.Dispatch<React.SetStateAction<T>>;

export interface Setters {
  [name: string]: StateSetter<any>;
}

export interface Passage {
  book: string;
  chapter: number;
}

export interface Version {
  id: number;
  name: string;
  full_name: string;
}

export interface VersionListData {
  translations: Version[];
  sources: Version[];
}
