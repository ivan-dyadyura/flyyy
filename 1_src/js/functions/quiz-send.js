import quiz from "../components/quiz"

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
					})
			} else if (this.status === 404) {

				console.log('Ашипка')
			}
		}

		request.open(form.method, form.action, true)
		request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')

		let data = new FormData(form)
		let dataPost

		// Формируем массив данных для отправки 
		data.forEach(function (value, key) {
			dataPost += '&' + key + '=' + value
		})

		request.send(dataPost)
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