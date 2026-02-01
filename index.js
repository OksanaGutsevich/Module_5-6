/*Задание 6.6.1 - "Довод"*/
const word = "Довод";
const wordLowerCase = word.toLowerCase();

let palindrome = true;

for(let i = 0; i < wordLowerCase.length/2; i +=1) {
    if (wordLowerCase[i] !== wordLowerCase[wordLowerCase.length-1-i]) {
        palindrome = false;
        break;
    }
}
if (palindrome) {
    console.log(`Слово ${word} является палиндромом`);
} else {
    console.log(`Слово ${word} не является палиндромом`);
} 


/*Задание 6.6.1 - "Сантиметр"*/
const wordTwo = "Сантиметр";
const wordTwoLowerCase = wordTwo.toLowerCase();

let palindromeTwo = true;

for(let i = 0; i < wordTwoLowerCase.length/2; i +=1) {
    if (wordTwoLowerCase[i] !== wordTwoLowerCase[wordTwoLowerCase.length-1-i]) {
        palindromeTwo = false;
        break;
    }
}
if (palindromeTwo) {
    console.log(`Слово ${wordTwo} является палиндромом`);
} else {
    console.log(`Слово ${wordTwo} не является палиндромом`);
}

/*Задание 6.6.2*/
const arrTest = [1, 2, 3, 1, 5, 4, 2, 3, 5, 'they', 'don\'t', 'know', 'that', 'we', 'know', 'that', 'they', 'know' ]; 
const uniqSet = new Set(arrTest);
const uniqArr = Array.from(uniqSet);
console.log(uniqArr); //

/*Задание 6.6.3*/
const number = Number(prompt(`Введите любое число`));
if (!Number.isFinite(number)) {
    console.log (`Вы ввели не число`);
} else {
    const numbers = [];
    for (let i = 0;i <= number; i +=1) {
    numbers.push(i);
    }
console.log(numbers);
}

/*Задание 6.6.4*/
const data = [`x`,`о`,`х`,`о`,`х`,`о`,`х`,`о`,`х`];
const arr = [];
let index = 0;
for (let i = 0; i<3; i +=1) {
   arr[i] = [];
   for (let j = 0; j < 3; j +=1) {
    arr[i][j] = data[index];
    index +=1;
   } 
}
console.log(arr);
let str = ``;
for (let i = 0; i < arr.length; i +=1) {
    for (let j = 0; j < arr.length; j +=1) {
        str += `${arr[i][j]}`;
    }
    str += `\n`;
}
console.log(str);

/*Задание 6.6.5*/
 const obj = {
    some: 'some',
    dom: 'text',
    arr: [1, 2, 3, 4, 5],
    tom: 'there'
};
const arrValues = [];
for (let key in obj) {
    const value = obj[key];
    if (Array.isArray(value)) {
        for (let item of value) {
            arrValues.push(item);
        }
    } else {
        arrValues.push(value);
    }
}
console.log(arrValues);