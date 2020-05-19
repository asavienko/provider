import { IListable } from "./interfaces";

class List<T extends { getId(): string | number }> implements IListable<T> {
  private list: T[] = [];
  add(item: T): void {
    this.list.push(item);
  }
  get(index: number): T | null {
    return this.list[index] || null;
  }
  getById(id: string): T | null {
    const result: T = this.list.find((item: T) => item.getId() === id);
    return result || null;
  }
  toArray(): T[] {
    return [...this.list];
  }
  clear() {
    this.list = [];
  }
  size(): number {
    return this.list.length;
  }
  remove(index: number): void {
    this.list.splice(index, 1);
  }
  removeById(id: string | number): void {
    const index = this.list.findIndex(item => item.getId() === id);
    index !== -1 && this.list.splice(index, 1);
  }
}

export default List;
