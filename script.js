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
\n\n/* Welcome screen subtle pointer parallax */\n(function(){var w=document.querySelector('.welcome-screen');if(!w||matchMedia('(hover:none)').matches)return;var a=w.querySelector('.welcome-orbit-a'),b=w.querySelector('.welcome-orbit-b'),g=w.querySelector('.welcome-grid');w.addEventListener('mousemove',function(e){var x=e.clientX/innerWidth-.5,y=e.clientY/innerHeight-.5;if(a)a.style.marginLeft=x*18+'px';if(a)a.style.marginTop=y*18+'px';if(b)b.style.marginLeft=x*-12+'px';if(b)b.style.marginTop=y*-12+'px';if(g)g.style.translate=x*7+'px '+y*7+'px'})})();\n