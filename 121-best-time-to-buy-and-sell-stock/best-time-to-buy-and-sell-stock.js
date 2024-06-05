/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    if (prices.length === 0 || prices.length === 1) {
        return 0;
    }

    let left = 0, right = 1;
    let profit = 0;

    while (prices[right] !== undefined) {
        if (prices[left] < prices[right]) {
            profit = Math.max(profit, prices[right] - prices[left]);
            right++;
        } else {
            left = right;
            right++;
        }
    }

    return profit;
};