const Stack = require("../lib/stack");

const isPalindrome = (sentence) => {
  sentence = sentence.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let middle = Math.floor(sentence.length / 2)

  const stack = new Stack();

  for (let i = 0; i < middle; i++) {
    stack.push(sentence[i]);
  }

  if (sentence.length%2 !== 0) {
    middle++
  }

  for (let i = middle; i < sentence.length; i++) {
    let popped = stack.pop();
    if (sentence[i] !== popped) {
      return false;
    }
  }

  return true;
};

module.exports = isPalindrome;
