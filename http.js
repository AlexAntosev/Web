function post(event) {
  event.stopPropagation();

  const numberOfCollapses = document.getElementById(
    "collapse-number-input"
  ).value;
  const contentOfCollapses = document.getElementById(
    "collapse-content-input"
  ).value;

  const url = "https://nodejs-webapp-antosiev.herokuapp.com/collapses-post";
  const data = {
    count: numberOfCollapses,
    content: contentOfCollapses,
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

  const numberOfCollapses = document.getElementById(
    "collapse-number-input"
  ).value;
  const contentOfCollapses = document.getElementById(
    "collapse-content-input"
  ).value;

  const url = "https://nodejs-webapp-antosiev.herokuapp.com/collapses-put";
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

  const url = "https://nodejs-webapp-antosiev.herokuapp.com/collapses";
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
