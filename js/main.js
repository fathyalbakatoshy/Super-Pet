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
