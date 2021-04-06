const sectionModal = (btn, modalSelector, closeSelector) => {
	const modal = document.querySelector(modalSelector)
	const modalPosition = modal.querySelector('[data-m-position]')
	const modalName = modal.querySelector('[data-m-name]')
	const modalText = modal.querySelector('[data-m-text]')
	const modalImg = modal.querySelector('[data-m-image]')
	const buttons = document.querySelectorAll(btn)
	const close = document.querySelector(closeSelector)
	const html = document.querySelector('html')

	scroll = calcScroll()

	buttons.forEach(item => {
		item.addEventListener('click', function (e) {
			const name = item.querySelector('.js-name')
			const position = item.querySelector('.js-position')
			const text = item.querySelector('.js-text')
			const image = item.querySelector('.js-image')

			modal.classList.add('active')
			html.style.overflow = 'hidden'
			html.style.marginRight = `${scroll}px`

			if (name) {
				modalName.innerHTML = name.textContent || name.innerText
			}
			if (position) {
				modalPosition.innerHTML = position.textContent || position.innerText
			}
			if (text) {
				modalText.innerHTML = text.textContent || text.innerText
			}
			if (image) {
				const imageSrc = image.getAttribute('data-m-src')
				modalImg.setAttribute('src', imageSrc)
			}
		})
	})

	close.addEventListener('click', function () {
		html.style.overflow = ''
		html.style.marginRight = `0px`
		modal.classList.remove('active')
	})

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
}

export default sectionModal