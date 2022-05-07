const burger = document.querySelector('.burger')
const navBurger = document.querySelector('.nav__burger')
const burgerIcon = burger.querySelectorAll('i')
const navBurgerTitle = navBurger.getElementsByTagName('h2')
const navBurgerLink = navBurger.querySelectorAll('ul li ul')

burger.addEventListener('click', () => {
	navBurger.classList.toggle('open')
	burgerIcon.forEach(element => element.classList.toggle('active'))
})

for (i = 0; i < navBurgerTitle.length; i++) {
	navBurgerTitle[i].addEventListener('click', function () {
		this.classList.toggle('show')
	})
}
