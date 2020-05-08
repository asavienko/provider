class MessageType {
  constructor(name, price) {
    this._name = name;
    this._price = price;
  }
  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  get price() {
    return this._price;
  }

  set price(price) {
    this._price = price;
  }
}

export default MessageType;
