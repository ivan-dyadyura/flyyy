import "inputmask"

const phone = () => {
	let telephones = document.querySelectorAll(".js-phone-mask")

	telephones.forEach(element => {
		Inputmask({
			"mask": "+7 (999) 999-9999"
		}).mask(element)
	})
}

phone()