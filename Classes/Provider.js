import MessageType from "./MessageType.js";

function Provider() {
  this._messageList = [];
  this._userList = [];
}

Provider.prototype = {
  constructor: Provider,

  getMessageList: function() {
    return this._messageList;
  },

  sendMessage: function(message) {
    var receiver = this._findUserById(message.getReceiver());
    if (!receiver) return;

    var type = this._chooseMessageType(message.getBody());
    message.setType(type);

    var messagePrice = type.getPrice();
    if (receiver.getBalance() >= messagePrice) {
      receiver.withdraw(messagePrice);
      this._messageList.push(message);
    }

    /*    try {
      receiver.withdraw(message.getType().getPrice());
    } catch (e) {
      console.error(e);
    }*/
  },

  receiveMessages: function(userId) {
    return this._messageList.filter(function(message) {
      return message.getReciver() === userId;
    });
  },

  getUserList: function() {
    return this._userList;
  },

  addUser: function(user) {
    this._userList.push(user);
  },

  deleteUser: function(userID) {
    var currentUser = this._findUserById(userID);
    currentUser &&
      this._userList.splice(this._userList.indexOf(currentUser), 1);

    /*
    var newUserList = this._userList.filter(function(user) {
      return user.getUserId() !== userID;
    });
    this._userList = newUserList;
    */

    /*
    this._userList.some(function(user, index) {
      if (user.getUserId() !== userID) {
        return this._userList.splice(index, 1);
      }
    });
    */
  },

  getUserBalance: function(userId) {
    var currentUser = this._findUserById(userId);
    return currentUser.getBalance();
  },

  addUserBalance: function(userId, addBalance) {
    var currentUser = this._findUserById(userId);
    currentUser.addMoney(addBalance);
  },

  _findUserById: function(userId) {
    for (var currentUser of this._userList) {
      if (currentUser.getUserId() === userId) {
        return currentUser;
      }
    }

    /*   
      var foundUserArr = this._userList.filter(function(userFromList) {
      return userFromList.getUserId() === userId;
    });
    if (foundUserArr.length) {
      return foundUserArr[0];
    }
    */
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

export default Provider;
