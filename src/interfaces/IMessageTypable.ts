import { MessageTypeName } from "../constants/MessageTypeName";

export default interface IMessageTypable {
  getName(): MessageTypeName;
  setName(name: MessageTypeName): void;
  getPrice(): number;
  setPrice(price: number): void;
}
