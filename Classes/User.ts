import LowBalanceError from "./LowBalanceError.js";
import { IUserable } from "./interfaces";

class User implements IUserable {
  protected _id: string;
  protected _balance: number;
  constructor(userId: string) {
    this._id = userId;
    this._balance = 0;
  }
  getId() {
    return this._id;
  }
  getBalance() {
    return this._balance;
  }

  withdraw(money: number) {
    if (money > this._balance) {
      throw new LowBalanceError("User has low balance");
    }
    this._balance -= money;
  }

  payment(money: number) {
    if (money > 0) this._balance += money;
  }
}

export default User;
