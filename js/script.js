'use strict';

//* fibonacci
function fibonacci(num) {

    if (num % 1 !== 0 || num <= 0 || typeof num !== "number") return "";
    if (num === 1) {
        return "0";
    } else if (num === 2) {
        return "0 1"
    } else {
        let res = "0 1";
        let a = 0, b = 1, sum;
        for (let i = 0; i < (num - 2); i++) {
            sum = a + b;
            res += ` ${sum}`;
            a = b;
            b = sum;
        }
        return res;
    }
}
console.log(fibonacci(10));