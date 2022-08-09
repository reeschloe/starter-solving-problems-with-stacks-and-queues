const Stack = require("../lib/stack");

const match = (expression) => {
    const stack = new Stack();

    for (let i = 0; i < expression.length; i++) {
        let char = expression[i]
        if (char === "(") {
            stack.push(char)
        } else if (char === ")") {
            if (stack.top) {
               stack.pop(); 
            } else {
                return false
            } 
        }
    }

    if (!stack.top) {
        return true
    } else {
        return false
    }
};

module.exports = match;
