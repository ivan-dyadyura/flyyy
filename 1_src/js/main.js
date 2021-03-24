import accordion from './components/accordion'
import {
	Swiper,
	Navigation,
	Scrollbar,
	Pagination
} from 'swiper'
import 'simplebar'
import teamModal from './components/team-block'

accordion('.js-accordion', '.js-accordion__btn', '.js-accordion__content', 'js-accordion__content--active')

Swiper.use([Navigation, Scrollbar, Pagination])

new Swiper('.education-center__slider', {
	slidesPerView: 'auto',
	spaceBetween: 5,
	navigation: {
		nextEl: '.education-center__nav--next',
		prevEl: '.education-center__nav--prev',
	},
	scrollbar: {
		el: '.swiper-scrollbar',
		draggable: true,
		dragSize: '120',
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'fraction',
	},
	breakpoints: {
		// when window width is >= 480px
		768: {
			spaceBetween: 32
		},
		480: {
			spaceBetween: 16
		},
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

teamModal('.team .js-team-btn', '#team-modal', '.section-modal__close')