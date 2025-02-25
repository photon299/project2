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

//* 35. Основы ООП, прототипно-ориентированное наследование

// const soldier = {
//     health: 400,
//     armor: 100,
//     sayHello: function() {
//         console.log("Hello");
//     },
// };
// const john = Object.create(soldier);
// console.log(john.armor);

//! 41. Получение элементов со страницы
//* document.getElementById('id');
//* document.getElementsByTagName('class');
//* document.getElementsByClassName('class');
//* document.querySelector('name/.class/id');
//* document.createElement("name");
//* elem.classList.add("class");
//* document.body.append/prepend(elem)
//* elem.before()/after()
//* elem.remove()
//* elem.replaceWith(elem2)
//* elem.appendChild(elem2)
//* elem.innerHTML = 
//* elem.insertAdjacentHTML("where", "what")
//*

//* 42. Действия с элементами на странице
const box = document.getElementById('box'),
      btns = document.getElementsByTagName("button"),
      circles = document.getElementsByClassName("circle"),
      wrapper = document.querySelector(".wrapper"),
      hearts = wrapper.querySelectorAll(".heart"),
      oneHeart = wrapper.querySelector(".heart");


const div = document.createElement("div");
div.classList.add("black");
document.body.append(div);
div.style.width = "200px";

div.innerHTML = "<h1>Hello World!</h1>";

div.insertAdjacentHTML("beforebegin", "<h2>Hello</h2>");