function Message(creator, receiver, body) {
  //
  // # id: String
  // # creator: String
  // # receiver: String
  // # body: String
  // # type: MessageType

  this._id = generateUniqId();
  this._creator = creator;
  this._receiver = receiver;
  this._body = body;
  this._type;

  function generateUniqId() {
    return Math.floor(Math.random() * 1000000000);
  }
}

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
