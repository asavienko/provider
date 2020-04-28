import MessageType from "./MessageType.js";

function Provider() {
  this._messageCache = [];
  this._userList = [];
}

Provider.prototype = {
  constructor: Provider,
  _chooseMessageType: function(messageBody) {
    var length = messageBody.length;
    switch (true) {
      case length < 10:
        return new MessageType("small_message", 1);
      case length < 50:
        return new MessageType("medium_message", 2);
      default:
        return new MessageType("large_message", 10);
    }
  },
  _findMessages: function(receiver) {
    const foundMessages = this._messageCache.find(function(message) {
      return message.receiver === receiver;
    });
    if (!foundMessages.length) throw new ThereAreAnyNewMessage(); //add error
    return foundMessages;
  },
  _findUserById: function(userId) {
    var foundUserArr = this._userList.find(function(userFromList) {
      userFromList._getUserId() === userId;
    });
    if (!foundUserArr.length) throw new NotFoundReceiverError();
    return foundUserArr[0];
  },
  sendMessage: function(message) {
    var type = this._chooseMessageType(message.body);
    message.type = type;
    var receiver = this._findUserById(message.receiver);
    receiver.withdraw(message.type.getPrice());
    this._messageCache.push(message);
  },
  receiveMessages: function(userId) {
    var foundMessages = this._findMessages(userId);
    var newMessageCache = this._messageCache.filter(function(message) {
      message.getReceiver() !== userId;
    });
    this._messageCache = newMessageCache;
    return foundMessages;
  },
  addUser: function(user) {
    if (!(user instanceof User)) throw new SendInstanceOfUserError(); //add error
    this._messageCache.push(user);
  },
  deleteUser: function(userID) {
    var newUserList = this._userList.filter(function(user) {
      return user.getUserId() !== userID;
    });
    this._userList = newUserList;
  },
  getUserBalance: function(userId) {
    var currentUser = this._findUserById(userId);
    return currentUser.getBalance();
  },
  addBalance: function(userId, addBalance) {
    var currentUser = this._findUserById(userId);
    currentUser.addMoney(addBalance);
  }
};
