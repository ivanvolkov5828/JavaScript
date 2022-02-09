//5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.

// Простой вариант решения задачи
function summation(num1, num2){
    return num1 + num2
}

function difference(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

let first = 10, second = 5;

console.log("Сумма: ", summation(first, second));
console.log("Разность: ", difference(first, second));
console.log("Умножение: ", multiply(first, second));
console.log("Деление: ", divide(first, second));

// Вариант посложнее :)

function calc(num1, num2, sign){
    switch(sign){

        case '+':
            console.log("Сумма: ");
            return num1 + num2;

        case '-':
            console.log("Разность: ");
            return num1 - num2;

        case '*':
            console.log("Умножение: ");
            return num1 * num2;

        case '/':
            console.log("Деление: ");
            return num1 / num2;
    }
}

console.log("-------------------");
console.log(calc(10, 5, '+'));
console.log(calc(10, 5, '-'));
console.log(calc(10, 5, '*'));
console.log(calc(10, 5, '/'));