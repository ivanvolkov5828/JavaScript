function getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

number = getRandomInt(0, 16); // 16, так как минимум включается, а максимум нет
console.log("Наше случайное число: ", number);
console.log("-------------------------------");

switch (number){
   case 0:
   console.log("Число: ", 0);

   case 1:
   console.log("Число: ", 1);

   case 2:
   console.log("Число: ", 2);

   case 3:
   console.log("Число: ", 3);

   case 4:
   console.log("Число: ", 4);

   case 5:
   console.log("Число: ", 5);

   case 6:
   console.log("Число: ", 6);

   case 7:
   console.log("Число: ", 7);

   case 8:
   console.log("Число: ", 8);

   case 9:
   console.log("Число: ", 9);

   case 10:
   console.log("Число: ", 10);

   case 11:
   console.log("Число: ", 11);

   case 12:
   console.log("Число: ", 12);

   case 13:
   console.log("Число: ", 13);

   case 14:
   console.log("Число: ", 14);

   case 15:
   console.log("Число: ", 15);

   default:
   console.log('-------------------------------');
}