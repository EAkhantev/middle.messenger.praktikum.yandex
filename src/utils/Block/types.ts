import Block from '.';

export interface BlockProps<T> {
  [key: string]: T | string;
}

export interface BlockChildren<T> {
  [key: string]: Block<T>;
}

export interface BlockLists<T> {
  [key: string]: T[];
}

export interface NewEvent {
  [key: string]: (event: Event) => void;
}

export interface AttrProps {
  [key: string]: string;
}
