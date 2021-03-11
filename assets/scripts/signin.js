function signin() {
  let form = document.getElementById("signInForm");
  let inputs = form.getElementsByTagName("input");
  const user = {
    email: inputs[0].value,
    password: inputs[1].value,
  };

  fetch("https://blooming-fjord-31092.herokuapp.com/sign-in/", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      if (json === undefined || json === null) {
        alert("Invalid username or password");
      } else {
        localStorage.setItem("user", JSON.stringify(json));

        alert("Login Successful");

        window.location.href = "listing.html";
      }
    })
    .catch((e) => alert(e));
}

function logout() {
  localStorage.removeItem("user");
  window.location.href = "index.html";
}
