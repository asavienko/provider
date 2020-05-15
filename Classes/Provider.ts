import MessageType from "./MessageType.js";
import List from "./List.js";
import { IMessagable, IUserable } from "./interfaces";

class Provider {
  private _messageList: List<IMessagable>;
  private _userList: List<IUserable>;
  constructor() {
    this._messageList = new List<IMessagable>();
    this._userList = new List<IUserable>();
  }

  static randomDelay() {
    return Math.floor(Math.random() * 4 + 1) * 1000;
  }

  get messageList() {
    return this._messageList.toArray();
  }

  sendMessage(message: IMessagable) {
    return new Promise<string | number>((resolve, reject) =>
      setTimeout(() => {
        const receiver = this._userList.getById(message.receiver);

        if (!receiver) {
          reject("User: " + message.receiver + " - is not exist");
          return;
        }

        const type = this._chooseMessageType(message.body);
        message.type = type;

        const messagePrice = type.price;

        const creator = this._userList.getById(message.creator);

        if (!creator || creator.balance < messagePrice) {
          reject("You have low balance: " + creator.balance);
          return;
        }

        creator.withdraw(messagePrice);
        this._messageList.add(message);
        resolve(creator.balance);
      }, Provider.randomDelay())
    );
  }

  receiveMessages(userId: string) {
    return this._messageList.toArray().filter(message => {
      return message.receiver === userId;
    });
  }

  get userList() {
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
    return currentUser.balance;
  }

  userPayment(userId: string, money: number) {
    const currentUser = this._userList.getById(userId);
    currentUser.payment(money);
  }

  private _chooseMessageType(messageBody: string) {
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
