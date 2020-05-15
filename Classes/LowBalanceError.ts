class LowBalanceError extends Error {
  public message: string;
  constructor(message: string) {
    super(message);
    this.name = "Balance Error";
  }
}

export default LowBalanceError;
