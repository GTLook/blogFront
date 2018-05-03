//query selectors
const blogHere = document.querySelector('#blogHere')
const formPost = document.querySelector('#formPost')
const backtoBlog = document.querySelector('#backtoBlog')
const newPost = document.querySelector('#newPost')

const buildPost = (obj) => {
  const div = document.createElement('div')
  div.classList.add('blog-post')
  const h2 = document.createElement('h2')
  h2.classList.add('blog-post-title')
  h2.innerHTML = obj.title
  h2.addEventListener('click',() => {
    blogHere.removeChild(div)
    axios.delete(`http://localhost:9000/data/${obj.id}`)
    .then(console.log)
    .catch(console.error)
  })
  div.appendChild(h2)
  const picture = document.createElement('img')
  picture.setAttribute('src', obj.pictureURL)
  picture.setAttribute('height', "500")
  picture.setAttribute('width', "500")
  div.appendChild(picture)
  const p = document.createElement('p')
  p.innerHTML = obj.text
  div.appendChild(p)
  return div
}

axios.get('http://localhost:9000/data')
.then((response) => {
 response.data.data.forEach((obj) => blogHere.appendChild(buildPost(obj)))
})
.then(console.log)
.catch(console.error)

newPost.addEventListener('click',() => {
  backtoBlog.classList.remove('d-none')
  newPost.classList.add('d-none')
  blogHere.classList.add('d-none')
  formPost.classList.remove('d-none')
})

backtoBlog.addEventListener('click',() => {
  backtoBlog.classList.add('d-none')
  newPost.classList.remove('d-none')
  blogHere.classList.remove('d-none')
  formPost.classList.add('d-none')
})

document.querySelector('#createPost').addEventListener('submit', (event) => {
  event.preventDefault()
  axios.post('http://localhost:9000/data',
  {
    title: document.querySelector('#postTitle').value,
    pictureURL: document.querySelector('#postURL').value,
    text: document.querySelector('#postText').value
  })
  .then((response) => {
    backtoBlog.classList.add('d-none')
    newPost.classList.remove('d-none')
    blogHere.classList.remove('d-none')
    formPost.classList.add('d-none')
    return response
  })
  .then(console.log)
  .catch(console.error)
})
