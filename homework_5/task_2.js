// все товары в магазине
let store_products = [
{
    title: 't-shirt',
    price: 1200,
    quantity: 5,
},
{
    title: 'jeans',
    price: 3200,
    quantity: 5,
},
{
    title: 'shirt',
    price: 4000,
    quantity: 14,
},
{
    title: 'cap',
    price: 1620,
    quantity: 20,
},
{
    title: 'socks',
    price: 400,
    quantity: 120,
},
{
    title: 'coat',
    price: 25000,
    quantity: 8
}]

// функция подсчета стоимости корзины
function countBasketPrice(str_prd, basket){
    // переменная для общей суммы
    sum = 0;
    // пробегаемся по массиву
    for(let i = 0; i < str_prd.length; i++){
        // присваиваем el элемент одежды из массива товаров магазина под индексом i
        el = str_prd[i].title;
        // если данный товар есть в нашей корзине
        if (basket.includes(el)){
            // то добавляем к сумме его цену
            sum += str_prd[i].price
        }
    }
    // возвращаем сумму
    return 'В корзине: ' + basket.length + ' товаров на сумму ' + sum + ' рублей'
}

basket = [];
// список видов товаров для проверки на ввод пользователя
categories = ['t-shirt', 'jeans', 'shirt', 'cap', 'socks', 'coat'];
// для того чтобы зафиксировать размер корзины и для цикла ниже
number_of_products_in_the_store = prompt('Введите количество товаров, которое вы планируете добавить в корзину: ', 5);

for(let i = 0; i < Number(number_of_products_in_the_store); i++){
    // запрашиваем у пользователя ввести желаемый товар
    el = prompt('Введите название желаемого товара: ', 'socks');
    // если элемент есть в categories, то все верно => добавляем в нашу корзину
    if (categories.includes(el)){
    alert('Элемент ' + el + ' добавлен в вашу корзину')
    }
    else{
        // для того, чтобы человек ввел товар, которые есть в каталоге, а не произвольный текст
        do{
            el = prompt('Данного товара нету в каталоге. Выберите из предложенного: ' + categories, 'jeans');
        // будет выполняться до тех пор, пока не введет элемент из списка categories
        } while(!categories.includes(el))
    }
    // наполнение нашей корзины
    basket.push(el);
}
// сделаем копию корзины
let basket_с =  Array.from(basket);

// это было не обязательно, но я захотел реализовать эту логику
// если пользователь добавил какой-то элемент в свою корзину, то логично, что он пропадает из товаров магазина. Т.е
// общее количество этого товара уменьшается. Например: я добавляю в свою корзину 1 'cap', следовательно в объекте с
// title: 'cap', значение ключа  quantity должно уменьшится на единицу 20 - 1 = 19.

// do {....} while(basket.length != 0) сделан для того случая, если элементы повторяются. Например basket = [cap, cap, jeans].
// Без него в конце цикла for останется [cap].
do {
// проходимся по товарам магазина
for (let i = 0; i < store_products.length; i++){
// чтобы на следующей итерации while, цикл for не делал лишние итерации в случае пустого списка.
    if (basket.length === 0) break;
// присваиваем название товара переменной el
    el = store_products[i].title;
// если данный товар есть в нашей корзине
    if (basket.includes(el)){
        // уменьшаем кол-во данного товара у свойства quantity в нужном объекте
        store_products[i].quantity -= 1;
        // находим индекс в корзине данного товара
        index_el = basket.indexOf(el);
        // удаляем его из корзины
        basket.splice(index_el, 1);
    }
    // делаем пока корзина не пустая
} } while(basket.length != 0) ;

//смотрим через консоль и видим, что свойства объектов поменялись
console.log(store_products);
// вывод корзины в консоль
console.log(basket);
// вывод на страницу
alert(basket_с)
//создание div1
let div1 = document.createElement('div1');
div1.className = "one";
// если корзина пустая, то по условию тз выводим "Корзина пуста"
if (basket_с.length === 0) {
    // записываем тег <h1>
    div1.innerHTML = "<h1>Корзина пуста</h1>";
    // добавляем после body div1
    document.body.append(div1);
}
// иначе
else {
    // ваша корзина
    div1.innerHTML = "<h1>Ваша корзина: </h1>";
    document.body.append(div1);
    // создаю второй блок
    let div2 = document.createElement('div2');
    // класс для второго блока
    div2.className = 'two';
    // создаю список
    let ol = document.createElement('ol');
    // задаю класс для списка
    ol.className = 'third';
    // ставлю div2 после div1
    div1.after(div2);
    // добавляю ol в div2
    div2.appendChild(ol);
    // пробегаемся по корзине
    for(let k = 0; k < basket_с.length; k++){
        // создаю новый элемент списка
        let newLi = document.createElement('li');
        // создаю класс для каждого элемента в списке, чтобы в дальнейшем отредактировать css
        newLi.className = 'li_style';
        // добавляем в ol
        ol.appendChild(newLi);
        // этот элемент равен элементу одежды из нашей корзины
        newLi.innerHTML = basket_с[k];
    }
    ol.style.marginTop = '50px';
    // стоимость корзины
    result = countBasketPrice(store_products, basket_с);
    // вывод через alert
    alert(result)
    // элемент h2
    let h2 = document.createElement('h2');
    // класс для блока div3
    h2.className = 'fourth';
    // текст
    h2.innerHTML = result;
    // h2 после div2
    div2.after(h2);
    }

