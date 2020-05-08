class Message {
  constructor(creator, receiver, body) {
    this._id = Message.getNextId();
    this._creator = creator;
    this._receiver = receiver;
    this._body = body;
    this._type = null;
  }

  static idCounter = 1000000000;

  static getNextId() {
    return Message.idCounter++;
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
