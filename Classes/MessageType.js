class MessageType {
  constructor(name, price) {
    this._name = name;
    this._price = price;
  }
  get getName() {
    return this._name;
  }

  set setName(name) {
    this._name = name;
  }

  get getPrice() {
    return this._price;
  }

  set setPrice(price) {
    this._price = price;
  }
}

export default MessageType;
