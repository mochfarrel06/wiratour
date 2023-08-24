// Image slider
var counter = 1;

setInterval(function () {
  document.getElementById('radio' + counter).checked = true;
  counter++;

  if (counter > 4) {
    counter = 1;
  }
}, 2000);

// Faqs
const accor = document.querySelectorAll('.accordion-item-header');

accor.forEach((accorItems) => {
  accorItems.addEventListener('click', (event) => {
    const current = document.querySelector('.accordion-item-header.active');
    if (current && current !== accorItems) {
      current.classList.toggle('active');
      current.nextElementSibling.style.maxHeight = 0;
    }

    accorItems.classList.toggle('active');
    const accorbody = accorItems.nextElementSibling;
    if (accorItems.classList.contains('active')) {
      accorbody.style.maxHeight = accorbody.scrollHeight + 'px';
    } else {
      accorbody.style.maxHeight = 0;
    }
  });
});

// navbar
const menuToggle = document.getElementById('nav-toggle');
const nav = document.querySelector('header .navbar');

menuToggle.addEventListener('click', function () {
  nav.classList.toggle('slide');
});
