export abstract class DioAccount {
  private name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  getName = (): string => {
    return this.name;
  };

  getAccountNumber = (): number => {
    return this.accountNumber;
  };

  deposit(value: number): void {
    if (this.validateStatus()) {
      this.balance += value;
    }
  }

  withdraw = (value: number): void => {
    if (this.validateStatus()) {
      if (this.getBalance() >= value) {
        this.balance -= value;
      } else {
        console.log("Saldo insuficiente");
      }
    }
  };

  getBalance = (): number => {
    return this.balance;
  };

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error("Conta inválida");
  };
}
