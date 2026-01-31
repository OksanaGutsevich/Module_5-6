const age = prompt(`Введите ваш возраст`);
if (age === null || isNaN(age) || age.trim() === ``) {
   alert(`Вы ввели не число или пустое место`); 
} else {
   const ageNum = Number(age);
   if (ageNum < 18) {
      alert(`Вы не можете брать кредит!`);
   } else if (ageNum >= 18 && ageNum <= 21) {
       let sum = prompt(`Мы можем вам выдать максимум 50 000.\nВведите сумму кратную 1000`);
       if (sum === null || isNaN(sum) || sum.trim() === ``) {
           alert(`Вы ввели не число или пустое место`);
       } else {
           const sumNum = Number(sum);
           if (sumNum > 50000) {
               alert(`Максимальная сумма для вашего возраста 50 000`);
           } else if (sumNum % 1000 !== 0) {
               let roundedSum = Math.floor(sumNum / 1000) * 1000;
               alert(`Мы можем вам выдать ${roundedSum}`);
           } else {
               alert(`Кредит на сумму ${sumNum} рублей одобрен!`);
           }
       }
   } else if (ageNum >= 22 && ageNum <= 35) {
       let sum = prompt(`Мы можем вам выдать максимум 400 000.\nВведите сумму кратную 1000`);
       if (sum === null || isNaN(sum) || sum.trim() === ``) {
           alert(`Вы ввели не число или пустое место`);
       } else {
           const sumNum = Number(sum);
           if (sumNum > 400000) {
               alert(`Максимальная сумма для вашего возраста 400 000`);
           } else if (sumNum % 1000 !== 0) {
               let roundedSum = Math.floor(sumNum / 1000) * 1000;
               alert(`Мы можем вам выдать ${roundedSum}`);
           } else {
               alert(`Кредит на сумму ${sumNum} рублей одобрен!`);
           }
       }
   } else if (ageNum >= 36 && ageNum <= 65) {
       let sum = prompt(`Мы можем вам выдать максимум 1 000 000.\nВведите сумму кратную 1000`);
       if (sum === null || isNaN(sum) || sum.trim() === ``) {
           alert(`Вы ввели не число или пустое место`);
       } else {
           const sumNum = Number(sum);
           if (sumNum > 1000000) {
               alert(`Максимальная сумма для вашего возраста 1 000 000`);
           } else if (sumNum % 1000 !== 0) {
               let roundedSum = Math.floor(sumNum / 1000) * 1000;
               alert(`Мы можем выдать ${roundedSum}`);
           } else {
               alert(`Кредит на сумму ${sumNum} рублей одобрен!`);
           }
       }
   } else {
       alert(`Видимо кредит вам не нужен. Всего доброго!`);
   }
}
