function checkLoanEligibility(
  customerName: string,
  creditScore: number,
  income: number,
  isEmployed: boolean,
  debtToIncomeRatio: number
) {

  // Case 1: > 750
  if (creditScore > 750) {
    console.log(customerName + " → Loan Approved");
  }

  // Case 2: < 650
  else if (creditScore < 650) {
    console.log(customerName + " → Loan Denied");
  }

  // Case 3: 650–750
  else if (creditScore >= 650 && creditScore <= 750) {
    console.log(customerName + " → Additional Checks Required");

    if (income >= 50000 && isEmployed && debtToIncomeRatio < 40) {
      console.log(customerName + " → Loan Approved");
    } else {
      console.log(customerName + " → Loan Denied");
    }
  }


//Switch case
  switch (true) {

    case (creditScore > 750):
      console.log(customerName + " → Loan Approved");
      break;

    case (creditScore < 650):
      console.log(customerName + " → Loan Denied");
      break;

    case (creditScore >= 650 && creditScore <= 750):
          console.log(customerName + " → Additional Checks Required");
          // break

      switch (true) {

        case (income < 50000):
          console.log(customerName + " → Loan Denied");
          break;

        case (!isEmployed):
          console.log(customerName + " → Loan Denied");
          break;

        case (debtToIncomeRatio < 40):
          console.log(customerName + " → Loan Approved");
          break;

        default:
          console.log(customerName + " → Loan Denied");
      }
      break;

    default:
      console.log(customerName + " → Loan Denied");
  }
}

checkLoanEligibility("John Doe", 720, 55000, true, 35);


