function renderUser() {
  fetch("https://reqres.in/api/users?page=2")
    .then((response) => response.json())
    .then((res) => {
      console.log(res.data);
      let html = "";
      res.data.forEach((user) => {
        let htmlSegment = `<div class="card" style="width: 18rem;">
          <img  src="${user.avatar}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${user.first_name} ${user.last_name}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <br />
        <br />
        <br />`;

        html += htmlSegment;
      });

      document.querySelector(".content").innerHTML = html;
    });
}

renderUser();

function postUser() {
  fetch("https://reqres.in/api/users/2", {
    method: "POST",
    body: JSON.stringify({
      name: "morpheus",
      job: "leader",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}
postUser();
console.log("--------------------------------------------");

function putUser() {
  fetch("https://reqres.in/api/users/2", {
    method: "PUT",
    body: JSON.stringify({
      name: "morpheus",
      job: "zion resident",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}
putUser();

function patchUser() {
  fetch("https://reqres.in/api/users/2", {
    method: "PATCH",
    body: JSON.stringify({
      name: "morpheus",
      job: "zion resident",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}
patchUser();

function deleteUser() {
  fetch("https://reqres.in/api/users/2", {
    method: "DELETE",
  });
}
deleteUser();
