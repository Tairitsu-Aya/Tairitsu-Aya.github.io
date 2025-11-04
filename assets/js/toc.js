document.addEventListener('DOMContentLoaded', function(){
  const toc = document.querySelector('#toc .toc-list');
  if(!toc) return;

  // Collect headings in post content
  const content = document.querySelector('.post-content');
  if(!content) return;

  const headings = content.querySelectorAll('h1, h2, h3');
  if(headings.length === 0) { document.getElementById('toc').style.display='none'; return; }

  let lastLevel = 0;
  const stack = [toc];

  headings.forEach(h => {
    const level = parseInt(h.tagName.substring(1), 10);

    // Ensure an id for anchor
    if(!h.id){
      h.id = h.textContent.trim().toLowerCase().replace(/\s+/g,'-').replace(/[^\w\-]/g,'');
    }

    // Adjust list nesting
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
