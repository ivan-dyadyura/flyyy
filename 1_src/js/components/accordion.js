const accordion = (container, btnSelector, contentSelector, activeClass, btnActiveClass) => {
	const containers = document.querySelector(container)
	const content = document.querySelectorAll(contentSelector)
	const tab = document.querySelectorAll(btnSelector)

	function hideTabContent() {
		content.forEach(item => {
			item.classList.remove(activeClass)
		})

		tab.forEach(item => {
			item.classList.remove(btnActiveClass)
		})
	}

	function showTabContent(i = 0) {
		content[i].classList.add(activeClass)
		tab[i].classList.add(btnActiveClass)
	}

	hideTabContent()
	showTabContent()

	containers.addEventListener('click', (e) => {
		const target = e.target

		if (target &&
			target.classList.contains(btnSelector.replace(/\./, '')) ||
			target.parentNode.classList.contains(btnSelector.replace(/\./, ''))) {
			tab.forEach((item, i) => {
				if (target == item || target.parentNode == item) {
					hideTabContent()
					showTabContent(i)
				}
			})
		}
	})
}

export default accordion