export default interface IListable<T> {
  add(item: T): void;
  get(index: number): T | null;
  getById(id: string | number): T | null;
  toArray(): T[];
  clear(): void;
  size(): number;
  remove(index: number): void;
  removeById(id: string | number): void;
}
