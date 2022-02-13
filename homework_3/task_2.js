// пункт а
// создадим корзину в виде массива, в котором будут элементы одежды
let basket = ["t-shirt", "jeans", "shirt", "cap"];
// пункт б
// создадим функцию, которая подсчитывает стоимость корзины
function countBasketPrice(arr){
    let item;
    let sum = 0;
    for (item of arr) {
        switch(item){
            case 'jeans':
                sum += 3200;
                break;
            case 'cap':
                sum += 1620;
                break;
            case 'shirt':
                sum += 4000;
                break;
            case 't-shirt':
                sum += 1200;
                break;
            case 'socks':
                sum += 400;
                break;
            case 'coat':
                sum += 34000;
                break;
            case 'sneakers':
                sum += 9400;
                break;
            default:
                console.log("Корзина пустая");
                break;
        }
    }
    console.log('Стоимость корзины:', sum);
}

countBasketPrice(basket);