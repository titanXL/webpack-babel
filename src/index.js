let node = null;
import styles from "./style.css";

window.onload = e => {
  console.log("LOADED");
  node = document.createElement("div");
  node.style.width = "100px";
  node.style.height = "100px";
  node.classList = styles.test;
  document.querySelector("body").appendChild(node);
  const t = new Test();
};

class Test {
  constructor() {
    this.mounted();
  }
  mounted() {
    console.log("MOUNTED");
  }
  unmount() {}
}
