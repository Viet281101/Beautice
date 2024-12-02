
class ToTopButton {
	constructor(buttonId) {
		this.toTopBtn = document.getElementById(buttonId);
		this.threshold = 0.9;
		this.init();
	}

	toggleButtonVisibility = () => {
		const scrollPosition = window.scrollY + window.innerHeight;
		const documentHeight = document.documentElement.scrollHeight;

		if (scrollPosition / documentHeight >= this.threshold) {
			this.toTopBtn.classList.add('show');
		} else {
			this.toTopBtn.classList.remove('show');
		}
	};

	scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	init = () => {
		window.addEventListener('scroll', this.toggleButtonVisibility);
		this.toTopBtn.addEventListener('click', this.scrollToTop);
	};
}

export default ToTopButton;
