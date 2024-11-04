// Array to store shopping list items, each item is an object with 'name' and 'purchased' properties
const shopping_list = [];

// Variable to track the currently selected item index
let selectedItemIndex = null;

// Get references to the buttons in the DOM
const addButton = document.getElementById("addButton");
const purchasedButton = document.getElementById('purchasedButton');
const clearButton = document.getElementById('clearButton');

// Attach event listeners to buttons
addButton.addEventListener('click', addItem); // Adds an item to the shopping list
purchasedButton.addEventListener('click', marksSelectedAsPurchased); // Marks selected item as purchased
clearButton.addEventListener('click', clear); // Clears all items from the shopping list

// Function to add a new item to the shopping list
function addItem() {
    const input = document.getElementById('input'); // Get input element

    // Add item to the list if input is not empty
    if (input.value) {
        shopping_list.push({ name: input.value, purchased: false }); // Add new item as an object
        input.value = ''; // Clear input field after adding
        displayItem(); // Refresh the displayed list
    }
}

// Function to display the shopping list items in the HTML
function displayItem() {
    const uoli = document.getElementsByClassName('itemlist')[0]; // Get the UL element with class 'itemlist'
    uoli.innerHTML = ''; // Clear existing items from the list

    // Loop through the shopping list and create a list item for each entry
    shopping_list.forEach((item, index) => {
        const list = document.createElement('li'); // Create an <li> element
        list.textContent = item.name; // Set the list item text to the item name

        // Add 'purchased' and 'selected' classes if the item is marked as purchased or selected
        if (item.purchased) list.classList.add('purchased'); // Adds purchased style if item is purchased
        if (index === selectedItemIndex) list.classList.add("selected"); // Highlights if item is selected

        // Add an event listener to set the selected item on click, passing in the item index
        list.addEventListener('click', () => selectItem(index));

        // Append the list item to the UL element
        uoli.appendChild(list);
    });
}

// Function to toggle selection of a list item by its index
function selectItem(index) {
    // Toggle the selected item index (deselect if clicked again)
    selectedItemIndex = index === selectedItemIndex ? null : index;
    displayItem(); // Refresh the displayed list to update selection styling
}

// Function to mark the selected item as purchased or unpurchased
function marksSelectedAsPurchased() {
    if (selectedItemIndex !== null) { // Check if an item is selected
        // Toggle the purchased status of the selected item
        shopping_list[selectedItemIndex].purchased = !shopping_list[selectedItemIndex].purchased;
        selectedItemIndex = null; // Deselect item after marking as purchased
        displayItem(); // Refresh the displayed list
    } else {
        alert('Please select an item to mark as purchased'); // Alert if no item is selected
    }
}

// Function to clear all items from the shopping list
function clear() {
    shopping_list.length = 0; // Empty the shopping list array
    displayItem(); // Refresh the displayed list
}

// Log the shopping list to the console for debugging
console.log(shopping_list);
