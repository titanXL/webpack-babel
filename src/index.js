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
    this.isModalOpen = false;
    this.mask = null;
    this.closeBtn = null;
    this.initGlobalListeners();
    this.destroyModal = this.destroyModal.bind(this);
  }

  initGlobalListeners() {
    document.addEventListener("keydown", zEvent => {
      if (zEvent.ctrlKey && zEvent.altKey && zEvent.code === "KeyE") {
        this.toggleModal();
      }
      if (zEvent.keyCode == 27 && this.node) {
        this.destroyModal();
      }
    });
  }

  createModal() {
    this.node = document.createElement("div");
    this.isModalOpen = true;
    this.node.classList = `${styles["md-modal"] + " " + styles["md-effect-1"]}`;
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
      this.node.classList += ` ${styles["md-show"]}`;
      this.mask.classList += ` ${styles["mask-visible"]}`;
    }, 1);
  }

  focusInput() {
    setTimeout(() => {
      this.node.querySelector(`textarea.${styles["user-feedback"]}`).focus();
    }, 100)
  }

  createModalContent() {
    return `<div class="${styles["md-content"]}"> 
                <span class="${styles["modal-close"]}"></span>
                <h3>Leave your feedback</h3> 
                <div class="${styles["user-feedback-container"]}"> 
                  <textarea id="bla" class="${
      styles["user-feedback"]
      }" rows="10">
                  </textarea>                
                </div>
                <div class="${styles["user-feedback-submit"]}">
                  <button class="${
      styles["user-feedback-submit-button"]
      }">Submit</button> 
                </div>
            </div>`;
  }

  bindEventHandlers() {
    this.submitBtn = this.node.querySelector(
      `button.${styles["user-feedback-submit-button"]}`
    );
    this.closeBtn = this.node.querySelector(`span.${styles["modal-close"]}`);

    this.submitBtn.addEventListener("click", this.destroyModal);
    this.closeBtn.addEventListener("click", this.destroyModal);
    this.mask.addEventListener("click", this.destroyModal);
  }

  appendToDom() {
    document.querySelector("body").appendChild(this.node);
    document.querySelector("body").appendChild(this.mask);
  }

  removeFromDom() {
    document.querySelector("body").removeChild(this.node);
    document.querySelector("body").removeChild(this.mask);
  }

  destroyModal() {
    this.node.classList = `${styles["md-modal"] + " " + styles["md-effect-1"]}`;
    this.mask.classList = `${styles["modal-mask"]}`;
    setTimeout(() => {
      this.removeFromDom();
      this.submitBtn.removeEventListener("click", this.destroyModal);
      this.isModalOpen = false;
      this.node = null;
      this.submitBtn = null;
    }, 300);
  }
  toggleModal() {
    this.isModalOpen ? this.destroyModal() : this.createModal();
  }
}
