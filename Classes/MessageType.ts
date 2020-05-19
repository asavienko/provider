import { IMessageTypable } from "./interfaces";

class MessageType implements IMessageTypable {
  protected _name: string;
  protected _price: number;
  constructor(name: string, price: number) {
    this._name = name;
    this._price = price;
  }

  getName() {
    return this._name;
  }

  setName(name) {
    this._name = name;
  }

  getPrice() {
    return this._price;
  }

  setPrice(price) {
    this._price = price;
  }
}

export default MessageType;
