import { MessageTypeName } from "../constants/MessageTypeName";
import IMessageTypable from "../interfaces/IMessageTypable";

class MessageType implements IMessageTypable {
  private _name: MessageTypeName;
  private _price: number;
  constructor(name: MessageTypeName, price: number) {
    this._name = name;
    this._price = price;
  }

  public getName(): MessageTypeName {
    return this._name;
  }

  public setName(name: MessageTypeName): void {
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
