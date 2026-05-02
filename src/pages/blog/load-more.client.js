// Código ejecutado directamente al cargar el script (Astro client:load)

const list = document.getElementById('blog-list');
if (list) {
  const items = Array.from(list.children);
  let visibleCount = 5;

  function showItems() {
    items.forEach((item, idx) => {
      item.style.display = idx < visibleCount ? '' : 'none';
    });
  }

  function onScroll() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 2) {
      if (visibleCount < items.length) {
        visibleCount += 5;
        showItems();
      }
    }
  }

  showItems();
  window.addEventListener('scroll', onScroll);
}
