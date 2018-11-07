import styles from "./style.css";

function mergeClassNames(...names) {
  return [names]
}

window.onload = e => {

  const t = new Analytics();
};

class Analytics {
  constructor() {
    this.node = null
    this.closeBtn = null
    this.isModalOpen = false
    this.initGlobalListeners()
    this.destroyModal = this.destroyModal.bind(this)
  }

  initGlobalListeners() {
    document.addEventListener('keydown', zEvent => {
      if (zEvent.ctrlKey && zEvent.altKey && zEvent.code === "KeyE") {
        this.toggleModal()
      }
    });
  }

  createModal() {
    this.node = document.createElement('div')
    this.isModalOpen = true
    this.node.classList = `${styles['md-modal'] + ' ' + styles['md-effect-1'] + ' ' + styles['md-show']}`;
    this.node.innerHTML = this.createModalContent()

    this.bindEventHandlers()
    this.appendToDom()
  }

  createModalContent() {
    return `<div class="${styles['md-content']}"> 
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
  }

  bindEventHandlers() {
    this.closeBtn = this.node.querySelector('button.md-close')
    this.closeBtn.addEventListener('click', this.destroyModal)
  }

  appendToDom() {
    document.querySelector("body").appendChild(this.node);
  }

  removeFromDom() {
    document.querySelector("body").removeChild(this.node);
  }

  destroyModal() {
    this.removeFromDom()
    this.closeBtn.removeEventListener('click', this.destroyModal)
    this.isModalOpen = false
    this.node = null
    this.closeBtn = null
  }
  toggleModal() {
    this.isModalOpen ? this.destroyModal() : this.createModal()
  }
}