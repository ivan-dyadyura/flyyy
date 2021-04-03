import Swiper, {
	Navigation
} from 'swiper'

Swiper.use(Navigation)

function quiz() {
	let quizWrapper = document.querySelector('.quiz')
	let quiz = quizWrapper.querySelector('.quiz__content')
	let prev = document.querySelector('.quiz__btn--prev')
	let next = document.querySelector('.quiz__btn--next')
	let current = document.querySelector('.quiz__current')
	let imageSliderEl = document.querySelector('.quiz__image-slider')
	let countSlides = document.querySelector('.quiz__count')

	const imageSlider = new Swiper(imageSliderEl, {
		spaceBetween: 50,
		fadeEffect: {
			crossFade: true
		},
		effect: 'fade',
		allowTouchMove: false,
	})

	const slider = new Swiper(quiz, {
		allowTouchMove: false,
	})

	countSlides.innerHTML = slider.slides.length

	prev.addEventListener('click', (e) => {
		e.preventDefault()
		slider.slidePrev()
		imageSlider.slidePrev()
		current.innerHTML = slider.realIndex + 1

		if (slider.isBeginning) {
			prev.setAttribute('disabled', 'disabled')
		}
	})

	const nextEvent = (e) => {
		e.preventDefault()
		slider.slideNext()
		imageSlider.slideNext()
		current.innerHTML = slider.realIndex + 1
		prev.removeAttribute('disabled')

		if (slider.isEnd) {
			next.removeEventListener('click', nextEvent)
			prev.setAttribute('disabled', 'disabled')

			next.addEventListener('click', (e) => {
				e.preventDefault()
				setTimeout(() => {
					quizWrapper.classList.add('quiz--ended')
				}, 250)
			})
		}
	}

	next.addEventListener('click', nextEvent)
}


export default quiz