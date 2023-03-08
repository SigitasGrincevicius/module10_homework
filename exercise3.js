let string = 'Hello';
let backwardsString = '';

for (let i = string.length - 1; i >= 0; i--) {
   backwardsString += string[i];
}

console.log(backwardsString);