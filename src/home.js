function createHome() {
    const content = document.querySelector('#content')

    const title = document.createElement('div')
    title.setAttribute('class', 'title')
    title.textContent = 'Homecook Restaurant'

    const description = document.createElement('div')
    description.setAttribute('class', 'description')
    description.textContent = 'We serve hot and ready home cook classics! From Chipotle Barbacoa Tacos to Spaghetti and Meatballs. Find all your homestyle favorites here!'

    const hours = document.createElement('div')
    hours.setAttribute('class', 'hours')
    hours.textContent = 'Hours\nMonday-Thursday: 12pm - 10pm Friday-Sunday: 11am - 12am'

    const location = document.createElement('div')
    location.setAttribute('class', 'location')
    location.textContent = 'Location\n1234 Restaurant lane'

    content.replaceChildren(title, description, hours, location)
}

export default createHome