function uploadListing() {
  const inputs = document.getElementsByTagName("input");

  let listing = {
    hotel_name: inputs[0].value,
    description: inputs[1].value,
    image1: inputs[1].value,
    image2: inputs[1].value,
    image3: inputs[1].value,
    price: inputs[1].value,
    stars: inputs[1].value,
  };

  console.log(listing);

  fetch("https://blooming-fjord-31092.herokuapp.com/savedetails/", {
    method: "POST",
    body: JSON.stringify(listing),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json.msg);
      localStorage.setItem("listing", JSON.stringify(json));
      alert("Resort has been added to the database.");
      document.getElementById("uploadForm").reset();
      let show = document.getElementById("show-data");

      show.innerHTML += `<button onclick='showData();'><a href="https://blooming-fjord-31092.herokuapp.com/view" target="_blank">Show data</a></button>`;
    });
}

function showData() {
  alert("Generating raw data");
}
