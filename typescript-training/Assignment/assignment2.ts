function isLoanEligible(
  customerName: string,
  creditScore: number,
  income: number,
  isEmployed: boolean,
  debtToIncomeRatio: number
): string {

  // Rule 1: Credit Score
  if (creditScore > 750) {
    console.log(`${customerName} is eligible for the loan (High credit score).`);
  }

  if (creditScore < 650) {
    console.log(`${customerName} is NOT eligible for the loan (Low credit score).`);
  }

  // Rule 2: Income check (for 650–750)
  if (income < 50000) {
    console.log(`${customerName} is NOT eligible (Income below 50,000).`);
  }

  // Rule 3: Employment check
  if (!isEmployed) {
    console.log(`${customerName} is NOT eligible (Unemployed).`);
  }

  // Rule 4: Debt-to-Income Ratio
  if (debtToIncomeRatio < 40) {
    console.log(`${customerName} is eligible for the loan.`);
  } else {
    console.log(`${customerName} is NOT eligible (High DTI ratio).`);
  }
}



// 🔹 Given Input
const customerName = "John Doe";
const creditScore = 680;
const income = 45000.0;
const isEmployed = false;
const debtToIncomeRatio = 45.0;
isLoanEligible(
    customerName,
    creditScore,
    income,
    isEmployed,
    debtToIncomeRatio
  );

