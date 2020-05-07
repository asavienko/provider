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

  get getCreator() {
    return this._creator;
  }

  get getReceiver() {
    return this._receiver;
  }

  get getBody() {
    return this._body;
  }

  get getType() {
    return this._type;
  }

  set setType(type) {
    this._type = type;
  }
}

export default Message;
