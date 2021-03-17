import accordion from './components/accordion'
import {Swiper, Navigation, Scrollbar} from 'swiper'

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