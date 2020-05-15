import { IMessagable, IMessageTypable } from "./interfaces";

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
  static _idCounter: number = 10 ** 6;
  static getNextId() {
    return this._idCounter++;
  }
  get id() {
    return this._id;
  }

  get creator() {
    return this._creator;
  }

  get receiver() {
    return this._receiver;
  }

  get body() {
    return this._body;
  }

  get type() {
    return this._type;
  }

  set type(type) {
    this._type = type;
  }
}

export default Message;
