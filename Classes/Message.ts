import { IMessagable, IMessageTypable } from "./interfaces";

class Message implements IMessagable {
  protected _id: number;
  protected _creator: string;
  protected _receiver: string;
  protected _body: string;
  protected _type: IMessageTypable;

  constructor(creator: string, receiver: string, body: string) {
    this._id = this.getNextId();
    this._creator = creator;
    this._receiver = receiver;
    this._body = body;
    this._type = null;
  }
  private _idCounter: number = 10 ** 6;
  private getNextId() {
    return this._idCounter++;
  }

  getId() {
    return this._id;
  }

  getCreator() {
    return this._creator;
  }

  getReceiver() {
    return this._receiver;
  }

  getBody() {
    return this._body;
  }

  getType() {
    return this._type;
  }

  setType(type) {
    this._type = type;
  }
}

export default Message;
