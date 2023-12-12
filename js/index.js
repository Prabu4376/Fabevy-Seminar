function makeTimer() {
    var endTime = new Date("17 Dec 2023 9:00:00 GMT+05:30");			
    endTime = (Date.parse(endTime) / 1000);

    var now = new Date();
    now = (Date.parse(now) / 1000);

    var timeLeft = endTime - now;

    var days = Math.floor(timeLeft / 86400); 
    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
    var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

    if (hours < "10") { hours = "0" + hours; }
    if (minutes < "10") { minutes = "0" + minutes; }
    if (seconds < "10") { seconds = "0" + seconds; }

    $(".days").html(days);
    $(".hours").html(hours);
    $(".minutes").html(minutes);
    $(".seconds").html(seconds);		
}

setInterval(function() { makeTimer(); }, 1000);

$('.client-logo').owlCarousel({
  loop: true,
  margin: 0,
  dots: false,
  nav: false,
smartSpeed:450,
  autoplay: true,
  navText: ["<i class='icofont icofont-thin-left'></i>", "<i class='icofont icofont-thin-right'></i>"],
  responsive: {
      0: {
          items: 1
      },
      600: {
          items: 2
      },
      768: {
        items: 2
        },
      992:{
        items: 3
      },
      1000: {
          items: 5
      }
  }
})

var myElement = document.getElementById('footer-sec');

// Function to add the class when scrolling
function addClassOnScroll() {
    // Check if the page has been scrolled
    if (window.scrollY > 100) {
      // Add the class to the element
      myElement.classList.add('scrolled');
    } else {
      // Remove the class if not scrolled
      myElement.classList.remove('scrolled');
    }
}

// Attach the function to the scroll event
window.onscroll = addClassOnScroll;