// Education slider
import {
	Swiper,
	Navigation,
	Scrollbar,
	Pagination
} from 'swiper'

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