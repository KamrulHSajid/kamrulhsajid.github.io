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


/* Welcome-screen pointer parallax */
(function(){
  var welcome=document.querySelector('.welcome-screen');
  if(!welcome || window.matchMedia('(hover:none)').matches) return;
  var orbitA=welcome.querySelector('.welcome-orbit-a'), orbitB=welcome.querySelector('.welcome-orbit-b'), grid=welcome.querySelector('.welcome-grid');
  welcome.addEventListener('mousemove',function(e){
    var x=e.clientX/window.innerWidth-.5, y=e.clientY/window.innerHeight-.5;
    if(orbitA) orbitA.style.marginLeft=(x*18)+'px';
    if(orbitA) orbitA.style.marginTop=(y*18)+'px';
    if(orbitB) orbitB.style.marginLeft=(x*-12)+'px';
    if(orbitB) orbitB.style.marginTop=(y*-12)+'px';
    if(grid) grid.style.transform='translate('+(x*8)+'px,'+(y*8)+'px)';
  });
})();
