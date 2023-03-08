/* Опишите три случая: когда х - число, x - строкa или x - логический тип. В других случаях выводите сообщение: «Тип x не определён». */

var x = 123;

function detectType(entry) {
   if (typeof entry === 'number') {
      console.log('х - число');
      return;
   }
   if (typeof entry === 'string') {
      console.log('х - строкa');
      return;
   }
   if (typeof entry === 'boolean') {
      console.log('х - логический тип');
      return;
   }

   console.log('Тип x не определён');
}

detectType(x);