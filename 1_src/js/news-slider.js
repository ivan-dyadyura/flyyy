new Swiper('.news-slider__wrapper', {
	slidesPerView: 'auto',
	navigation: {
		nextEl: '.news-slider__nav--next',
		prevEl: '.news-slider__nav--prev',
	},
	scrollbar: {
		el: '.news-slider__scrollbar',
		draggable: true,
	},
	breakpoints: {
		576: {
			scrollbar: {
				dragSize: '43',
			},
		},
		100: {
			spaceBetween: 0,
			scrollbar: {
				dragSize: '14',
			},
		},
	}
})
