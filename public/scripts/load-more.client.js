const list = document.getElementById('blog-list');
if (list) {
  const items = Array.from(list.children);
  const INITIAL = 5;
  let revealed = INITIAL;
  let revealing = false;

  items.forEach((item, i) => {
    if (i >= INITIAL) item.style.display = 'none';
  });

  if (items.length > INITIAL) {
    const css = document.createElement('style');
    css.textContent =
      '.blog-item-enter{opacity:0;transform:translateY(28px)}' +
      '.blog-item-reveal{opacity:1;transform:none;transition:opacity .55s ease,transform .55s ease}' +
      '@keyframes blog-dots{0%,100%{opacity:.2}50%{opacity:1}}' +
      '.blog-loading{text-align:center;padding:1.5rem 0;color:#bbb;letter-spacing:.4em;font-size:1.1rem;animation:blog-dots 1.4s ease-in-out infinite}';
    document.head.appendChild(css);

    const loader = document.createElement('div');
    loader.className = 'blog-loading';
    loader.textContent = '···';
    list.after(loader);

    const sentinel = document.createElement('div');
    loader.after(sentinel);

    function revealOne() {
      if (revealed >= items.length) {
        loader.remove();
        sentinel.remove();
        observer.disconnect();
        return;
      }
      revealing = true;
      const item = items[revealed++];
      item.classList.add('blog-item-enter');
      item.style.display = '';
      item.getBoundingClientRect(); // force reflow so initial state is registered
      requestAnimationFrame(() => {
        item.classList.add('blog-item-reveal');
        setTimeout(() => { item.classList.remove('blog-item-enter', 'blog-item-reveal'); }, 600);
        setTimeout(() => {
          revealing = false;
          if (sentinel.getBoundingClientRect().top < window.innerHeight + 200) revealOne();
        }, 220);
      });
    }

    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !revealing) revealOne();
    }, { rootMargin: '0px 0px 200px 0px' });

    observer.observe(sentinel);
  }
}
