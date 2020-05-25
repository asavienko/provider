class LowBalanceError extends Error {
  public name: string;
  constructor(message: string) {
    super(message);
    this.name = "Balance Error";
  }
}

export default LowBalanceError;
