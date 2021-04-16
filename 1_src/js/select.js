let select = function () {
	let selectHeader = document.querySelectorAll('.select__header')
	let selectItem = document.querySelectorAll('.select__item')

	selectHeader.forEach(item => {
		item.addEventListener('click', selectToggle)
	})

	selectItem.forEach(item => {
		item.addEventListener('click', selectChoose)
	})

	function selectToggle() {
		this.parentElement.classList.toggle('is-active')
	}

	function selectChoose() {
		let text = this.innerText
		let currentText = this.closest('.select').querySelector('.select__current')
		let select = this.closest('.select')
		let selectInput = this.closest('.select').querySelector('.select__input')
		currentText.innerText = text
		selectInput.value = text
		select.classList.remove('is-active')
	}
}

select()