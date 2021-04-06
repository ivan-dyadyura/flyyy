const modals = () => {
	function bindModal(triggerSelector) {
		const trigger = document.querySelectorAll(triggerSelector),
			scroll = calcScroll(),
			overlay = document.querySelector('.overlay')



		const html = document.querySelector('html')

		trigger.forEach(item => {
			console.log(item)
			let modalSel = item.getAttribute('data-modal-target')
			console.log(modalSel)
			let modal = document.querySelector(modalSel)
			console.log(modal)
			const close = modal.querySelector('.js-close')

			item.addEventListener('click', (e) => {
				if (e.target) {
					e.preventDefault()
				}

				modal.classList.add('active')
				overlay.classList.add('active')
				html.style.overflow = 'hidden'
				html.style.marginRight = `${scroll}px`

				close.addEventListener('click', () => {
					modal.classList.remove('active')
					overlay.classList.remove('active')
					html.style.overflow = ''
					html.style.marginRight = `0px`
				})
			})
		})

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

	// bindModal('.js-quiz-btn', '.quiz', '.quiz__close')

	bindModal('.js-pupup-btn')
	bindModal('.js-quiz-btn')
	// showModalByTime('.popup', 60000)
}

export default modals