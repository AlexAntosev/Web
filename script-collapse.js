const { json } = require("body-parser");

function createCollapses(event) {
  event.stopPropagation();

  const numberOfCollapses = document.getElementById(
    "collapse-number-input"
  ).value;
  const contentOfCollapses = document.getElementById(
    "collapse-content-input"
  ).value;

  for (let index = 0; index < numberOfCollapses; index++) {
    createCollapseForm(contentOfCollapses);
  }
}

function save(event) {
  event.stopPropagation();

  const numberOfCollapses = document.getElementById(
    "collapse-number-input"
  ).value;
  const contentOfCollapses = document.getElementById(
    "collapse-content-input"
  ).value;

  const url = "http://localhost:3000/collapses-put";
  const data = {
    count: numberOfCollapses,
    content: contentOfCollapses,
  };
  const params = {
    headers: {
      "content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(data),
    method: "PUT",
  };
  fetch(url, params).then((res) => console.log(res));
}

function get(event) {
  event.stopPropagation();

  const url = "http://localhost:3000/collapses";
  fetch(url).then((res) => {
    res.json().then(j => {
      document.getElementById("collapse-number-input").value = j.find(i => i.id === 1).count;
      document.getElementById("collapse-content-input").value = j.find(i => i.id === 1).content;
    });
  });
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
