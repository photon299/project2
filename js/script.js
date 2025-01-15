'use strict';

//* 1
function getName(name) {
    return `Привет, ${name}`;
}
//* 2
function returnNeighboringNumbers(num) {
    return [num - 1, num, num + 1];
}
//* 3
function getMathResult(a, b) {
    if (typeof(b) !== "number" || b <= 0) return a;
    let result = "";
    let num = a;
    for (let i = 0; i < b; i++) {
        result += (i === 0) ? num : `---${num}`;
        num += a;
    }
    return result;
}
console.log(getMathResult(10, 5));