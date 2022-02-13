function num_in_obj(num){
    var num_obj = {
        'единицы': 0,
        'десятки': 0,
        'сотни': 0}

    if (num >= 100 && num <= 999){
    num_obj['единицы'] = num % 10;
    num_obj['десятки'] = (num % 100 - num % 10) / 10;
    num_obj['сотни'] = (num - num % 100) / 100;
    console.log('Наше трехзначное число в виде объекта: ', num_obj);
    }
    else if(num >= 10 && num <= 99){
    num_obj['единицы'] = num % 10;
    num_obj['десятки'] = (num - num % 10) / 10;
    num_obj['сотни'] = 0;
    console.log('Наше двузначное число в виде объекта: ', num_obj);
    }
    else if (num >= 0 && num <= 9){
    num_obj['единицы'] = num;
    num_obj['десятки'] = 0;
    num_obj['сотни'] = 0;
    console.log('От 0 до 9', num_obj);
    }

    // если число превышает 999
    if (num > 999) {
        console.log('Введенное число больше, чем 999');
        delete num_obj['единицы'];
        delete num_obj['десятки'];
        delete num_obj['сотни'];
        console.log(num_obj);
    }

}

num_in_obj(345);
