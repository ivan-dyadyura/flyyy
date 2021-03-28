import 'simplebar'

import './functions/menu'
import './functions/education-slider'

import './components/dynamic-adaptive'
import './components/anim'

import accordion from './components/accordion'
import sectionModal from './components/section-modal'
import mobileSlider from './components/mobile-slider'



document.addEventListener('DOMContentLoaded', () => {
	accordion('.js-accordion', '.js-accordion__btn', '.js-accordion__content', 'js-accordion__content--active')

	// Team section pupup
	sectionModal('.team .js-team-btn', '#team-modal', '.section-modal__close')

	// Footer accordion in mobile version
	accordion('.js-f-accordion', '.js-f-accordion__btn', '.js-f-accordion__content', 'active')

	// Team slider in section team
	mobileSlider('#team-slider', 1300, {
		slidesPerView: 2,
		slidesPerColumn: 2,
		slidesPerColumnFill: 'row',
		spaceBetween: 15,
		navigation: {
			nextEl: '.team__btn--next',
			prevEl: '.team__btn--prev',
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'fraction',
		},
	})
})