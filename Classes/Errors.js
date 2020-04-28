function LowBalanceError() {
  Error.call(this);
  this.name = "Balance Error";
  this.message = "User have low balance";
}

LowBalanceError.prototype = Object.create(Error.prototype);
LowBalanceError.prototype.constructor = LowBalanceError;

export default {
  LowBalance: LowBalanceError
};
