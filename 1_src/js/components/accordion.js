const accordion = (container, btnSelector, contentSelector, activeClass, btnActiveClass = 'active') => {
	const containers = document.querySelectorAll(container)

	for (let index = 0; index < containers.length; index++) {
		const element = containers[index]
		const content = containers[index].querySelectorAll(contentSelector)
		const tab = containers[index].querySelectorAll(btnSelector)
		let lastElement = 0
		
		function hideTabContent() {
			content.forEach(item => {
				item.classList.remove(activeClass)
			})
	
			tab.forEach(item => {
				item.classList.remove(btnActiveClass)
			})
		}

		function showTabContent(i = 0) {
			content[i].classList.toggle(activeClass)
			tab[i].classList.toggle(btnActiveClass)
		}

		hideTabContent()
		showTabContent()

		element.addEventListener('click', (e) => {
			const target = e.target
			if (target &&
				target.classList.contains(btnSelector.replace(/\./, '')) ||
				target.parentNode.classList.contains(btnSelector.replace(/\./, ''))) {
				tab.forEach((item, i) => {
					if (target == item || target.parentNode == item) {
						if (target.classList.contains(btnActiveClass) || target.parentNode.classList.contains(btnActiveClass)) {
							console.log('yes')
							hideTabContent()
						} else {
							hideTabContent()
							showTabContent(i)
						}
					}
				})
			}
		})
	}

}