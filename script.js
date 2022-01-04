/** Task 1 */
const div4Content = document.getElementById("div-4").innerHTML;
const div5Content = document.getElementById("div-5").innerHTML;

document.getElementById("div-5").innerHTML = div4Content;
document.getElementById("div-4").innerHTML = div5Content;

/** Task 2 */
const x = 4;
const y = 6;
const z = 3;

const p = (x + y + z) / 2;

const s = Math.sqrt(p * (p - x) * (p - y) * (p - z));
document.getElementById("div-3-end").innerHTML += s;

/** Task 3 */
const cookie = getCookie("minResult");
if (cookie !== "") {
  alert(cookie + " After you click OK button - cookies will be deleted.");
  deleteCookie("minResult");
}

function calculateMin() {
  const inputContent = document.getElementById("div-3-input");
  const numbers = inputContent.value.split(" ");
  const min = Math.min(...numbers);
  let result = 0;

  numbers.forEach((number) => {
    if (number == min) {
      result++;
    }
  });

  setCookie("minResult", result);
}

function setCookie(name, value) {
  const cookie = name + "=" + value + ";";
  document.cookie = cookie;
}

function getCookie(name) {
  let fullName = name + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(fullName) == 0) {
      return c.substring(fullName.length, c.length);
    }
  }
  return "";
}

function deleteCookie(name) {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  alert("Cookies deleted");
}

/** Task 4 */
window.onload = (event) => {
  const color = window.localStorage.getItem("color");
  document.getElementById("div-3").style.color = color;
};

function setColor() {
  const color = document.getElementById("div-3-color-input").value;
  window.localStorage.setItem("color", color);
}

/** Task 5 */
function createList(event) {
  const ul = event.srcElement.getElementsByTagName("ul");
  if (ul.length === 0) {
    const ul = document.createElement("ul");
    event.srcElement.appendChild(ul);

    const saveButton = document.createElement("button");
    saveButton.addEventListener("click", saveList);
    event.srcElement.appendChild(saveButton);
  }
  const li = document.createElement("li");
  ul[0].appendChild(li);
}

function saveList(event) {
  event.stopPropagation();
  const id = event.srcElement.parentNode.id;
  const ul = event.srcElement.parentNode.getElementsByTagName("ul");
  if (ul.length !== 0) window.localStorage.setItem(id, ul[0].children.length);
}

window.onload = (event) => {
  const div1ListLength = window.localStorage.getItem("div-1");
  if (div1ListLength !== null) {
    const ul1 = document.createElement("ul");
    for (let index = 0; index < div1ListLength; index++) {
      const li = document.createElement("li");
      ul1.appendChild(li);
    }
    document.getElementById("div-1").appendChild(ul1);
  }
};
