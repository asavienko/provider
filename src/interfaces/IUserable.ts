export default interface IUserable {
  getId(): string;
  getBalance(): number;
  withdraw(money: number): void;
  payment(money: number): void;
}
