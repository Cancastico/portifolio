export interface Base {
  id: number;
}

export type BaseModel<T> = Base & T;