/*class LowBalanceError extends Error {
  constructor(message) {
    super(message);
    this.name = "Balance Error";
  }
}*/

class LowBalanceError extends Error {
  constructor(message) {
    super();
    this.message = message;
    this.name = "Balance Error";
  }
}

throw new LowBalanceError("Some message about error");

export default LowBalanceError;
