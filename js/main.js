function openNav() {
  var opennav = document.getElementById("mySidenav");
  if (opennav) {
      opennav.classList.toggle("active");
  }
  document.body.classList.toggle("stop");
  var element = document.getElementById("sidebody");
  if (element) {
      element.classList.toggle("active");
  }
}

function toggleDropdown(id, parentClass) {
  // البحث عن جميع القوائم الكبيرة في القائمة الرئيسية
  var parentElement = document.querySelector(parentClass);
  var allDropdowns = parentElement ? parentElement.querySelectorAll('.dropdown-menu') : [];

  // إغلاق جميع القوائم الكبيرة والقوائم الفرعية
  allDropdowns.forEach(function(dropdown) {
      if (dropdown.id !== id) {
          dropdown.classList.remove('show');
      }
  });

  // التبديل لحالة القائمة المطلوبة
  var element = document.getElementById(id);
  if (element) {
      element.classList.toggle('show');
  }
  
  // إغلاق جميع القوائم الفرعية داخل القائمة الكبيرة التي يتم فتحها
  if (element && element.classList.contains('show')) {
      var subDropdowns = element.querySelectorAll('.dropdown-menu');
      subDropdowns.forEach(function(subDropdown) {
          subDropdown.classList.remove('show');
      });
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

var countDownDate = new Date("August 6, 2024 00:00:00").getTime();

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
  var daysElement = document.getElementById("days");
  var hoursElement = document.getElementById("hours");
  var minutesElement = document.getElementById("minutes");
  var secondsElement = document.getElementById("seconds");

  if (daysElement && hoursElement && minutesElement && secondsElement) {
    daysElement.innerHTML = days;
    hoursElement.innerHTML = hours;
    minutesElement.innerHTML = minutes;
    secondsElement.innerHTML = seconds;
  }

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    if (daysElement) daysElement.innerHTML = "0";
    if (hoursElement) hoursElement.innerHTML = "0";
    if (minutesElement) minutesElement.innerHTML = "0";
    if (secondsElement) secondsElement.innerHTML = "0";
  }
}, 1000);

function openDetails() {
  window.location.href = '/shop-details.html';
}

// function incrementValue() {
//   let quantity = document.getElementById('quantity');
//   if (quantity) {
//     let currentValue = parseInt(quantity.value);
//     quantity.value = currentValue + 1;
//   }
// }

// function decrementValue() {
//   let quantity = document.getElementById('quantity');
//   if (quantity) {
//     let currentValue = parseInt(quantity.value);
//     if (currentValue > 1) {
//       quantity.value = currentValue - 1;
//     }
//   }
// }

new WOW().init();

document.addEventListener('DOMContentLoaded', function() {
  const lowerRange = document.getElementById('lower');
  const upperRange = document.getElementById('upper');
  const one = document.getElementById('one');
  const two = document.getElementById('two');

  // Set initial values if elements exist
  if (lowerRange && upperRange && one && two) {
    one.value = lowerRange.value;
    two.value = upperRange.value;

    // Update text fields when range inputs change
    lowerRange.addEventListener('input', function() {
      one.value = lowerRange.value;
    });

    upperRange.addEventListener('input', function() {
      two.value = upperRange.value;
    });
  }
});


let scrollBtn = document.getElementById('scrollTopBtn')

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollBtn.style.display = "flex";
  } else {
    scrollBtn.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function incrementValue() {
  var value = parseInt(document.getElementById('quantity').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('quantity').value = value;
}

function decrementValue() {
  var value = parseInt(document.getElementById('quantity').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('quantity').value = value;
}

$(document).ready(function(){
  $('.product-carousel').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 4,
    dots: true,
    arrows: true,
    nextArrow: '',
    prevArrow: '',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  });
});

$(document).ready(function () {
  // Initialize Zooming for the image in the currently active tab
  $('.zoomable-image').each(function() {
    $(this).zoom({
      url: $(this).attr('src'),  // Source of the zoomed image
      scale: 1.5,               // Zoom scale
    });
  });

  // Handle tab change events
  $('a[data-bs-toggle="pill"]').on('shown.bs.tab', function (e) {
    var target = $(e.target).attr("data-bs-target");
    var $activeImage = $(target).find('img');

    // Remove previous zoom instance
    $('.zoomable-image').each(function() {
      $(this).zoom('destroy');
    });

    // Reinitialize zoom for the new image
    if ($activeImage.length > 0) {
      $activeImage.zoom({
        url: $activeImage.attr('src'),
        scale: 1.5,
      });
    }
  });
});

// Function to increment quantity
function incrementValue() {
  var value = parseInt(document.getElementById('quantity').value, 10);
  value = isNaN(value) ? 1 : value;
  value++;
  document.getElementById('quantity').value = value;
}

// Function to decrement quantity
function decrementValue() {
  var value = parseInt(document.getElementById('quantity').value, 10);
  value = isNaN(value) ? 1 : value;
  if (value > 1) {
    value--;
    document.getElementById('quantity').value = value;
  }
}