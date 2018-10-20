console.log("TEST");
let node = null;

window.onload = e => {
  console.log("LOADED");
  node = document.createElement("div");
  node.style.width = "100px";
  node.style.height = "100px";
  node.style.backgroundColor = "salmon";
  document.querySelector("body").appendChild(node);
};
