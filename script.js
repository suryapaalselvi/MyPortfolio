function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}



const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      if (entry.target.classList.contains('left')) {
        entry.target.classList.add('animate-left');
      } else {
        entry.target.classList.add('animate-right');
      }
    } else {
      entry.target.classList.remove('animate');
      entry.target.classList.remove('animate-left', 'animate-right');
    }
  });
}, {
  threshold: 0.1
});

const contentDivs = document.querySelectorAll('.content-ti');
contentDivs.forEach((div) => {
  observer.observe(div);
});