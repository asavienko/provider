function Message(creator, receiver, body) {
  this._id = getNextId();
  this._creator = creator;
  this._receiver = receiver;
  this._body = body;
  this._type = null;
}

Message.idCounter = 1000000000;

Message.getNextId = function() {
  return this.idCounter++;
};

Message.prototype = {
  constructor: Message,

  getCreator: function() {
    return this._creator;
  },
  getReceiver: function() {
    return this._receiver;
  },
  getBody: function() {
    return this._body;
  },
  getType: function() {
    return this._type;
  },
  setType: function(type) {
    this._type = type;
  }
};

export default Message;
