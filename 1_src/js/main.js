import accordion from './components/accordion'
import {
	Swiper,
	Navigation,
	Scrollbar
} from 'swiper'
import 'simplebar'

accordion('.js-accordion', '.js-accordion__btn', '.js-accordion__content', 'js-accordion__content--active')

Swiper.use([Navigation, Scrollbar])

new Swiper('.education-center__slider', {
	slidesPerView: 'auto',
	spaceBetween: 32,
	navigation: {
		nextEl: '.education-center__nav--next',
		prevEl: '.education-center__nav--prev',
	},
	scrollbar: {
		el: '.swiper-scrollbar',
		draggable: true,
		dragSize: '120',

	}
})


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