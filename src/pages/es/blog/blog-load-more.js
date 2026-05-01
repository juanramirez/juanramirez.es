let currentCount = 5;

function renderPosts(posts) {
  const list = document.getElementById('blog-list');
  list.innerHTML = '';
  posts.slice(0, currentCount).forEach(post => {
    const li = document.createElement('li');
    li.className = 'space-y-3 border-b border-ink/10 pb-6';
    li.innerHTML = post.html;
    list.appendChild(li);
  });
}

function onScroll(posts) {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 2) {
    if (currentCount < posts.length) {
      currentCount += 5;
      renderPosts(posts);
    }
  }
}

export function setupLoadMore(posts) {
  renderPosts(posts);
  window.addEventListener('scroll', () => onScroll(posts));
}
