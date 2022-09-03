function buySellTime(inpArray)
{
    let profit = 0;
    let buyPrice = inpArray[0];

    for (let i = 1; i < inpArray.length; i++) {
        if(buyPrice > inpArray[i]) {
            buyPrice = inpArray[i];
        }

        let curProfit = inpArray[i] - buyPrice;
        if(curProfit > profit) {
            profit = curProfit;
        }
    }

    return profit;
}

let stock1 = [7,1,5,3,6,4];
console.log(buySellTime(stock1));

let stock2 = [7,6,4,3,1];
console.log(buySellTime(stock2));