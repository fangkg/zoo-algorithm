const maxProfit = (prices) => {
    let num = 0;
    let aftOff = prices.length - 1;
    let offSet = prices.length - 1;
    while(offSet > 0) {
        if(prices[offSet] > prices[offSet - 1]) {
            offSet -= 1;
        } else {
            num += prices[aftOff] - prices[offSet];
            offSet -= 1;
            aftOff = offSet;
        }
    }

    if(aftOff !== offSet) {
        num += prices[aftOff] - prices[offSet];
    }

    return num;
}