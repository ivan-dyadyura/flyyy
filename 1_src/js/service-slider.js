new Swiper('.service__right', {
	slidesPerView: 'auto',
	navigation: {
		nextEl: '.service__nav--next',
		prevEl: '.service__nav--prev',
	},
	scrollbar: {
		el: '.service__scrollbar',
		draggable: true,
	},
	breakpoints: {
		768: {
			spaceBetween: 50,
			scrollbar: {
				dragSize: '58',
			},
		},
		480: {
			scrollbar: {
				dragSize: '21',
			},
		},
		100: {
			spaceBetween: 0,
			scrollbar: {
				dragSize: '12',
			},
		},
	}
})
