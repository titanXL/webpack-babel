let node = null;
import styles from "./style.css";

window.onload = e => {
	
	const t = new FeedbackSender();
};

var x = []
function test() {
	x.push(new Array(1000000).join('x'));
}

class FeedbackSender {
	constructor() {
		this.node = '';
		this.closeButton = '';
		this.createModal();
		this.watchKeys();
	}

	createModal() {
		this.node = document.createElement("div");
		this.node.classList = `${styles['md-modal'] + ' ' + styles['md-effect-1']}`;
		this.node.innerHTML = `<div class="${styles['md-content']}"> 
							  	<h3>Leave your feedback</h3> 
							  	<div> 
									<p>This is a modal window. You can do the following things with it:</p>
									<ul> 
										<li><strong>Read:</strong> modal windows will probably tell you something important so don\'t forget to read what they say.</li>
										<li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>
										<li><strong>Close:</strong> click on the button below to close the modal.</li>
									</ul> 
									<button class="md-close">Close me!</button> 
							  	</div>
							</div>`;
		document.querySelector("body").appendChild(this.node);
		this.closeButton = this.node.getElementsByTagName('button')[0];
		this.closeButton.addEventListener('click', () => this.closeModal());
	}

	watchKeys() {
		document.addEventListener('keydown', zEvent => {
			if (zEvent.ctrlKey && zEvent.altKey && zEvent.code === "KeyE") {
				if (this.node.className.indexOf(styles['md-show']) < 0) {
					this.node.className += ' ' + styles['md-show'];
				} else {
					this.closeModal();
				}
				
			}
		});
		
	}

	closeModal() {
		this.closeButton.removeEventListener('click', () => this.closeModal())
		this.node.className = `${styles['md-modal'] + ' ' + styles['md-effect-1']}`;
	}

	unmount() { }
}

