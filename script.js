var cursorDot = document.getElementById('cursor-dot');
if (cursorDot) {
  document.addEventListener('mousemove', function(e){
    cursorDot.style.left = e.clientX + 'px';
    cursorDot.style.top = e.clientY + 'px';
  });
  document.querySelectorAll('a, button, .sheet, .gallery figure').forEach(function(el){
    el.addEventListener('mouseenter', function(){ cursorDot.classList.add('grow'); });
    el.addEventListener('mouseleave', function(){ cursorDot.classList.remove('grow'); });
  });
}

var courseToggle = document.getElementById('courseToggle');
if (courseToggle) {
  courseToggle.addEventListener('click', function(){
    var list = document.getElementById('courseList');
    var open = list.classList.toggle('open');
    this.textContent = open ? '− Hide relevant coursework' : '+ Show relevant coursework';
  });
}
