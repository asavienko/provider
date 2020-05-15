export interface IMessagable {
  readonly id: number;
  readonly creator: string;
  readonly receiver: string;
  readonly body: string;
  type: IMessageTypable;
}

export interface IMessageTypable {
  name: string;
  price: number;
}

export interface IUserable {
  readonly id: string;
  readonly balance: number;
  withdraw(money: number): void;
  payment(money: number): void;
}

export interface IListable<T> {
  add(item: T): void;
  get(index: number): T | null;
  getById(id: string | number): T | null;
  toArray(): T[];
  clear(): void;
  size(): number;
  remove(index: number): void;
  removeById(id: string | number): void;
}
