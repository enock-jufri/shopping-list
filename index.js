const shopping_list = []
let selectedItemIndex = null
const addButton = document.getElementById("addButton")
const purchasedButton = document.getElementById('purchasedButton')
const clearButton = document.getElementById('clearButton')

purchasedButton.addEventListener('click', marksSelectedAsPurchased)
addButton.addEventListener('click', addItem)
clearButton.addEventListener('click', clear)

function addItem() {
    const input = document.getElementById('input')
    if (input.value) shopping_list.push({ name: input.value, purchased: false })
    input.value = ''
    displayItem()
}

function displayItem() {
    const uoli = document.getElementsByClassName('itemlist')[0]
    uoli.innerHTML = ''

    shopping_list.forEach((item, index) => {
        const list = document.createElement('li')
        list.textContent = item.name

        if (item.purchased) list.classList.add('purchased')
        if (index === selectedItemIndex) list.classList.add("selected")

        list.addEventListener('click', () => selectItem(index))


        uoli.appendChild(list)
    })
}


function selectItem(index) {
    selectedItemIndex = index === selectedItemIndex ? null : index
    displayItem()
}
function marksSelectedAsPurchased() {
    if (selectedItemIndex !== null) {
        shopping_list[selectedItemIndex].purchased = !shopping_list[selectedItemIndex].purchased
        selectedItemIndex = null
        displayItem()
    }
    else {
        alert('please select item to mark as purchased')
    }
}

function clear() {
    shopping_list.length = 0
    displayItem()
}
console.log(shopping_list);
