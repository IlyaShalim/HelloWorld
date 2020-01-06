# HelloWorld/*
 str.slice(0, 5) );*/
'use strict';

let str;
let num;
let sum=0;
let n = 0;
let mer = 0;
str = prompt("vedite primer")
do {
    num = str.slice(n, n + 1);
    if (num == 1 || num == 2 || num == 3 || num == 4 || num == 5
    || num == 6 || num == 7 || num == 8 || num == 9 || num == 10) {
        if (mer == 0) {
            mer = num;
        }else mer = mer + num
    } else if (num == 'p'){
        mer = mer + "+";
    } else if (num == 'm'){
        mer = mer + "-";
    }
    sum = mer;
    n++;
} while (n < 100);
alert(eval(sum));


