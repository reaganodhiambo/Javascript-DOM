// Traversing the DOM

let itemList = document.querySelector("#items");
//  parent node
// console.log(itemList.parentNode)

// itemList.parentNode.style.backgroundColor = "#ccc"

// console.log(itemList.parentNode.parentNode)

// parentElement

// console.log(itemList.parentElement)

// itemList.parentElement.style.backgroundColor = "#ccc"

// console.log(itemList.parentElement.parentElement)


// childNodes

// console.log(itemList.childNodes)

// Children

console.log(itemList.children)
console.log(itemList.children[2])
itemList.children[2].style.backgroundColor = "yellow"

// firstChild 

console.log(itemList.firstChild)

// firstElementChild && lastChildElement

console.log(itemList.firstElementChild)

itemList.firstElementChild.textContent = "Shampoo"
itemList.lastElementChild.textContent = "Conditioner"


// create a div

let newDiv = document.createElement('div');

// add class
newDiv.className = "card"

// add id
newDiv.id = "card2"

// add atr
newDiv.setAttribute('title', "hello Reagan")

// create new text node
let newDivText = document.createTextNode("Hello world");

// Add text to div
newDiv.appendChild(newDivText)

console.log(newDiv)

// Adding to dom

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
newDiv.style.color = 'Blue'
newDiv.style.background = "None"

container.insertBefore(newDiv, h1)
