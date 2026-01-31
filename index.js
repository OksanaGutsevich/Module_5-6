/* Задание 5.10.1*/
const number = +prompt(`Введите любое число`);
alert (`Введенное число - ${number}\nКвадрат числа - ${number ** 2}\nКуб числа - ${number ** 3}`);

/*Задание 5.10.2*/
const promo = prompt(`Введите промокод на скидку`);
const resultpromo = promo.toLowerCase();
if (resultpromo === `скидка`) {
    alert (`Промокод применён`);
} else {
    alert (`Промокод не работает`);
};

/*Задание 5.10.3*/
const nameInput = prompt(`Введите ваше имя`);
const yearOfBirth = prompt(`Введите год вашего рождения`);
const age = new Date().getFullYear() - yearOfBirth;
if (isNaN(age)) {
      alert (`Год должен быть числом!`)
} else {
   alert(` ${nameInput}:${age}`);
};

/*Задание 5.10.4*/
const nameInput_1 = prompt(`Введите ваше имя`);
const yearOfBirth_1 = prompt(`Введите год вашего рождения`);
const age_1 = new Date().getFullYear() - yearOfBirth_1;
if (isNaN(age_1)) {
      alert (`Год не число или пустое место`);
} else if (age_1%100 >=11 && age_1%100 <=14) {
   alert(` ${nameInput_1}:${age_1} лет`);
} else if (age_1%10 === 1) {
   alert(` ${nameInput_1}:${age_1} год`);
} else if (age_1%10 >=2 && age_1%10 <=4) {
   alert(` ${nameInput_1}:${age_1} года`);
} else {
   alert(` ${nameInput_1}:${age_1} лет`);
};

/*Задание 5.10.4 - второй вариант*/
const nameInput_2 = prompt(`Введите ваше имя`);
const yearOfBirth_2 = prompt(`Введите год вашего рождения`);
const age_2 = new Date().getFullYear() - yearOfBirth_2;
if (isNaN(age_2)) {
      alert (`Год не число или пустое место`);
} else if (age_2%100 >=11 && age_2%100 <=14) {
   alert(` ${nameInput_2}:${age_2} лет`);
} else {
   switch (age_2%10) {
      case 1:
         alert(` ${nameInput_2}:${age_2} год`);
         break;
      case 2:
      case 3:
      case 4:
         alert(` ${nameInput_2}:${age_2} года`);
         break;
      default:
         alert(` ${nameInput_2}:${age_2} лет`);
};
};