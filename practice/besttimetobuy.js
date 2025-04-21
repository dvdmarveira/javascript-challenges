function maxProfit(prices) {
  let minPrice = Infinity; // Inicializa com infinito
  let maxProfit = 0;

  for (let price of prices) {
    minPrice = Math.min(minPrice, price); // Atualiza o menor preço
    maxProfit = Math.max(maxProfit, price - minPrice); // Calcula o lucro máximo
  }

  return maxProfit;
}

// Feedback
console.log("Best Time to Buy and Sell Stock:");
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5 (buy at 1, sell at 6)
console.log(maxProfit([7, 6, 4, 3, 1])); // 0 (no profit)
