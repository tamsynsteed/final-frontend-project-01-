var slideIndex = 1;

function daysDifference() {
  //define two variables and fetch the input from HTML form
  var dateI1 = document.getElementById("dateInput1").value;
  var dateI2 = document.getElementById("dateInput2").value;

  //define two date object variables to store the date values
  var date1 = new Date(dateI1);
  var date2 = new Date(dateI2);

  //calculate time difference
  var time_difference = date2.getTime() - date1.getTime();

  //calculate days difference by dividing total milliseconds in a day
  var result = time_difference / (1000 * 60 * 60 * 24);

  return (document.getElementById("result").innerHTML = result);
}

// const params = new URLSearchParams(window.location.search);

// Get elements to change
const blogPost = document.getElementById("hotel-item");

if (params.has("hotelID")) {
  fetch(`https://blooming-fjord-31092.herokuapp.com/show-hotel-item/${params.get("hotelID")}`)
    .then((response) => response.json())
    .then((hotel) => {
      console.log(hotel);
      blogPost.innerHTML = ` 
      
      <div class="div1">
       

     
<form onsubmit="event.preventDefault(); makeBooking()" id="booking-form">
      <div class="inputs">
        <p>
          <i class="fas fa-calendar-check"></i>
          Check-in:
          <input type="date" id="dateInput1" name="checkin" value="2021-03-15" />
        </p>
      </div>

      <div class="inputs">
        <p>
          <i class="fas fa-calendar-times"></i>
          Check-out:
          <input type="date" id="dateInput2" name="checkout" value="2021-03-18" />
        </p>
      </div>

      <div class="inputs">
        <p>
          <i class="fa fa-users"></i>
          No. of guests:
          <input type="number" id="guests" name="guests" value="guests" style="max-width: 5em;"/>
        </p>
      </div>

      <div class="inputs">
        <p>
          <i class="fa fa-bed"></i>
          No. of rooms:
          <input type="number" id="rooms" name="rooms" value="rooms" style="max-width: 5em;"/>
        </p>
      </div>

      <div class="labels">
      <p>
       
      
        <label type="text" id="result" name="days" value="days" style="max-width: 5em;"/></label>
      </p>
    </div>

    
      <button id="booking">Make Booking</button>
      
      
    </div>
    </form>



        <div class="div2">

        <div class="hotel_name"><h2 class=""> ${hotel.hotel_name} </h2></div>

            <div class="slideshow">
              <div class="mySlides fade">
                <div class="numbertext">1 / 3</div>
                <img src="${hotel.image1}" style="width: 60%" />
                
              </div>
        
              <div class="mySlides fade">
                <div class="numbertext">2 / 3</div>
                <img src="${hotel.image2}" style="width: 60%" />
                
              </div>
        
              <div class="mySlides fade">
                <div class="numbertext">3 / 3</div>
                <img src="${hotel.image3}" style="width: 60%" />
               
              </div>

              
        
              <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
              <a class="next" onclick="plusSlides(1)">&#10095;</a>
            </div>
            <br />
        
            
            <div class="decsription">
              <h2>R${hotel.price} per/night</h2>
             <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
              <p>
                
              ${hotel.description}<br><br>
              #${hotel.id}

           


              </p>

            </div>
          </div>


             

        

        </div>
          
      `;
      showSlides(slideIndex);
    });
} else {
  window.location.href = "./404.html";
}

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
