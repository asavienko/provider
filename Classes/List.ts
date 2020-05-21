import { IListable } from "./interfaces";

class List<T extends { getId(): string | number }> implements IListable<T> {
  private list: T[] = [];
  public add(item: T): void {
    this.list.push(item);
  }
  public get(index: number): T | null {
    return this.list[index] || null;
  }
  public getById(id: string): T | null {
    const result: T = this.list.find((item: T) => item.getId() === id);
    return result || null;
  }
  public toArray(): T[] {
    return [...this.list];
  }
  public clear(): void {
    this.list = [];
  }
  public size(): number {
    return this.list.length;
  }
  public remove(index: number): void {
    this.list.splice(index, 1);
  }
  public removeById(id: string | number): void {
    const index = this.list.findIndex(item => item.getId() === id);
    index !== -1 && this.list.splice(index, 1);
  }
}

export default List;
