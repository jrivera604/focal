let args = process.argv;
let input = (args.slice(2));
let result = "";
const rollDice = function(input) {
  for (let i = 1; i <= input; i++) {
    
    if (i  < input) {
      result += Math.floor(Math.random() * 6 + 1) + ", ";
    } else {
      result += Math.floor(Math.random() * 6 + 1) + "";
    }
  }

  return result;
};
console.log(`Rolled ${input} dice: `, rollDice(input));