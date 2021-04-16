// let btn = document.getElementById("button").addEventListener
//     ('click',buttonClick)
// function buttonClick() {
//     console.log('button clicked')
//     document.querySelector('#main').textContent = "Modified"
//     }

// function buttonClick(e) {
//     console.log(e)
//     console.log(e.clientY)
// }

// change color using mouseover

// let box = document.getElementById('box')
// box.addEventListener('mousemove', runEvent);


// function runEvent(e) {
//     console.log("EVENT TYPE:" + e.type);
//     box.style.backgroundColor = "rgb(" + e.offsetX + ", " + e.offsetY + ", 40)"
//     box.style.border = "2px solid white"
//     document.body.style.backgroundColor = "rgb(" + e.offsetX + ", " + e.offsetY + ", 40)"
//     console.log(e.offsetX, e.offsetY, 40)
// }

let select = document.querySelector("select");
select.addEventListener('change', selectEvent);

function selectEvent(e) {
    console.log("EVENT TYPE:" + e.type);
    console.log(e.target.value)
}


let form = document.querySelector('form');

form.addEventListener('submit', formSubmit);

function formSubmit(e){
    e.preventDefault();
    console.log("EVENT TYPE:" + e.type);
    
}