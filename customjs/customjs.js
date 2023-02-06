const avatars = [
  {
    id: 1,
    name: 'Hoodie Allen',
    image: './images/hoodie.jpg',
    bgImg: './images/hoodieBack.avif'
  },
  {
    id: 2,
    name: 'Mike Stud',
    image: './images/mikeprofile.jpeg',
    bgImg: './images/mikebg.webp'
  },
  {
    id: 3,
    name: 'Drake',
    image: './images/Drakeprofile.webp',
    bgImg: './images/drakebg.jpg'
  },
  {
    id: 4,
    name: 'J. Cole',
    image: './images/jcoleprofile.jpg',
    bgImg: './images/jColeBACKGROUND.jpeg'
  },
  {
    id: 5,
    name: 'Big Sean',
    image: './images/bigseanprofile.jpg',
    bgImg: './images/bigseanbg.jpg'
  }
]

const el = document.querySelectorAll('.related_artists_item')
const author = document.getElementById('author_image')
const author_Id = document.getElementById('gz')
const custom_bg = document.getElementById('custom_bg')

function changeAvatars () {
  for (let i = 0; i < avatars.length; i++) {
    if (this.id == avatars[i].id) {
      author.src = avatars[i].image
      author_Id.innerHTML = `<h1>${avatars[i].name}</h1>`
      custom_bg.src = avatars[i].bgImg
    }
  }
}

el.forEach(element => {
  element.addEventListener('click', changeAvatars)
})
