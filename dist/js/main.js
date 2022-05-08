const burger = document.querySelector('.burger')
const navBurger = document.querySelector('.nav__burger')
const burgerIcon = burger.querySelectorAll('i')
const navBurgerTitle = navBurger.getElementsByTagName('ul li')
const navBurgerLink = navBurger.getElementsByTagName('ul li ul')

burger.addEventListener('click', () => {
	navBurger.classList.toggle('open')
	burgerIcon.forEach(element => element.classList.toggle('active'))
})
