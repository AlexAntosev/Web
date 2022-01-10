function createCollapses(event) {
  event.stopPropagation();

  const count = document.getElementById("collapse-number-input").value;
  const content = document.getElementById("collapse-content-input").value;

  for (let index = 0; index < count; index++) {
    createCollapseForm(content);
  }
}

function createCollapseForm(contentText) {
  const button = document.createElement("button");
  button.textContent = "Click to open";
  button.className = "collapsible";
  button.addEventListener("click", openCollapseForm);
  document.getElementById("div-3").appendChild(button);

  const contentDiv = document.createElement("div");
  contentDiv.className = "collapse-content";
  document.getElementById("div-3").appendChild(contentDiv);

  const content = document.createElement("p");
  content.textContent = contentText;
  contentDiv.appendChild(content);
}

function openCollapseForm(event) {
  event.stopPropagation();
  this.classList.toggle("active");
  var content = this.nextElementSibling;
  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
  }
}
