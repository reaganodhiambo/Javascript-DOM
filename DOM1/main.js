// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = "Reagan"
// console.log(document.doctype);
// console.log(document.all);
// console.log(document.all[10]);
// // links
// console.log(document.forms);



// getElementById
// var headerTitle = document.getElementById("header-title");
// console.log(headerTitle);
// headerTitle.textContent = "Hello"
// headerTitle.textContent = "Goodbye"


// // Styling

// headerTitle.style.borderBottom = "2px solid black";

// // getElementByClassName
// // Styling multiple elements

// let items = document.getElementsByClassName("list-group-item")
// for (i = 0; i < items.length; i++)
// {
//         items[i].style.backgroundColor = "#f4f4f4"
// }

// QuerySelector

let header = document.querySelector('header')
header.style.backgroundColor = '#f7f7f7';

let input = document.querySelector('input');
input.value = "fadhelah"

let submit = document.querySelector('input[type="submit"]');
submit.value = "SEND";

let items = document.querySelector('.list-group-item:last-child');
items.style.color = "yellow"


// n-th child

let secondItems = document.querySelector('.list-group-item:nth-child(2)');
secondItems.style.color = "pink"



// QuerySelectorAll

