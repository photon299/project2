'use strict';

//* 31 Объекты, деструктуризация объектов (ES6)
// delete obj.key - удаление свойства объекта
// Object.keys() - создает массив с ключами объекта
//*

//* 32. Массивы и псевдомассивы
// arr.pop(); - Удаление с конца массива
// arr.push(a) - Добавление в конец массива
// arr.shift() - Удаление с начала массива
// arr.unshift(a) - добавление в начало массива
// arr.forEach(function(item, index, array) {...})  перебор всех элементов
//*

//* 10
const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%',
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(obj) {
        const {age, skills} = obj;
        return `Мне ${age} и я владею языками: ${skills.languages.join(" ").toUpperCase()}`;
    },
};
function showExperience(plan) {
    const {exp} = plan.skills;
    return exp;
}
function showProgrammingLangs(plan) {
    const {programmingLangs} = plan.skills;
    let res = ``;
    for (let key in programmingLangs) {
        res += `Язык ${key} изучен на ${programmingLangs[key]} \n`
    }
    return res;
}
//* 11
const family = ['Peter', 'Ann', 'Alex', 'Linda'];
function showFamily(arr) {
    return (arr.length === 0) ? "Семья пуста" : `Семья состоит из: ${arr.join(" ")}`;
}
const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];
function standardizeStrings(arr) {
    for (let i of arr) console.log(i.toLowerCase());
}
//* 12
const someString = 'This is some strange string';
function reverse(str) {
    if (typeof str !== "string") return "Ошибка!";
    let result = "";
    for (let i = 0; i < str.length; i++){
        result += str[str.length - i - 1];
    }
    return result;
}
const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    if (arr.length === 0) return "Нет доступных валют";
    let result = "Доступные валюты:\n";
    for (let curr of arr) {
        if (curr !== missingCurr) result += curr + "\n"
    }
    return result
}
console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], "CNY"));