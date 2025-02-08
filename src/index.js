import home from './home'
import menu from './menu'
import about from './about'

home()

const nav = document.querySelector('nav')
nav.addEventListener('click', (event) => {
    // Clear content to load new page
    const content = document.querySelector("#content")
    content.replaceChildren()

    switch (event.target.id){
        case 'homeButton':
            home()
            break
        case 'menuButton':
            menu()
            break
        case 'aboutButton':
            about()
            break
        default:
            console.log(`ERROR: Unnrecognized button id: ${event.target.id}`)
    }
})