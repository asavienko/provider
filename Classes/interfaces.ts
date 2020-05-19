export interface IMessagable {
  getId(): number;
  getCreator(): string;
  getReceiver(): string;
  getBody(): string;
  getType(): IMessageTypable;
  setType(type: IMessageTypable): void;
}

export interface IMessageTypable {
  getName(): string;
  setName(name: string): void;
  getPrice(): number;
  setPrice(price: number): void;
}

export interface IUserable {
  getId(): string;
  getBalance(): number;
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
