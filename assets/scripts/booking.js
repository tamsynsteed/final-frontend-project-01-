// Get data from URL
const params = new URLSearchParams(window.location.search);

let user = JSON.parse(localStorage.getItem("user"));
console.log(user);

let storedBooking = JSON.parse(localStorage.getItem("booking"));
if (!storedBooking) {
  window.location.href = "./listing.html";
}

let hotel = {};

if (!user) {
  window.location.href = "./index.html";
}

if (params.has("hotelID")) {
  fetch(
    `https://blooming-fjord-31092.herokuapp.com/show-hotel-item/${params.get(
      "hotelID"
    )}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      hotel = data;
    });
}

function makeBooking() {
  daysDifference();
  console.log("hello");
  let form = document.getElementById("booking-form");
  let inputs = form.getElementsByTagName("input");
  let labels = document.getElementById("result").innerHTML;

  let booking = {
    user_id: user.person_id,
    hotel_id: hotel.id,
    fullname: user.fullname,
    email: user.email,
    hotel: hotel.hotel_name,

    checkin: inputs[0].value,
    checkout: inputs[1].value,
    days_stay: labels,
    guests: inputs[2].value,
    rooms: inputs[3].value,

    price: hotel.price,

    total_cost:
      parseInt(hotel.price) * parseInt(inputs[3].value) * parseInt(labels),
  };

  localStorage.setItem("booking", JSON.stringify(booking));
  window.location.href = "./info.html";
  console.log(booking);
}

function confirmBooking() {
  let booking = JSON.parse(localStorage.getItem("booking"));
  fetch("https://blooming-fjord-31092.herokuapp.com/add-booking/", {
    method: "POST",
    body: JSON.stringify(booking),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((err) => console.log("Error in backend: " + err));
}

function renderBooking() {
  document.getElementById("confirm-booking-form").innerHTML = `
  <h2>Booking Summary</h2>

  <form action="" method="POST" id="confirmBooking">
      <div class="input-container">
        <div class="icon"><i class="fa fa-user"></i> Name:</div>
        <label class="label" for="name">${user.fullname}</label>
      </div>

      <div class="input-container">
        <div class="icon"><i class="fa fa-envelope"></i> Email:</div>
        <label class="label" for="email">${user.email}</label>
      </div>

      <div class="input-container">
        <div class="icon"><i class="fas fa-hotel"></i> Hotel:</div>
        <label class="label" for="hotel">${storedBooking.hotel}</label>
      </div>
      <div class="input-container">
        <div class="icon">
          <i class="fas fa-calendar-check"></i>
          Check-in:
        </div>
        <label class="label" id="myDate1" for="checkin">${storedBooking.checkin}</label>
      </div>

      <div class="input-container">
        <div class="icon">
          <i class="fas fa-calendar-times"></i>
          Check-out:
        </div>
        <label class="label" id="myDate2" for="checkout">${storedBooking.checkout}</label>
      </div>

      <div class="input-container">
      <div class="icon">
        <i class="fa fa-users"></i>
        No. of days:
      </div>
      <label class="label"  id="result"  for="guests"> ${storedBooking.days_stay} </label>
    </div>

      <div class="input-container">
      <div class="icon">
        <i class="fa fa-users"></i>
        No. of guests:
      </div>
      <label class="label" for="guests">${storedBooking.rooms}</label>
    </div>

      <div class="input-container">
        <div class="icon">
          <i class="fa fa-bed"></i>
          No. of rooms:
        </div>
        <label class="label" for="rooms">${storedBooking.guests}</label>
      </div>

     

      <div class="input-container">
        <div class="icon">
          <i class="fas fa-money-bill-alt"></i>
          Price p/n:
        </div>
        <label class="label" for="cost-pn">${storedBooking.price}</label>
      </div>

      <div class="input-container">
      <div class="icon">
        <i class="fas fa-money-bill-alt"></i>
        Total cost:
      </div>
      <label class="label" for="cost">
      R ${storedBooking.total_cost}.00
      
      </label>
    </div>
    </form>


      <button type="submit" class="btn">Confirm</button>
      <button  class="btn"><a href="booking.html?hotelID=${storedBooking.hotel_id}">Edit Booking</a></button>
  `;
}
