function maxProfit(prices: number[]): number {
    let maxProfit: number = 0;
    let minBuyPrice: number = prices[0];

    for (let x = 1; x < prices.length; x++) {
        if (prices[x] - minBuyPrice > maxProfit) {
            maxProfit = prices[x] - minBuyPrice;
        }

        if (minBuyPrice > prices[x]) {
            minBuyPrice = prices[x];
        }
    }
    return maxProfit;
};