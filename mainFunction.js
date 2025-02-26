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

function userWithdrawal(){
    const withdrawInput = document.getElementById("amount");
    const withdrawValue = withdrawInput.value;
    const withdrawIt = Number(withdrawValue);


    //done withdraw calculation
    const previousWithdrawText = document.getElementById("withdraw");
    const previousWithdrawValue = previousWithdrawText.innerText;
    const previousWithdraw = Number(previousWithdrawValue);
    
    

    //done Total withdraw
    const previousTotalText = document.getElementById("total");
    const previousTotalValue = previousTotalText.innerText;
    const previousTotal = Number(previousTotalValue);

    if(withdrawIt > previousTotal){
        alert('Not enough money!');
        return;
    }else {
        const newWithdraw = withdrawIt + previousWithdraw;
        previousWithdrawText.innerText = newWithdraw;
        const newTotal =  previousTotal - withdrawIt;
        previousTotalText.innerText = newTotal;
    }
}