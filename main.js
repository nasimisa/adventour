'use strict';

// select elements
const navToggle = document.querySelector('.nav-toggle');
const toggleBars = document.querySelectorAll('.nav-toggle span');
const linksContainer = document.querySelector('.links-container');
const navLinks = document.querySelectorAll('.nav-link');

// toggle button function
function toggleEvent() {
  linksContainer.classList.toggle('show-links');
  toggleBars.forEach(span => span.classList.toggle('transform'));
}

navToggle.addEventListener('click', toggleEvent);

//to hide navbar when clicking on toggle menu link
navLinks.forEach(link => {
  link.addEventListener('click', toggleEvent);
});

// show/hide toplink
const topLink = document.querySelector('.top-link');
const insidePhone = document.querySelector('.inside-phone');

insidePhone.addEventListener('scroll', function () {
  const scrollHeight = insidePhone.scrollTop;

  if (scrollHeight > 500) {
    topLink.classList.add('show-toplink');
  } else {
    topLink.classList.remove('show-toplink');
  }
});

// set date
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();
