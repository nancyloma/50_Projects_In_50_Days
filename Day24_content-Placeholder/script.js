const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const data = document.getElementById('data')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
  header.innerHTML =
    '<img src="https://images.unsplash.com/photo-1559548290-d6b0cb6c9050?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80" alt="" />'
  title.innerHTML = 'Ikigai (生き甲斐)'
  excerpt.innerHTML =
    'Ikigai is a Japanese concept that means "a reason for being."'
  profile_img.innerHTML =
    '<img src="https://image.freepik.com/free-vector/cute-fabulous-unicorn-whale-watercolor_68162-768.jpg" alt="" />'
  name.innerHTML = 'Happy Loma'
  date.innerHTML = 'Jan 12, 2021'

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}