export type StateSetter<T> = React.Dispatch<React.SetStateAction<T>>;

export interface Setters {
  [name: string]: StateSetter<any>;
}

export interface Passage {
  book: string;
  chapter: number;
}

export interface Version {
  name: string;
  fullname: string;
}
