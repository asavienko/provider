function PositiveNumberError() {
  this.name = "Balance Error";
  this.message = "You can add to balance only positive number";
}

PositiveNumberError.prototype = Object.create(Error.prototype);
PositiveNumberError.prototype.constructor = PositiveNumberError;

function LowBalanceError() {
  this.name = "Balance Error";
  this.message = "User don't have enough money";
}

LowBalanceError.prototype = Object.create(Error.prototype);
LowBalanceError.prototype.constructor = LowBalanceError;

function NotFoundReceiverError() {
  this.name = "User error";
  this.message = "Receiver is not found";
}

NotFoundReceiverError.prototype = Object.create(Error.prototype);
NotFoundReceiverError.prototype.constructor = NotFoundReceiverError;

export default {
  PositiveNumberError: PositiveNumberError,
  LowBalance: LowBalanceError,
  NotFoundReceiver: NotFoundReceiverError
};
