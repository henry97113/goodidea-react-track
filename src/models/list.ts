export interface RootObject {
  updatedAt: number;
  list: List[];
}

export interface List {
  image: string;
  originPrice: string;
  sellPrice: string;
  name: string;
  link: string;
  ISBN: string;
}
