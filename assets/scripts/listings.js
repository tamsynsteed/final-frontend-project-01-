function getPosts() {
  // Get element to change
  let list = document.getElementById("hotel");

  // Fetch the data
  fetch("https://blooming-fjord-31092.herokuapp.com/view")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      json.forEach((hotel) => createBlogItem(hotel));
    });
}

function createBlogItem(hotel) {
  const item = `

 <div class="card" id="hotel-content">
    <a class="box" id="hotel-item"> 
    <img src="${hotel.image1}">
   
    <div class="content">
        <h2>
        ${hotel.hotel_name}<br>
       
        </h2>
        <p class="description">
        ${hotel.description}

           
        </p>
        
    </div>
</a>
<a href="booking.html?hotelID=${hotel.id}"><button class="booking-btn">Click to Book</button></a>


</div>


      `;
  let list = document.getElementById("hotel");
  console.log("Hello");
  list.innerHTML += item;
}

getPosts();
