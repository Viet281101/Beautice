
class ProBox {
	constructor(selector) {
		this.proBoxes = document.querySelectorAll(selector);
		this.observer = null;
	};

	enableHover() {
		this.proBoxes.forEach((box) => {
			box.addEventListener('mouseenter', () => {
				this.proBoxes.forEach((b) => b.classList.remove('active'));
				box.classList.add('active');
			});
		});
	};

	enableScroll() {
		this.observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						this.proBoxes.forEach((box) => box.classList.remove('active'));
						entry.target.classList.add('active');
					}
				});
			}, { threshold: 0.6 }
		);
		this.proBoxes.forEach((box) => this.observer.observe(box));
	};

	resetInteraction() {
		if (this.observer) {
			this.observer.disconnect();
		}
		this.proBoxes.forEach((box) => {
			box.classList.remove('active');
			box.replaceWith(box.cloneNode(true));
		});
		this.proBoxes = document.querySelectorAll('.pro-box');
	};

	applyInteraction() {
		if (window.innerWidth > 768) {
			this.enableHover();
		} else {
			this.enableScroll();
		}
	};

	initialize() {
		this.applyInteraction();
		window.addEventListener('resize', () => {
			this.resetInteraction();
			this.applyInteraction();
		});
	};
};

export default ProBox;
