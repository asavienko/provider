import MessageType from "./MessageType.js";

function Provider() {
  this._messageCache = [];
  this._userList = [];
}

Provider.prototype = {
  constructor: Provider,

  sendMessage: function(message) {
    var type = this._chooseMessageType(message.body);
    message.type = type;
    var receiver = this._findUserById(message.receiver);

    if (!receiver) return;

    try {
      receiver.withdraw(message.type.getPrice());
    } catch (e) {
      console.error(e);
    }
    this._messageCache.push(message);
  },

  receiveMessages: function(userId) {
    return this._messageCache.filter(function(message) {
      return message.getReciver() === userId;
    });
  },

  addUser: function(user) {
    this._userList.push(user);
  },

  deleteUser: function(userID) {
    /* todo delete after review
    var newUserList = this._userList.filter(function(user) {
      return user.getUserId() !== userID;
    });
    this._userList = newUserList;
*/

    this._userList.some(function(user, index) {
      if (user.getUserId() !== userID) {
        return this._userList.splice(index, 1);
      }
    });
  },

  getUserBalance: function(userId) {
    var currentUser = this._findUserById(userId);
    return currentUser.getBalance();
  },

  _findUserById: function(userId) {
    var foundUserArr = this._userList.filter(function(userFromList) {
      userFromList.getUserId() === userId;
    });
    if (foundUserArr.length) {
      return foundUserArr[0];
    }
  },

  addUserBalance: function(userId, addBalance) {
    var currentUser = this._findUserById(userId);
    currentUser.addMoney(addBalance);
  },

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
  }
};

//check all methods
// remove exeptions
// do not toch private method
// call each method
