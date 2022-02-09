let a = -1, b = 2;

function check(first, second) {
    if (first >= 0 && second >= 0)
        console.log(first - second);
    else if (first < 0 && second < 0)
        console.log(first * second);
    else {
        console.log(first + second);
    }
}

check(a, b);

