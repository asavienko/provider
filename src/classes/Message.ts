import IMessagable from "../interfaces/IMessagable";
import IMessageTypable from "../interfaces/IMessageTypable";

class Message implements IMessagable {
  protected _id: number;
  protected _creator: string;
  protected _receiver: string;
  protected _body: string;
  protected _type: IMessageTypable;

  constructor(creator: string, receiver: string, body: string) {
    this._id = Message.getNextId();
    this._creator = creator;
    this._receiver = receiver;
    this._body = body;
    this._type = null;
  }

  static getNextId: () => number = (() => {
    let idCounter: number = 10 ** 6;
    return () => idCounter++;
  })();

  public getId(): number {
    return this._id;
  }

  public getCreator(): string {
    return this._creator;
  }

  public getReceiver(): string {
    return this._receiver;
  }

  public getBody(): string {
    return this._body;
  }

  public getType(): IMessageTypable {
    return this._type;
  }

  public setType(type: IMessageTypable): void {
    this._type = type;
  }
}

export default Message;
