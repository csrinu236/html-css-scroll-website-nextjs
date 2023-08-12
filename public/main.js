// const date = document.getElementById('date');
// const navbar = document.querySelector('.navbar');
// const linksContainer = document.querySelector('.links-container');
// const links = document.querySelector('.links');
// const navBtn = document.querySelector('.nav-btn');
// const topBtn = document.querySelector('.top-btn');
// const scrollLinks = document.querySelectorAll('.scroll-link');
date.textContent = new Date().getFullYear();

navBtn.addEventListener('click', function () {
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

// let navbarHeight = navbar.getBoundingClientRect().height;
window.addEventListener('scroll', function () {
  const height = window.pageYOffset;
  if (height > navbarHeight) {
    navbar.classList.add('white-navbar');
  } else {
    navbar.classList.remove('white-navbar');
  }

  if (height > 600) {
    topBtn.classList.add('show-topbtn');
  } else {
    topBtn.classList.remove('show-topbtn');
  }
});

scrollLinks.forEach((link) => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const id = link.getAttribute('href').slice(1);
    const element = document.getElementById(id);
    let position = element.offsetTop;
    window.scrollTo({
      top: position - navbarHeight,
      left: 0,
    });
    console.log(position - navbarHeight);
    linksContainer.style.height = 0;
  });
});

topBtn.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    left: 0,
  });
});
