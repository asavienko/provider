import MessageType from "./MessageType.js";

class Provider {
  constructor() {
    this._messageList = [];
    this._userList = [];
  }

  static randomDelay() {
    return Math.floor(Math.random() * 4 + 1) * 1000;
  }

  get getMessageList() {
    return this._messageList;
  }

  sendMessage(message) {
    return new Promise((resolve, reject) =>
      setTimeout(() => {
        const receiver = this._findUserById(message.getReceiver);

        if (!receiver) {
          reject("User: " + message.getReceiver + " - is not exist");
          return;
        }

        const type = this._chooseMessageType(message.getBody);
        message.setType = type;

        const messagePrice = type.getPrice;

        const creator = this._findUserById(message.getCreator);

        if (!creator || creator.getBalance < messagePrice) {
          reject("You have low balance: " + creator.getBalance);
          return;
        }

        creator.withdraw(messagePrice);
        this._messageList.push(message);
        resolve(creator.getBalance);
      }, Provider.randomDelay())
    );
  }

  receiveMessages(userId) {
    return this._messageList.filter(function(message) {
      return message.getReciver === userId;
    });
  }

  get getUserList() {
    return this._userList;
  }

  addUser(user) {
    this._userList.push(user);
  }

  deleteUser(userID) {
    const currentUser = this._findUserById(userID);
    currentUser &&
      this._userList.splice(this._userList.indexOf(currentUser), 1);
  }

  getUserBalance(userId) {
    const currentUser = this._findUserById(userId);
    return currentUser.getBalance;
  }

  addUserBalance(userId, addBalance) {
    const currentUser = this._findUserById(userId);
    currentUser.addMoney(addBalance);
  }

  _findUserById(userId) {
    return this._userList.find(
      userFromList => userFromList.getUserId === userId
    );
  }

  _chooseMessageType(messageBody) {
    const length = messageBody.length;
    switch (true) {
      case length < 10:
        return new MessageType("small_message", 1);
      case length < 50:
        return new MessageType("medium_message", 2);
      default:
        return new MessageType("large_message", 10);
    }
  }
}

export default Provider;
