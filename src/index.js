import styles from "./style.css";

function mergeClassNames(...names) {
  return [names];
}

window.onload = e => {
  const t = new Analytics();
};

class Analytics {
  constructor() {
    this.node = null;
    this.submitBtn = null;
    this.mask = null;
    this.closeBtn = null;
    this.documentBody = document.querySelector("body");
    this.isModalOpen = false;
    this.initGlobalListeners();
    this.destroyModal = this.destroyModal.bind(this);
  }

  initGlobalListeners() {
    document.addEventListener("keydown", keyEvent => {
      if (keyEvent.ctrlKey && keyEvent.altKey && keyEvent.code === "KeyE") {
        this.toggleModal();
      }
      if (keyEvent.keyCode == 27 && this.node) {
        this.destroyModal();
      }
    });
  }

  createModal() {
    this.node = document.createElement("div");
    this.isModalOpen = true;
    this.node.classList = `${styles["modal"]}`;
    this.node.innerHTML = this.createModalContent();
    this.mask = document.createElement("div");
    this.mask.classList = `${styles["modal-mask"]}`;
    this.bindEventHandlers();
    this.appendToDom();
    this.showModal();
    this.focusInput();
  }

  showModal() {
    setTimeout(() => {
      this.node.classList += ` ${styles["modal-visible"]}`;
      this.mask.classList += ` ${styles["mask-visible"]}`;
    }, 1);
  }

  focusInput() {
    setTimeout(() => {
      this.node.querySelector(`textarea.${styles["user-feedback"]}`).focus();
    }, 100);
  }

  createModalContent() {
    return `<div class="${styles["content"]}"> 
                <span class="${styles["modal-close"]}"></span>
                <h3>Leave your feedback</h3> 
                <div class="${styles["user-feedback-container"]}"> 
                  <textarea id="bla" class="${
                    styles["user-feedback"]
                  }" rows="10">
                  </textarea>                
                </div>
                <div class="${styles["submit-container"]}">
                  <button class="${styles["submit-button"]}">Submit</button> 
                </div>
            </div>`;
  }

  bindEventHandlers() {
    this.submitBtn = this.node.querySelector(
      `button.${styles["submit-button"]}`
    );
    this.closeBtn = this.node.querySelector(`span.${styles["modal-close"]}`);

    this.submitBtn.addEventListener("click", this.destroyModal);
    this.closeBtn.addEventListener("click", this.destroyModal);
    this.mask.addEventListener("click", this.destroyModal);
  }

  appendToDom() {
    this.documentBody.appendChild(this.mask);
    this.documentBody.appendChild(this.node);
  }

  removeFromDom() {
    this.documentBody.removeChild(this.mask);
    this.documentBody.removeChild(this.node);
  }

  destroyModal() {
    this.node.classList = `${styles["modal"]}`;
    this.mask.classList = `${styles["modal-mask"]}`;

    setTimeout(() => {
      this.removeFromDom();
      this.submitBtn.removeEventListener("click", this.destroyModal);
      this.mask.removeEventListener("click", this.destroyModal);
      this.closeBtn.removeEventListener("click", this.destroyModal);
      this.node = null;
      this.submitBtn = null;
      this.mask = null;
      this.closeBtn = null;
      this.isModalOpen = false;
    }, 300);
  }

  toggleModal() {
    this.isModalOpen ? this.destroyModal() : this.createModal();
  }
}
