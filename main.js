// remove item from list
const obliterate = document.querySelector('#bodyContainer ul');
  
obliterate.addEventListener('click', function(e) {
    if(e.target.className == 'removeItem') {
        const li = e.target.parentElement;
        obliterate.removeChild(li);
    }
})

// cross off items
const crossOff = document.querySelector('#bodyContainer ul');

crossOff.addEventListener('click', function(e) {
    if(e.target.className == 'foodItem') {
        const li = e.target.parentElement;
        crossOff.style.textDecorationLine = "line-through";
    }
})

// add item
const addFood = document.forms['addItem'];
addFood.addEventListener('submit', function(e) {
    e.preventDefault();
    const value = addFood.querySelector('input[type="text"]').value;
});