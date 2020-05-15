import { IListable } from "./interfaces";

class List<T extends { id: string | number }> implements IListable<T> {
  private list: T[] = [];
  add(item: T): void {
    this.list.push(item);
  }
  get(index: number): T | null {
    return this.list[index] || null;
  }
  getById(id: string): T | null {
    const result: T = this.list.find((item: T) => item.id === id);
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
  removeById(id: string): void {
    const index = this.list.findIndex(item => item.id === id);
    this.list.splice(index, 1);
  }
}

export default List;
