function createAbout(){
    const about = document.querySelector('#content')

    const founded = document.createElement('div')
    founded.textContent = 'Homecook Restaurant was founded Feb 8th, 2025 for a coding project!'

    const contact = document.createElement('div')
    contact.textContent = "Contact us at (555) 784 - 9830"

    about.replaceChildren(founded, contact)
}

export default createAbout