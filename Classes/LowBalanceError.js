class LowBalanceError extends Error {
  constructor(message) {
    super(message);
    this.name = "Balance Error";
  }
}

export default LowBalanceError;
