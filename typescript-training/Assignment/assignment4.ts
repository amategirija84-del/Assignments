// Store bank transactions
let transactions:number[]=[50000,-2000,3000,-15000,-200,-300,4000,-3000];
let debitTransactions:number=0;
let creditTransactions:number=0;
let suspiciousCount:number = 0;

//Print total number of credit and debit transactions completed
for(let i:number=0;i<transactions.length;i++)
{
    if (transactions[i] <0)
    {
        debitTransactions=debitTransactions+Math.abs(transactions[i]);
        
    }
    else
    {
        creditTransactions=creditTransactions+transactions[i];
    }
// If any transaction limit exceeds +/- 10000 then print the message “Suspicious credit/ debit Transaction with Amount”  
    if (Math.abs(transactions[i]) > 10000) {
    console.log(`Suspicious transaction with Amount: ${transactions[i]}`);
    suspiciousCount++;
  }
}

// Print  Total debit and credit transactions
console.log(`Total debit transactions : ${debitTransactions}`);
console.log(`Total credit transactions: ${creditTransactions}`);

//Print total amount remaining at the end in Bank Account
let TotalamtRemained:number=creditTransactions-debitTransactions;
console.log(`The total amount remaining at the end in bank account : ${TotalamtRemained}`);

//print total number of suspicious transactions
console.log(`Total Suspicious Transactions: ${suspiciousCount}`);
