//Encapsulation
class BankAccount {

    #balance = 0;

    deposit(amount) {
        if(amount>0){
            this.#balance +=amount;
        }
    }

    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount();
account.deposit(2000);
let bal = account.getBalance();
console.log(bal);

//console.log(account.#balance);  //Private field '#balance' must be declared in an enclosing class