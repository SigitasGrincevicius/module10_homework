/* Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно.
При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее. */

const arr = [1, 2, 3, 0, 0, 89, 8, 'www', null];

let oddCount = 0;
let evenCount = 0;
let zeroCount = 0;

for (let i = 0; i < arr.length; i++) {
   if (typeof arr[i] !== 'number') {
      continue;
   }

   if (arr[i] === 0) {
      zeroCount++;
   } else if (arr[i] % 2 === 0) {
      evenCount++
   } else if (arr[i] % 2 === 1) {
      oddCount++;
   }
}

console.log(`Kоличество чётных элементов в массиве: ${evenCount}`);
console.log(`Kоличество нечётных элементов в массиве: ${oddCount}`);
console.log(`Kоличество нулевых элементов в массиве: ${zeroCount}`);