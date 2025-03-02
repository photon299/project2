'use strict';

//! Objects
//* delete obj.key;
//* Object.keys();
//* Object.values();
//* Object.entries()


//! Arrays
//* arr.pop();
//* arr.push(value);
//* arr.shift();
//* arr.unshift(value);
//* arr.forEach(function(item, index, array) {...})


//! DOM
//* document.getElementById('id');
//* document.getElementsByTagName('div');
//* document.getElementsByClassName('class');
//* document.querySelectorAll('tag/.class/id');
//* document.querySelector("[data-type='value']");
//* document.createElement("name");
//* elem.classList.add("class");
//* document.body.append/prepend(elem)
//* elem.before()/after()
//* elem.remove();
//* elem.replaceWith(elem2);
//* elem.appendChild(elem2);
//* elem.innerHTML = value;
//* elem.insertAdjacentHTML("where", `html`);
//* elem.addEventListener("what", () => {})
//* "click" "mouseenter"
//* event.type/target
//* event.preventDefault()
//* elem.childNodes()
//* elem.firstChild/lastChild
//* elem.firstElementChild/lastElementChild
//* elem.parentNode
//* elem.parentElement
//* elem.previousSibling/nextSibling
//* elem.previousElementSibling/nextElementSibling
//* "touchstart" "touchmove" "touchend" "touchenter"/"touchleave" "touchcancel"
//* event.touches / event.targetTouches / event.changedTouches

const p = document.querySelectorAll("p");
console.log(p);

const script = document.createElement("script");
script.src = "js/test.js";
document.body.append(script);