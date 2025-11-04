// Light hover ripple for links (reduced-motion respected)
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.addEventListener('click', (e)=>{
    const a = e.target.closest('a');
    if(!a) return;
    a.classList.add('clicked');
    setTimeout(()=>a.classList.remove('clicked'), 300);
  });
}
