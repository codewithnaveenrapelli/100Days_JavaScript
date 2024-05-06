//? Image Filter Using Event Delegation.

const tabs = document.querySelector('.tabs');
const images = document.querySelectorAll('.images')
tabs.addEventListener('click', (event) => {
    if (event.target.dataset.category != undefined) {
        filterSearch(event.target.dataset.category);
    }
})

const filterSearch = (dataValue) => {
    images.forEach((currentElement, index) => {
        console.log(currentElement.dataset.category);
        if (currentElement.dataset.category === dataValue || dataValue === 'all') {
            currentElement.style.display = "block"
        } else {
            currentElement.style.display = "none"
        }
    })
}
