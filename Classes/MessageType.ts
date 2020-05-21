import { IMessageTypable } from "./interfaces";

class MessageType implements IMessageTypable {
  protected _name: string;
  protected _price: number;
  constructor(name: string, price: number) {
    this._name = name;
    this._price = price;
  }

  public getName(): string {
    return this._name;
  }

  public setName(name: string): void {
    this._name = name;
  }

  public getPrice(): number {
    return this._price;
  }

  public setPrice(price: number): void {
    this._price = price;
  }
}

export default MessageType;
