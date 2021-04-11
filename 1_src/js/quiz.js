const form = () => {
	let form = document.querySelector('.js-send-form')
	let button = form.querySelector('button[type=submit]')
	let quiz = document.querySelector('.quiz')
	let overlay = document.querySelector('.overlay')

	button.addEventListener('click', () => {
		validate(form)
	})

	form.addEventListener('change', () => {
		validate(form)
	})

	form.addEventListener('submit', (e) => {
		e.preventDefault()

		let request = new XMLHttpRequest()

		request.onreadystatechange = function () {
			if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
				form.innerHTML =
					`<div class="quiz__final">
						<img class="quiz__final-img" src="img/quiz/final-icon.png" alt="">
						<div class="quiz__form-title">
							С пасибо за прохождение теста!
						</div>
						<button class="btn btn--transparent quiz__final-btn">ОК</button>
					</div>`
				form.querySelector('.quiz__final-btn').addEventListener('click', () => {
					quiz.classList.remove('active')
					overlay.classList.remove('active')
					const html = document.querySelector('html')
					html.style.overflow = ''
					html.style.marginRight = `0px`
				})
			} else if (this.status === 404) {

				console.log('Ашипка')
			}
		}

		request.open(form.method, form.action, true)
		request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')

		let data = new FormData(form)
		let dataPost = null

		// Формируем массив данных для отправки 
		data.forEach(function (value, key) {
			dataPost += '&' + key + '=' + value
		})

		if (dataPost) {
			request.send(dataPost)
		}
	})

	function validate(form) {
		let error = 0
		let elems = form.querySelectorAll('.v-req')

		for (let index = 0; index < elems.length; index++) {
			const input = elems[index]

			if (input.classList.contains('_email')) {
				if (emailTest(input)) {
					formAddError(input)
					error++
				} else {
					formRemoveError(input)
				}
			} else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
				formAddError(input)
				error++
			} else if (input.value === '') {
				formAddError(input)
				error++
			} else {
				formRemoveError(input)
			}
		}
	}

	function formAddError(input) {
		input.parentElement.classList.add('_error')
		input.classList.add('_error')
	}

	function formRemoveError(input) {
		input.parentElement.classList.remove('_error')
		input.classList.remove('_error')
	}

	function emailTest(input) {
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
	}

}

form()


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
		autoHeight: true,
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
				}, 400)
			})
		}
	}

	next.addEventListener('click', nextEvent)
}

quiz()