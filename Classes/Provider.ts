import MessageType from "./MessageType.js";
import List from "./List.js";
import { IListable, IMessagable, IUserable } from "./interfaces";

class Provider<T extends IMessagable, U extends IUserable> {
  private _messageList: IListable<T>;
  private _userList: IListable<U>;
  constructor() {
    this._messageList = new List<T>();
    this._userList = new List<U>();
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

  get messageList() {
    return this._messageList.toArray();
  }

  sendMessage(message: T) {
    return new Promise<number>((resolve, reject) =>
      setTimeout(() => {
        const receiver = this._userList.getById(message.receiver);

        if (!receiver) {
          reject("User: " + message.receiver + " - is not exist");
          return;
        }

        const type = Provider.chooseMessageType(message.body);
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

  addUser(user: U) {
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
}

export default Provider;
