
// Cursor
var cursorDot = document.getElementById('cursor-dot');
if (cursorDot) {
  document.addEventListener('mousemove', function(e){
    cursorDot.style.left = e.clientX + 'px';
    cursorDot.style.top = e.clientY + 'px';
  });
  document.querySelectorAll('a, button, .sheet, .basket, .gallery figure').forEach(function(el){
    el.addEventListener('mouseenter', function(){ cursorDot.classList.add('grow'); });
    el.addEventListener('mouseleave', function(){ cursorDot.classList.remove('grow'); });
  });
}

// Coursework toggle
var courseToggle = document.getElementById('courseToggle');
if (courseToggle) {
  courseToggle.addEventListener('click', function(){
    var list = document.getElementById('courseList');
    var open = list.classList.toggle('open');
    this.textContent = open ? '− Hide relevant coursework' : '+ Show relevant coursework';
  });
}

// Landing typewriter
(function(){
  var intro = document.querySelector('.welcome-intro');
  if (!intro) return;
  var fullText = intro.textContent.replace(/\s+/g, ' ').trim();
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) return;
  intro.textContent = '';
  intro.classList.add('typing');
  var i = 0;
  function typeNext(){
    if (i < fullText.length) {
      intro.textContent += fullText.charAt(i++);
      var delay = fullText.charAt(i - 1) === ' ' ? 26 : 16;
      setTimeout(typeNext, delay);
    } else {
      setTimeout(function(){ intro.classList.remove('typing'); }, 1300);
    }
  }
  setTimeout(typeNext, 650);
})();

// About image slider
(function(){
  var slider = document.querySelector('.about-slider');
  if (!slider) return;
  var slides = Array.prototype.slice.call(slider.querySelectorAll('.about-slide'));
  var dots = Array.prototype.slice.call(slider.querySelectorAll('.slider-dot'));
  var prev = slider.querySelector('.slider-prev');
  var next = slider.querySelector('.slider-next');
  if (!slides.length) return;
  var index = 0;
  var timer;
  function show(n){
    index = (n + slides.length) % slides.length;
    slides.forEach(function(slide, i){ slide.classList.toggle('active', i === index); });
    dots.forEach(function(dot, i){ dot.classList.toggle('active', i === index); });
  }
  function restart(){
    clearInterval(timer);
    timer = setInterval(function(){ show(index + 1); }, 5200);
  }
  if (prev) prev.addEventListener('click', function(){ show(index - 1); restart(); });
  if (next) next.addEventListener('click', function(){ show(index + 1); restart(); });
  dots.forEach(function(dot, i){ dot.addEventListener('click', function(){ show(i); restart(); }); });
  slider.addEventListener('mouseenter', function(){ clearInterval(timer); });
  slider.addEventListener('mouseleave', restart);
  restart();
})();

// Scroll reveal
(function(){
  var targets = document.querySelectorAll('section:not(.welcome-screen) .wrap > *, .sheet, .basket');
  targets.forEach(function(el){ el.classList.add('reveal-on-scroll'); });
  if (!('IntersectionObserver' in window)) {
    targets.forEach(function(el){ el.classList.add('is-visible'); });
    return;
  }
  var observer = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {threshold: 0.08});
  targets.forEach(function(el){ observer.observe(el); });
})();
