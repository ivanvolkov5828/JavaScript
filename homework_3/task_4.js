function pyramid(num){
    star = '';
    for(let i = 0; i < num; i++){
        star += '*';
        console.log(star);
    }
}

pyramid(20);