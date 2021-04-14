@include('plugins/simplebar.min.js')

@include('components/anim.js')
@include('functions/phone.js')
@include('functions/form-send.js')

@include('components/accordion.js')

@include('functions/menu.js')


document.addEventListener('DOMContentLoaded', () => {
	accordion('.js-accordion', '.js-accordion__btn', '.js-accordion__content', 'js-accordion__content--active')

	// Footer accordion in mobile version
	accordion('.js-f-accordion', '.js-f-accordion__btn', '.js-f-accordion__content', 'active')
})