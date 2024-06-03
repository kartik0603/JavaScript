// Encapsulation OOP

class BankAccount {
  #accountNo;
  #username;
  #branch;
  #amount;

  constructor(accountNo, username, branch, limit) {
    this.#accountNo = accountNo;
    this.#username = username;
    this.#branch = branch;
    this.#amount = 0;

    this.limit = 50000;
  }

  getAccountNo() {
    return this.#accountNo;
  }

  setAccountNo(accountNo) {
    this.#accountNo = accountNo;
  }

  getUsername() {
    return this.#username;
  }

  setUsername(username) {
    this.#username = username;
  }

  getBranch() {
    return this.#branch;
  }

  setBranch(branch) {
    this.#branch = branch;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#amount += amount;
    } else {
      console.log("Please Enter Correct Amount that Must Be Greater than Zero");
    }
  }

  getAmount() {
    return this.#amount;
  }

  #isWalletAvailable(reqAmount) {
    if (reqAmount > 0) {
      return reqAmount <= this.getAmount();
    } else {
      console.log("Amount Must be Greater Than Zero");
      return false;
    }
  }

  withdraw(reqAmount) {
    if (this.#isWalletAvailable(reqAmount)) {
      this.#amount -= reqAmount;
      console.log("Please Collect Your Amount");
    }
  }
}

// let ac = new BankAccount(625982650000, "Abhishek B Hirapara", "Surat");

// //   console.log(ac);
// console.log(ac.getAccountNo());
// console.log(ac.getUsername());
// console.log(ac.getBranch());

// ac.deposit(10000);
// //   console.log("Current Balance:", ac.getAmount());

// ac.withdraw(5000);
// console.log("After Withdraw Your Balnce is :", ac.getAmount());


// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//   Inheritence OOP

class SallaryAccount extends BankAccount {
  #creditLimit;
  #creditUsed;

  constructor(accountNo, username, branch, creditLimit) {
    super(accountNo, username, branch);
    this.#creditLimit = creditLimit;
    this.#creditUsed = 0; // Initially, no credit is used
  }

  pay(amount) {
    if (amount > 0 && amount <= this.#creditLimit - this.#creditUsed) {
      this.#creditUsed += amount;
      console.log("Paid Amount:", amount);
    } else {
      console.log("Cannot process payment. Amount exceeds available credit.");
    }
  }

  getRemainingCredit() {
    return this.#creditLimit - this.#creditUsed;
  }

  billPayment(amount) {
    if (amount > 0 && amount <= this.#creditUsed) {
      this.#creditUsed -= amount;
      console.log("Bill payment successful. Amount:", amount);
    } else {
      console.log(
        "Cannot process bill payment. Amount exceeds credit used or is invalid."
      );
    }
  }

  generateBill() {
    return this.#creditUsed;
  }
}

// Usage example:
let sc = new SallaryAccount(
  625982650000,
  "Abhishek B Hirapara",
  "Surat",
  50000
);

// Make a payment of 2000
sc.pay(2000);
// console.log(
//   "After Shopping Bill Payment, Your Remaining Credit is:",
//   sc.getRemainingCredit()
// );

// Pay the credit card bill


// sc.billPayment(2000);
// console.log(
//   "After Bill Payment, Your Remaining Credit is:",
//   sc.getRemainingCredit()
// );

sc.generateBill()
{
    console.log("Your Credit Card Bill After Your Shopping is :",sc.generateBill());
}
