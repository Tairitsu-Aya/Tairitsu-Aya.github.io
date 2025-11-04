// Theme toggle
(function(){
  var btn;
  function setIcon(theme){
    if(!btn) return;
    btn.textContent = theme === 'dark' ? '☀️' : '🌙';
    btn.title = theme === 'dark' ? '切换至日间模式' : '切换至夜间模式';
  }
  function apply(theme){
    document.documentElement.setAttribute('data-theme', theme);
    try{ localStorage.setItem('pl-theme', theme); }catch(e){}
    setIcon(theme);
  }
  document.addEventListener('DOMContentLoaded', function(){
    btn = document.getElementById('theme-toggle');
    if(!btn) return;
    var current = document.documentElement.getAttribute('data-theme') || 'light';
    setIcon(current);
    btn.addEventListener('click', function(){
      var now = document.documentElement.getAttribute('data-theme') || 'light';
      apply(now === 'light' ? 'dark' : 'light');
    });
  });
})();

// Light hover ripple for links (reduced-motion respected)
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.addEventListener('click', (e)=>{
    const a = e.target.closest('a');
    if(!a) return;
    a.classList.add('clicked');
    setTimeout(()=>a.classList.remove('clicked'), 300);
  });
}
