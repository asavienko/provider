function MessageType(name, price) {
  this._name = name;
  this._price = price;
}

MessageType.prototype = {
  constructor: MessageType,

  getName: function() {
    return this._name;
  },

  setName: function(name) {
    this._name = name;
  },

  getPrice: function() {
    return this._price;
  },

  setPrice: function(price) {
    this._price = price;
  }
};

export default MessageType;
