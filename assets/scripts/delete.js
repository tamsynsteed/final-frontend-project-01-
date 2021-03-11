function showData() {
  let list = document.getElementById("data-items");

  fetch("https://blooming-fjord-31092.herokuapp.com/view/")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      json.forEach((item) => createtr(item));
    });
}
function createtr(hotel) {
  const tableitem = `    <tr role="row">
      <td role="cell">${hotel.id}</td>
      <td role="cell">${hotel.hotel_name}</td>
      <td role="cell">${hotel.description}</td>
      <td role="cell">${hotel.image1}</td>
      <td role="cell">${hotel.image2}</td>
      <td role="cell">${hotel.image3}</td>
      <td role="cell">${hotel.price}</td>
      <td role="cell">${hotel.stars}</td>
    
      <td><a href="https://blooming-fjord-31092.herokuapp.com/delete-data/${hotel.id}/"><button>DELETE</button</a>
      </td>
      </tr>`;

  let list = document.getElementById("data-items");
  console.log("hello");

  list.innerHTML += tableitem;
}

showData();
