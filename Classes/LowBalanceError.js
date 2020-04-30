function LowBalanceError(message) {
  Error.call(this, message);
  this.name = "Balance Error";
}

LowBalanceError.prototype = Object.create(Error.prototype);
LowBalanceError.prototype.constructor = LowBalanceError;

export default {
  LowBalanceError: LowBalanceError
};
