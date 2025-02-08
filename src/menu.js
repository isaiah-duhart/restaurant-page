const menuItems = [
    {
        name : "Spaghetti and Meatballs",
        description : "Freshly squeeze whole tomatoes simmer for hours in sauteed onions and garlic to create our homemade spaghetti sauce paired with fried meatballs. Topped with fresh basil and grated parmesean",
    },
    {
        name : "Chipotle Barbacoa",
        description : "A bed of cliantro lime rice is topped with chuck roast, slow-cooked in chipotle peppers, thinly sliced onions, and spices. Finished with fresh guacamole and rolled in a house made tortilla",
    },
    {
        name : "Chicken Tikka Masala",
        description : "Chicken marinated in yogurt, lemon, and spices is pan fried to perfection, and tossed in a house made tomato sauce and cream reduction. Paired with fresh naan and a bed of rice."
    }
]

function createMenu() {
    const content = document.querySelector('#content')

    const menu = document.createElement('div')
    menu.setAttribute('class', 'menu')

    menuItems.forEach((item) => menu.appendChild(createMenuItem(item)))

    content.appendChild(menu)
}

function createMenuItem(item){
    const itemContainer = document.createElement('div')
    itemContainer.setAttribute('class', 'menu-item')
    
    const title = document.createElement('div')
    title.setAttribute('class', 'item-title')
    title.textContent = item.name

    const description = document.createElement('div')
    description.setAttribute('class', 'item-description')
    description.textContent = item.description

    itemContainer.replaceChildren(title, description)

    return itemContainer
}

export default createMenu