// Image slider
var counter = 1;

setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;

    if(counter > 4){
        counter = 1;
    }
}, 5000);

// Show active menu when scrolling
const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#h-page');
    const aboutMenu = document.querySelector('#a-page');
    const servicesMenu = document.querySelector('#s-page');
    const teamMenu = document.querySelector('#t-page');
    const benMenu = document.querySelector('#b-page');
    const tesMenu = document.querySelector('#tes-page');
    const conMenu = document.querySelector('#c-page');
    let scrollPos = window.scrollY;
    // console.log(scrollPos);
  
    // adds 'highlight' class to my menu items
    if (window.innerWidth > 960 && scrollPos < 300) {
      homeMenu.classList.add('highlight');
      aboutMenu.classList.remove('highlight');
      return;
    } else if (window.innerWidth > 960 && scrollPos < 430) {
      aboutMenu.classList.add('highlight');
      homeMenu.classList.remove('highlight');
      servicesMenu.classList.remove('highlight');
      teamMenu.classList.remove('highlight');
      return;
    } else if (window.innerWidth > 960 && scrollPos < 2000) {
      servicesMenu.classList.add('highlight');
      teamMenu.classList.remove('highlight');
      aboutMenu.classList.remove('highlight');
      return;
    } else if (window.innerWidth > 960 && scrollPos < 2600) {
        teamMenu.classList.add('highlight');
        servicesMenu.classList.remove('highlight');
        aboutMenu.classList.remove('highlight');
        benMenu.classList.remove('highlight');
        return;
      } else if (window.innerWidth > 960 && scrollPos < 3300) {
        benMenu.classList.add('highlight');
        teamMenu.classList.remove('highlight');
          servicesMenu.classList.remove('highlight');
          aboutMenu.classList.remove('highlight');
          return;
        }else if (window.innerWidth > 960 && scrollPos < 5000) {
          teamMenu.classList.add('highlight');
          servicesMenu.classList.remove('highlight');
          aboutMenu.classList.remove('highlight');
          return;
        }else if (window.innerWidth > 960 && scrollPos < 5000) {
          teamMenu.classList.add('highlight');
          servicesMenu.classList.remove('highlight');
          aboutMenu.classList.remove('highlight');
          return;}
  
    if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
      elem.classList.remove('highlight');
    }
  };
  window.addEventListener('scroll', highlightMenu);
  window.addEventListener('click', highlightMenu);

// Faqs
const accor = document.querySelectorAll(".accordion-item-header");

accor.forEach(accorItems => {
    accorItems.addEventListener("click", event => {
        const current = document.querySelector(".accordion-item-header.active");
        if(current && current !== accorItems){
             current.classList.toggle("active");
             current.nextElementSibling.style.maxHeight = 0;
        }

        accorItems.classList.toggle("active");
        const accorbody = accorItems.nextElementSibling;
        if(accorItems.classList.contains("active")){
            accorbody.style.maxHeight = accorbody.scrollHeight + "px"
        }else{
            accorbody.style.maxHeight = 0;
        }
    });
});

// navbar
const menuToggle = document.querySelector('.menu-toggler input');
const nav = document.querySelector('header .navbar');

menuToggle.addEventListener('click', function(){
    nav.classList.toggle('slide');
});
