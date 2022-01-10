const baseUrl = "https://nodejs-webapp-antosiev.herokuapp.com";

function post(event) {
  event.stopPropagation();

  const count = document.getElementById("collapse-number-input").value;
  const content = document.getElementById("collapse-content-input").value;

  const url = `${baseUrl}/collapses-post`;
  const data = {
    count,
    content,
  };
  const params = {
    headers: {
      "content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(data),
    method: "POST",
  };
  fetch(url, params).then((res) => console.log(res));
}

function put(event) {
  event.stopPropagation();

  const count = document.getElementById("collapse-number-input").value;
  const content = document.getElementById("collapse-content-input").value;

  const url = `${baseUrl}/collapses-put`;
  const data = {
    count,
    content,
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

  const url = `${baseUrl}/collapses`;
  fetch(url).then((res) => {
    res.json().then((j) => {
      document.getElementById("collapse-number-input").value = j.find(
        (i) => i.id === 1
      ).count;
      document.getElementById("collapse-content-input").value = j.find(
        (i) => i.id === 1
      ).content;
    });
  });
}
