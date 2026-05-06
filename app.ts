import { CompanyAccount } from "./class/CompanyAccount";
import { NewAccount } from "./class/NewAccount";
import { PeopleAccount } from "./class/PeopleAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(1, "Nath", 10);
console.log(`Saldo PeopleAccount ${peopleAccount.getBalance()}`);
peopleAccount.deposit(10);
console.log(`Saldo PeopleAccount ${peopleAccount.getBalance()}`);
peopleAccount.withdraw(5);
console.log(`Saldo PeopleAccount ${peopleAccount.getBalance()}`);
peopleAccount.withdraw(10);
console.log(`Nome PeopleAccount ${peopleAccount.getName()}`);
console.log(
  `Número da conta PeopleAccount ${peopleAccount.getAccountNumber()}`,
);

const companyAccount: CompanyAccount = new CompanyAccount("DIO", 20);
companyAccount.getLoan(10);
console.log(`Saldo DIO ${companyAccount.getBalance()}`);

const thirdAccound: NewAccount = new NewAccount("Third", 3);
thirdAccound.deposit(10);
console.log(`Saldo Third ${thirdAccound.getBalance()}`);

