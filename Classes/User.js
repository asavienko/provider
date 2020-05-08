import LowBalanceError from "./LowBalanceError.js";

class User {
  constructor(userId) {
    this._id = userId;
    this._balance = 0;
  }
  get id() {
    return this._id;
  }
  get balance() {
    return this._balance;
  }

  withdraw(money) {
    if (money > this._balance) {
      throw new LowBalanceError("User has low balance");
    }
    this._balance -= money;
  }

  addMoney(money) {
    if (money > 0) this._balance += money;
  }
}

export default User;
