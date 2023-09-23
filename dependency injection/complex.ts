interface TransactionMethod {
    processTransaction(amount: number): void;
}
class WebApp implements TransactionMethod {
    processTransaction(amount: number) {
        console.log(`Processing transaction of $${amount} via WebApp.`);
    }
}
class MobileApp implements TransactionMethod {
    processTransaction(amount: number) {
        console.log(`Processing transaction of $${amount} via MobileApp.`);
    }
}
class ATMMachine implements TransactionMethod {
    processTransaction(amount: number) {
        console.log(`Processing transaction of $${amount} via ATM.`);
    }
}
class BankAccount {
    balance: number;
    transactionMethod: TransactionMethod;
    constructor(initialBalance: number, transactionMethod: TransactionMethod) {
        this.balance = initialBalance;
        this.transactionMethod = transactionMethod;
    }
    makeTransaction(amount: number) {
        if (amount > this.balance) {
            console.log("Insufficient funds.");
            return;
        }

        this.transactionMethod.processTransaction(amount);
        this.balance -= amount;
        console.log(`New balance: $${this.balance}`);
    }
}
const webApp = new WebApp();
const mobileApp = new MobileApp();
const atmMachine = new ATMMachine();
const johnsAccount = new BankAccount(1000, webApp);
johnsAccount.makeTransaction(100);
johnsAccount.transactionMethod = mobileApp;
johnsAccount.makeTransaction(150);
johnsAccount.transactionMethod = atmMachine;
johnsAccount.makeTransaction(200);
