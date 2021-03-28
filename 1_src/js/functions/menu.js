// Menu burger functional
function menuBurger() {
	let menu = document.querySelector('.menu__inner')
	let btn = document.querySelector('.menu__btn')
	let close = document.querySelector('.menu__close')

	btn.addEventListener('click', () => {
		menu.classList.add('active')
		btn.classList.add('active')
	})

	close.addEventListener('click', () => {
		menu.classList.remove('active')
		btn.classList.remove('active')
	})
}

menuBurger()

function getBodyScrollTop() {
	return self.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || (document.body && document.body.scrollTop)
}

let menu = document.querySelector('.menu')

document.addEventListener('scroll', () => {
	if (getBodyScrollTop() > 50) {
		menu.classList.add('active')
	} else {
		menu.classList.remove('active')
	}
})