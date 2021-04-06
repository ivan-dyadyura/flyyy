const modals = () => {
	function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
		const trigger = document.querySelectorAll(triggerSelector),
			modal = trigger.getAttribute('modal-target'),
			close = document.querySelector(closeSelector),
			windows = document.querySelectorAll('[data-modal]'),
			scroll = calcScroll(),
			overlay = document.querySelector('.overlay')



		const html = document.querySelector('html')

		trigger.forEach(item => {
			item.addEventListener('click', (e) => {
				if (e.target) {
					e.preventDefault()
				}

				windows.forEach(item => {
					item.classList.remove('active')
				})

				modal.classList.add('active')
				overlay.classList.add('active')
				html.style.overflow = 'hidden'
				html.style.marginRight = `${scroll}px`
			})
		})

		close.addEventListener('click', () => {
			windows.forEach(item => {
				item.classList.remove('active')
			})

			modal.classList.remove('active')
			overlay.classList.remove('active')
			html.style.overflow = ''
			html.style.marginRight = `0px`
		})

		modal.addEventListener('click', (e) => {
			if (e.target === modal && closeClickOverlay) {
				windows.forEach(item => {
					item.classList.remove('active')
				})

				modal.classList.remove('active')
				overlay.classList.remove('active')
				html.style.overflow = ''
				html.style.marginRight = `0px`
				// document.body.classList.remove('modal-open')
			}
		})
	}

	function showModalByTime(selector, time) {
		setTimeout(() => {
			document.querySelector(selector).style.display = 'block'
			html.style.overflow = 'hidden'
		}, time)
	}

	function calcScroll() {
		let div = document.createElement('div')

		div.style.width = '50px'
		div.style.height = '50px'
		div.style.overflowY = 'scroll'
		div.style.visibility = 'hidden'

		document.body.appendChild(div)
		let scrollWidth = div.offsetWidth - div.clientWidth
		div.remove()

		return scrollWidth
	}

	bindModal('.js-quiz-btn', '.quiz', '.quiz__close')

	bindModal('.js-pupup-btn', '.modal-form', '.modal-form__close')
		// showModalByTime('.popup', 60000)
}

export default modals