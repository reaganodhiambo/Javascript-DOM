let form = document.getElementById("addForm");
let itemList = document.getElementById("items");
let filter = document.getElementById('filter')

// Form Submit Events
form.addEventListener('submit', addItem);
//
// Delete Events
itemList.addEventListener('click', removeItem);

// Search event
filter.addEventListener('keyup', filterItems);

function addItem(e) {
    e.preventDefault();

    // get input value
    let newItem = document.getElementById('input').value;
    // the trim method prevent adding of blanks and whitespace
    if (newItem.trim() === "") {
        alert("Can't add an empty note")
        return document.getElementById("input").value = "";
        
    } else {
        // create an li element
        var li = document.createElement('li')
        // Add class name
        li.className = 'list-group-item'
        // Add textNode with input value
        li.appendChild(document.createTextNode(newItem))

        // create deleteButton element

        let deleteButton = document.createElement('button');
        deleteButton.className = 'btn btn-danger btn-sm float-end delete'
        deleteButton.appendChild(document.createTextNode('Delete'))
        // append button to li
        li.appendChild(deleteButton)
        // append li to list
        itemList.appendChild(li)
    }
}


function removeItem(e) {
    e.preventDefault();
    if (e.target.classList.contains('delete')) {
        if (confirm('Delete Item?')) {
            let li = e.target.parentElement;
            itemList.removeChild(li)
        }
    }
}

// Search through notes
function filterItems(e) {
    // convert text from input to lowercase and assign it to text
    var text = e.target.value.toLowerCase();
    // grab notes from Notelist
    let items = itemList.getElementsByTagName('li');
    // create an array from the Notelist
    Array.from(items).forEach(function (item) {
        var itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block'
        } else {
            item.style.display = 'none'
        }
    })

}