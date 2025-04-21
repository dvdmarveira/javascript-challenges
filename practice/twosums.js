function twoSum(nums, target) {
  const map = new Map(); // Mapa para armazenar número e seu índice
  for (let index = 0; index < nums.length; index++) {
    const complement = target - nums[index]; // Número necessário para atingir o target
    if (map.has(complement)) {
      return [map.get(complement), index]; // Retorna os índices dos dois números
    }
    map.set(nums[index], index); // Armazena o número atual e seu índice
  }
  return []; // Retorna array vazio se não encontrar
}

console.log("Two Sum:");
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1] → 2 + 7 = 9
console.log(twoSum([3, 2, 4], 6)); // [1, 2] → 2 + 4 = 6
console.log(twoSum([3, 3], 6)); // [0, 1]
