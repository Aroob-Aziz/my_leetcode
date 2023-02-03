const maxProfit = function (prices) {
  let minimum_purchase = prices[0];
  let profit = 0;

  for (let i = 0; i < prices.length; i++) {
    minimum_purchase = Math.min(minimum_purchase, prices[i]);
    profit = Math.max(profit, prices[i] - minimum_purchase);
  }
  return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
