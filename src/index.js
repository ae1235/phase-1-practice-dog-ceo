console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', e => {
    const imgUrl = 'https://dog.ceo/api/breeds/image/random/4'
    fetch(imgUrl)
    .then(res => res.json()) // parse out responses as json
    .then(dogs => {
        const messageParent = dogs.message
        const imgContainer = document.querySelector('#dog-image-container')
        messageParent.forEach(invImgURL => {
            const imgContainer = document.querySelector('#dog-image-container')
            const img = document.createElement('img')
            img.src = invImgURL
            imgContainer.appendChild(img)
            imgContainer.append(img)
        })
    })
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
    .then(res => res.json())
    .then(breedsObj => {
        const breedsArr = Object.keys(breedsObj.message)
        const breedList = document.querySelector('#dog-breeds')
        function addBreedLisToUl(array) {
            array.forEach(breed => {
                const li = document.createElement("li")
                li.innerHTML = `${breed}`
                li.addEventListener('click', () => {
                    li.classList.toggle('redText')
                    // li.style.float = 'right'
                })
                breedList.appendChild(li)
            })
        }
        addBreedLisToUl(breedsArr)

        const breedDD = document.querySelector('#breed-dropdown')
        breedDD.addEventListener('change', (e) => {
            const trueBreeds = breedsArr.filter(breed => breed.substring(0, 1) === e.target.value)
            while(breedList.firstChild) {
                breedList.removeChild(breedList.firstChild)
            }
            addBreedLisToUl(trueBreeds)
        })
    })
})

