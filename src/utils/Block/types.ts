export interface NewEvent {
  [key: string]: (event: Event) => void;
}

export interface AttrProps {
  [key: string]: string;
}
