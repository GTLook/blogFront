//query selectors

const blogHere = document.querySelector('#blogHere')
const newPost = document.querySelector('#blogHere')
const backtoBlog = document.querySelector('#backtoBlog')

const buildPost = (title, url, text) => {
  const div = document.createElement('div')
  div.classList.add('blog-post')
  const h2 = document.createElement('h2')
  h2.classList.add('blog-post-title')
  h2.innerHTML = title
  const p = document.createElement('p')
  p.innerHTML = text
}
