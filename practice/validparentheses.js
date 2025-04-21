function isValid(s) {
  const stack = [];
  const map = { ")": "(", "}": "{", "]": "[" }; // Mapeia fechamentos para aberturas
  for (let char of s) {
    if (["(", "{", "["].includes(char)) {
      stack.push(char); // Empilha caracteres de abertura
    } else {
      if (stack.pop() !== map[char]) {
        return false; // Verifica correspondência dos pares
      }
    }
  }
  return stack.length === 0; // Verifica se todos os pares foram fechados
}

// Feedback
console.log("Valid Parentheses:");
console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("([)]")); // false
console.log(isValid("{[]}")); // true
