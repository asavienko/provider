import MessageType from "./MessageType.js";

import { IListable, IMessagable, IUserable } from "./interfaces";

class Provider {
  private _messageList: IListable<IMessagable>;
  private _userList: IListable<IUserable>;
  constructor(
    messageList: IListable<IMessagable>,
    userList: IListable<IUserable>
  ) {
    this._messageList = messageList;
    this._userList = userList;
  }

  static randomDelay() {
    return Math.floor(Math.random() * 4 + 1) * 1000;
  }

  static chooseMessageType(messageBody: string) {
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

  getMessageList() {
    return this._messageList.toArray();
  }

  sendMessage(message: IMessagable) {
    return new Promise<number>((resolve, reject) =>
      setTimeout(() => {
        const receiver = this._userList.getById(message.getReceiver());

        if (!receiver) {
          reject("User: " + message.getReceiver() + " - is not exist");
          return;
        }

        const type = Provider.chooseMessageType(message.getBody());
        message.setType(type);

        const messagePrice = type.getPrice();

        const creator = this._userList.getById(message.getCreator());

        if (!creator || creator.getBalance() < messagePrice) {
          reject("You have low balance: " + creator.getBalance());
          return;
        }

        creator.withdraw(messagePrice);
        this._messageList.add(message);
        resolve(creator.getBalance());
      }, Provider.randomDelay())
    );
  }

  receiveMessages(userId: string) {
    return this._messageList.toArray().filter(message => {
      return message.getReceiver() === userId;
    });
  }

  getUserList() {
    return this._userList.toArray();
  }

  addUser(user: IUserable) {
    this._userList.add(user);
  }

  deleteUser(userID: string) {
    this._userList.removeById(userID);
  }

  getUserBalance(userId: string) {
    const currentUser = this._userList.getById(userId);
    return currentUser.getBalance();
  }

  userPayment(userId: string, money: number) {
    const currentUser = this._userList.getById(userId);
    currentUser.payment(money);
  }
}

export default Provider;
