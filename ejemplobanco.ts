class AssertionError extends Error{
    constructor(message ?: string){
        super(message);
        this.name = 'AssertionError';
    }
}
//Imaginar el sgt. caso, crear los metodos esenciales , para crear un nro de cuneta,
// actualizar el numero de cuenta
//eliminar el numero de cuenta y obtener todos los datos de la cuenta, 
//incluido el balance
//debemos cumplir el diseño por contrato
class BankAccount {
    private _balance: number;

    constructor(initialBalance: number){
        //Invariante
        if(initialBalance < 0){
            throw new AssertionError('Initial balance must be positive');
        }

        this._balance = initialBalance;

    }

    deposit(amount: number): void{
        //Precondiciones
        if(amount <= 0){
            throw new AssertionError('Deposit amount should be positive');
        }

        this._balance += amount;

        //Postcondicion
        if(this._balance < 0){
            throw new AssertionError('Balance should not be negative after deposit');
        }
    }

    debit(amount: number): void{
        //Precondicion
        if(this._balance < amount){
            throw new AssertionError('It is not possible');
        }

        this._balance -= amount;

        //Postcondicion
        if(this._balance < 0){
            throw new AssertionError('Balance should not be negative after deposit');
        }
    }

    get balance(): number{
        return this.balance;
    }
}