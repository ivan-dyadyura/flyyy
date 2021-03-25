import {
	Swiper,
	
} from 'swiper'

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

	window.addEventListener('resize', resizeHandlerSlider)
	window.addEventListener('load', resizeHandlerSlider)
}

export default mobileSlider