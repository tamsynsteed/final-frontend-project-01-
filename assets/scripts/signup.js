function signup() {
  let form = document.getElementById("signUpForm");
  let inputs = form.getElementsByTagName("input");
  const user = {
    fullname: inputs[0].value,
    mobile_number: inputs[1].value,
    email: inputs[2].value,
    password: inputs[3].value,
  };

  fetch("https://blooming-fjord-31092.herokuapp.com/add-user/", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      alert(json.msg);
      window.location.href = "index.html";
    })
    .catch((e) => alert(e));
}

function addBooking() {
  let retrieveObject = JSON.parse(localStorage.getItem("booking"));
  const addBooking = {
    user_id: user.person_id,
    hotel_id: hotel.id,
    fullname: user.fullname,
    email: user.email,
    hotel: hotel.hotel_name,
    checkin: booking.checkin,
    checkout: booking.checkout,
    days: booking.days_stay,
    guests: booking.guests,
    rooms: booking.rooms,
    price: hotel.price,
    total_cost: booking.total_cost,
  };

  fetch("https://blooming-fjord-31092.herokuapp.com/add-booking/", {
    method: "POST",
    body: JSON.stringify(addBooking),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      alert(json.msg);
    })
    .catch((e) => alert(e));
}





