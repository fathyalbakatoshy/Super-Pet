function openNav() {
  var opennav = document.getElementById("mySidenav");
  opennav.classList.toggle("active");
  document.body.classList.toggle("stop");
  var element = document.getElementById("sidebody");
  if (element) {
      element.classList.toggle("active");
  }
}

document.addEventListener("keyup", function (event) {
  if (event.key === "Escape") {
      document.body.classList.remove("stop");
      var element = document.getElementById("sidebody");
      if (element) {
          element.classList.remove("active");
      }
      var opencart = document.getElementById("mySidenav");
      if (opencart) {
          opencart.classList.remove("active");
      }
  }
});


var countDownDate = new Date("august 6, 2024 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the elements with id
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("days").innerHTML = "0";
        document.getElementById("hours").innerHTML = "0";
        document.getElementById("minutes").innerHTML = "0";
        document.getElementById("seconds").innerHTML = "0";
    }
}, 1000);
