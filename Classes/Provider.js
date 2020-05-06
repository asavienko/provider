import MessageType from "./MessageType.js";

function Provider() {
  this._messageList = [];
  this._userList = [];
}

Provider.randomDelay = function() {
  var delay = Math.floor(Math.random() * 4 + 1) * 1000;
  return delay;
};

Provider.prototype = {
  constructor: Provider,

  getMessageList: function() {
    return this._messageList;
  },

  sendMessage: function(message, callback) {
    function onTimoutFinish() {
      var receiverFromMessage = message.getReceiver();
      var receiver = this._findUserById(receiverFromMessage);
      if (!receiver) {
        callback &&
          callback("User: " + receiverFromMessage + " - is not exist");
        return;
      }
      var type = this._chooseMessageType(message.getBody());
      message.setType(type);

      var messagePrice = type.getPrice();
      var creator = this._findUserById(message.getCreator());

      if (creator.getBalance() < messagePrice) {
        callback && callback("You have low balance: " + creator.getBalance());
        return;
      }
      creator.withdraw(messagePrice);
      this._messageList.push(message);
      callback && callback(null, creator.getBalance());
    }

    setTimeout(onTimoutFinish.bind(this), Provider.randomDelay());

    /*    try {
      receiver.withdraw(message.getType().getPrice());
    } catch (e) {
      console.error(e);
    }*/
  },

  sendMessageSync: function() {
    var self = this;
    function sendMessagesArr(arr, callback) {
      var ell = [].shift.call(arr);

      if (ell) {
        return function(err, balance) {
          if (err) {
            console.error(err);
          }
          if (balance) {
            console.log(balance);
          }
          this.sendMessage(ell, sendMessagesArr(arr));
        }.bind(self);
      }
      return function(err, balance) {
        if (err) {
          console.error(err);
        }
        if (balance) {
          console.log(balance);
        }
      };
    }
    sendMessagesArr(arguments)();
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
