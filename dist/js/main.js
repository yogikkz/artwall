const burger = document.querySelector('.burger')
const navBurger = document.querySelector('.nav-burger')
const burgerIcon = burger.querySelectorAll('i')

burger.addEventListener('click', () => {
	navBurger.classList.toggle('open')
	burgerIcon.forEach(element => element.classList.toggle('active'))
})

const navBurgerLink = navBurger.getElementsByClassName('burger-link')

for (i = 0; i < navBurgerLink.length; i++) {
	navBurgerLink[i].addEventListener('click', function () {
		this.classList.toggle('active')
	})
}
