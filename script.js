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

/* ===================== PROJECTS SECTION (redesigned) — filter + expand logic ===================== */
(function(){
  document.querySelectorAll('.proj-more').forEach(function(btn){
    btn.addEventListener('click', function(){
      btn.closest('.proj-card').classList.toggle('open');
    });
  });

  var filterBtns = document.querySelectorAll('.proj-filter');
  var cards = document.querySelectorAll('.proj-card');
  filterBtns.forEach(function(btn){
    btn.addEventListener('click', function(){
      filterBtns.forEach(function(b){ b.classList.remove('active'); });
      btn.classList.add('active');
      var filter = btn.dataset.filter;
      cards.forEach(function(card){
        var match = filter === 'all' || card.dataset.cat === filter;
        card.dataset.hidden = match ? "false" : "true";
      });
    });
  });
})();
