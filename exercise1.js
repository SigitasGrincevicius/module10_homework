// git add . 
// git commit -m "stuff"
// git push -u origin main

let entry = prompt('Пожалуйста введите число');

let enteredNumber = +entry;

function printNumberType(number) {
   if (isNaN(number)) {
      console.log('Упс, кажется, вы ошиблись');
      return;
   }
   if (enteredNumber % 2 === 0) {
      console.log('Чётное число');
      return;
   }

   console.log('Нечётное число');
}

printNumberType(enteredNumber);