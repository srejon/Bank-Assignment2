function userDeposit(){
    const depositInput = document.getElementById("amount");
    const depositValue = depositInput.value;
    const depositIt = Number(depositValue);

    //done deposit calculation
    const previousDepositText = document.getElementById("deposit");
    const previousDepositValue = previousDepositText.innerText;
    const previousDeposit = Number(previousDepositValue);
    
    const newDeposit = depositIt + previousDeposit;
    previousDepositText.innerText = newDeposit;

    //done Total Deposit
    const previousTotalText = document.getElementById("total");
    const previousTotalValue = previousTotalText.innerText;
    const previousTotal = Number(previousTotalValue);

    const newTotal = depositIt + previousTotal;
    previousTotalText.innerText = newTotal;

}