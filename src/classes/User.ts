import LowBalanceError from "./LowBalanceError.js";
import IUserable from "../interfaces/IUserable";

class User implements IUserable {
  protected _id: string;
  protected _balance: number;
  constructor(userId: string) {
    this._id = userId;
    this._balance = 0;
  }
  public getId(): string {
    return this._id;
  }
  public getBalance(): number {
    return this._balance;
  }

  public withdraw(money: number): void {
    if (money > this._balance) {
      throw new LowBalanceError("User has low balance");
    }
    this._balance -= money;
  }

  public payment(money: number): void {
    if (money > 0) this._balance += money;
  }
}

export default User;
