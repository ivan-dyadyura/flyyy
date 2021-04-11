document.addEventListener('DOMContentLoaded', () => {
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

	bindModal('.js-pupup-btn', true)
	bindModal('.js-quiz-btn', true)
	bindModal('.js-team-modal', true)
})