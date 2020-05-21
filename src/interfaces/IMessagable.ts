import IMessageTypable from "./IMessageTypable";

export default interface IMessagable {
  getId(): number;
  getCreator(): string;
  getReceiver(): string;
  getBody(): string;
  getType(): IMessageTypable;
  setType(type: IMessageTypable): void;
}
