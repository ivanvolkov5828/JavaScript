// 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
// где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости
// от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 5)
// и вернуть полученное значение (использовать switch).

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

function mathOperation(arg1, arg2, operation) {
    switch(operation){

        case '+':
            console.log("Сумма: ", summation(arg1, arg2));
            break;

        case '-':
            console.log("Разность: ", difference(arg1, arg2));
            break;

        case '*':
            console.log("Умножение: ", multiply(arg1, arg2));
            break;

        case '/':
            console.log("Деление: ", divide(arg1, arg2));
            break;
    }
}

mathOperation(10, 5, '+');
mathOperation(10, 5, '-');
mathOperation(10, 5, '*');
mathOperation(10, 5, '/');