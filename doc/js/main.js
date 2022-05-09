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

// cookies

setCookie = (cName, cValue, expDays) => {
	let date = new Date()
	date.setTime(date.getTime() + expDays * 24 * 60 * 60 * 1000)
	const expires = 'expires=' + date.toUTCString()
	document.cookie = cName + '=' + cValue + '; ' + expires + '; path=/'
}

getCookie = cName => {
	const name = cName + '='
	const cDecoded = decodeURIComponent(document.cookie)
	const cArr = cDecoded.split('; ')
	let value
	cArr.forEach(val => {
		if (val.indexOf(name) === 0) value = val.substring(name.lenght)
	})
	return value
}

document.querySelector('.cookies-btn').addEventListener('click', () => {
	document.querySelector('.cookies').style.display = 'none'
	setCookie('cookie', true, 30)
})

cookieMessage = () => {
	if (!getCookie('cookie')) document.querySelector('.cookies').style.display = 'block'
}

window.addEventListener('load', cookieMessage)
