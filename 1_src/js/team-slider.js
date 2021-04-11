const mobileSlider = (sliderSelector, windoWidth, sliderConfig) => {
	const slider = document.querySelector(sliderSelector);
	let {
		clientWidth
	} = document.body
	let yourSlider

	const sliderInit = () => {
		yourSlider = new Swiper(slider, sliderConfig)
		yourSlider.init()
	}

	const resizeHandlerSlider = () => {
		clientWidth = document.body.clientWidth
		if (clientWidth <= windoWidth) {

			if (yourSlider) {
				yourSlider.destroy()
			}

			sliderInit()
		} else {
			if (yourSlider) {
				yourSlider.destroy()
			}
		}
	}

	let the_timer

	window.addEventListener('resize', () => {
		clearTimeout(the_timer)
		the_timer = setTimeout(function () {
			// console.log('resize')
			resizeHandlerSlider()
		}, 75);
	})
	window.addEventListener('load', resizeHandlerSlider)
}