document.addEventListener('DOMContentLoaded', function(){
  const tocEl = document.querySelector('#toc .toc-list');
  if(!tocEl) return;
  const content = document.querySelector('.post-content');
  if(!content) { document.getElementById('toc').style.display='none'; return; }

  const headings = content.querySelectorAll('h1, h2, h3');
  if(headings.length === 0) { document.getElementById('toc').style.display='none'; return; }

  let lastLevel = 0;
  const stack = [tocEl];

  headings.forEach(h => {
    const level = parseInt(h.tagName.substring(1), 10);

    if(!h.id){
      h.id = h.textContent.trim().toLowerCase().replace(/\s+/g,'-').replace(/[^\w\-]/g,'');
    }

    if(level > lastLevel){
      const ol = document.createElement('ol');
      stack[stack.length-1].appendChild(ol);
      stack.push(ol);
    }else if(level < lastLevel){
      while(stack.length > 1 && (lastLevel-- > level)){
        stack.pop();
      }
    }
    lastLevel = level;

    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = '#' + h.id;
    a.textContent = h.textContent;
    li.appendChild(a);
    stack[stack.length-1].appendChild(li);
  });
});
