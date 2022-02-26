// каталог товаров
var product = [
{
    title: 't-shirt',
    price: 1200,
    quantity: 5,
    img: 'https://ae04.alicdn.com/kf/Hf3680f0d4d59423a8e8c4f7b739c0219Y/Tarot-Card-The-Moon-XVIII-Occult-Vintage-T-Shirt.jpg_220x220xzq55.jpg'
},
{
    title: 'jeans',
    price: 3200,
    quantity: 5,
    img: 'https://www.schoolsw3.com/w3images/jeans3.jpg'
},
{
    title: 'shirt',
    price: 4000,
    quantity: 14,
    img: 'https://ae04.alicdn.com/kf/Sff665fbfa7354f19b3a11efa4a7d8b677/-.jpg_640x640.jpg'
},
{
    title: 'cap',
    price: 1620,
    quantity: 20,
    img: 'https://ae04.alicdn.com/kf/Hc06e48f0f3da47988f2b180cf450d637n/-.jpg_640x640.jpg'
},
{
    title: 'socks',
    price: 400,
    quantity: 120,
    img: 'https://cs5.livemaster.ru/storage/0b/16/97951ac00de72628d8e031cbf6fr--aksessuary-noski-vyazanye-zhenskie-serdechki.jpg'
},
{
    title: 'coat',
    price: 25000,
    quantity: 8,
    img: 'https://cdn1.ozone.ru/s3/multimedia-x/wc1200/6204128385.jpg'
}]

// вывод каталога на страницу
function conclusion(arr){
    // вывод
    for(let i = 0; i < arr.length; i++){
          // создаем div
          let div = document.createElement('div');
          // класс div
          div.className = 'product-item';
          // создаем изображение товара
          let img = document.createElement('img');
          // создаем еще один div
          let div1 = document.createElement('div1');
          //создаем для него класс
          div1.className = 'product-list';
          // создаем название товара(заголовок)
          let h3 = document.createElement('h3');
          // цена
          let span = document.createElement('span');
          // класс для цены
          span.className = 'price';
          // ссылка 'в корзину'
          let button = document.createElement('button');
          // класс
          button.className = 'button';
          // добавляем в него новый div
          document.body.appendChild(div);
          // свойство src заполним нужной ссылкой
          img.src = arr[i].img;
          // добавляем img после div
          div.appendChild(img);
          // добавляем div после img в том же блоке
          div.appendChild(div1);
          // задаем нужный заголовок
          h3.innerHTML = arr[i].title;
          // добавляем в новый блок
          div1.appendChild(h3);
          // span
          span.innerHTML = arr[i].price;
          // добавляем после заголовка
          h3.appendChild(span);
          // ссылка
          button.innerHTML = 'В корзину';
          // добавляем
          h3.appendChild(button);
    }
}
// вызов функции
conclusion(product);
// переменная для всех кнопок
var btn = document.getElementsByClassName('button');
// корзина
var basket = [];

// в функцию передается кнопка с нужным индексом, название элемента одежды из массива product и пустая корзина
// в которую мы добавляем нужную одежду
function for_button(btn, arr_t, arr_p, bskt){
    // вызываем addEventListener для кнопки
    btn.addEventListener("click", function(){
        // вывод фразы 'Товар добавлен в корзину'
        alert('Товар добавлен в корзину')
        //  создаем переменную el
        el = {title: arr_t,
              price: arr_p,
              quantity: 1};
        // заполняем нашу корзину
        bskt.push(el);

        // найдем элемент div по id='lst' в html документе
        let div1 = document.getElementById('lst');
        // создаю нумерованный список ol
        let ol = document.getElementById('ol');

        // создаю новый элемент списка
        let newLi = document.createElement('li');
        // создаю класс для каждого элемента в списке, чтобы в дальнейшем отредактировать css
        newLi.className = 'li_style';
        // добавляем в ol
        ol.appendChild(newLi);
        // форматируем нужную строку
        newLi.innerHTML = 'Название: ' + bskt[bskt.length - 1].title + ' Цена: ' + bskt[bskt.length - 1].price ;

        });

};

// проходимся циклом по всем кнопкам
for(var i = 0; i < btn.length; i++){
    // соответственно вызываем функцию for_button для каждой кнопки в случае клика мышкой
    for_button(btn[i], product[i].title, product[i].price, basket);
}
