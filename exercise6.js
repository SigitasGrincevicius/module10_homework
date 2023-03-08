/* Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. 
Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые. */

const arr = [3, 3, 3, 3];
let allElementsEqual = true;

for (let i = 1; i < arr.length; i++) {
   if (arr[i] !== arr[0]) {
      allElementsEqual = false;
      break;
   }
}

if (allElementsEqual)
   console.log("All elements in this array are equal");
else 
	console.log("Elements in array are not equal")