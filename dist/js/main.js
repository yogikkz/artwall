const burger = document.querySelector('.burger')
const navBurger = document.querySelector('.nav-burger')
const burgerIcon = burger.querySelectorAll('i')
const navBurgerLink = navBurger.getElementsByClassName('burger-link')
const searchBtn = document.getElementsByClassName('search-btn')
const searchBar = document.querySelector('.search')

for (i = 0; i < navBurgerLink.length; i++) {
	navBurgerLink[i].addEventListener('click', function () {
		this.classList.toggle('active')
	})
}

burger.addEventListener('click', () => {
	navBurger.classList.toggle('open')
	burgerIcon.forEach(element => element.classList.toggle('active'))
})

//SEARCH
const enterKeyCheck = e => {
	if (e.key === 'Enter') {
		searchBar.classList.toggle('active')
	}
}
for (i = 0; i < searchBtn.length; i++) {
	searchBtn[i].addEventListener('click', function () {
		searchBar.classList.toggle('active')
		searchBar.addEventListener('keyup', enterKeyCheck)
	})
}