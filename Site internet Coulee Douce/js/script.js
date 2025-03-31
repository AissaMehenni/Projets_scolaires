document.addEventListener('DOMContentLoaded', function() 
{
  const counters = [
      { id: 'counter1', end: 150 },
      { id: 'counter2', end: 200 },
      { id: 'counter3', end: 50 }
  ];

  counters.forEach(counter => {
      let count = 0;
      const interval = setInterval(() => {
          document.getElementById(counter.id).innerText = count;
          if (count >= counter.end) {
              clearInterval(interval);
          }
          count++;
      }, 20);
  });

  const sliderInner = document.querySelector('.action-slider-inner');
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');
  let currentIndex = 0;

  function updateSlider() {
      const width = sliderInner.children[0].offsetWidth;
      sliderInner.style.transform = `translateX(-${currentIndex * width}px)`;
  }

  prevButton.addEventListener('click', () => {
      if (currentIndex > 0) {
          currentIndex--;
      } else {
          currentIndex = sliderInner.children.length - 1;
      }
      updateSlider();
  });

  nextButton.addEventListener('click', () => {
      if (currentIndex < sliderInner.children.length - 1) {
          currentIndex++;
      } else {
          currentIndex = 0;
      }
      updateSlider();
  });

  window.addEventListener('resize', updateSlider);
});

document.getElementById('joinForm').addEventListener('submit', function(event) {
  const email = document.getElementById('joinEmail').value;
  const emailError = document.getElementById('joinEmailError');
  if (!validateEmail(email)) {
      emailError.classList.remove('hidden');
      event.preventDefault();
  } else {
      emailError.classList.add('hidden');
  }
});

document.getElementById('donateForm').addEventListener('submit', function(event) {
  const email = document.getElementById('donateEmail').value;
  const emailError = document.getElementById('donateEmailError');
  if (!validateEmail(email)) {
      emailError.classList.remove('hidden');
      event.preventDefault();
  } else {
      emailError.classList.add('hidden');
  }
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

// Initialize and add the map
function initMap() {
  const france = { lat: 46.603354, lng: 1.888334 };
  const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 6,
      center: france,
  });

  const centers = [
      { name: "Centre Paris", location: { lat: 48.8566, lng: 2.3522 } },
      { name: "Centre Lyon", location: { lat: 45.7640, lng: 4.8357 } },
      { name: "Centre Marseille", location: { lat: 43.2965, lng: 5.3698 } },
      { name: "Centre Toulouse", location: { lat: 43.6047, lng: 1.4442 } },
      { name: "Centre Nice", location: { lat: 43.7102, lng: 7.2620 } },
  ];

  centers.forEach(center => {
      new google.maps.Marker({
          position: center.location,
          map: map,
          title: center.name,
      });

      const option = document.createElement("option");
      option.value = center.name;
      option.text = center.name;
      document.getElementById("centre").appendChild(option);
  });
}

// Load the Google Maps API script
function loadScript(src) {
  const script = document.createElement('script');
  script.src = src;
  script.async = true;
  document.head.appendChild(script);
}

loadScript(`https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`);

document.addEventListener('DOMContentLoaded', function() {
  const sliderInner = document.querySelector('.shirt-slider-inner');
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');
  let currentIndex = 0;

  function updateSlider() {
      const width = sliderInner.children[0].offsetWidth;
      sliderInner.style.transform = `translateX(-${currentIndex * width}px)`;
  }

  prevButton.addEventListener('click', () => {
      if (currentIndex > 0) {
          currentIndex--;
      } else {
          currentIndex = sliderInner.children.length - 1;
      }
      updateSlider();
  });

  nextButton.addEventListener('click', () => {
      if (currentIndex < sliderInner.children.length - 1) {
          currentIndex++;
      } else {
          currentIndex = 0;
      }
      updateSlider();
  });

  window.addEventListener('resize', updateSlider);
});

function toggleMenu() {
  const nav = document.querySelector('.site-nav');
  nav.classList.toggle('active');
}

// responsive

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".site-nav ul");

  // Toggle la classe `menu-open` sur clic du menu burger
  hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("menu-open");
  });
});