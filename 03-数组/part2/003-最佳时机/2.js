const maxProfit = function(prices) {
    const totalBenefit = 0;
    const offset =  1;
    const len = prices.length;
    while(offset <= len - 1) {
        const curPrice = prices[offset];
        const prePrice = prices[offset - 1];
        if(curPrice > prePrice) {
            totalBenefit += curPrice - prePrice;
        }
        offset += 1;
    }

    return totalBenefit;
}