/**
 * 小芽官网交互脚本
 * - 滚动进场动画（.reveal → .in）
 * - 文档目录跟随高亮（.toc-link）
 */

// ---- 进场动画：进入视口时淡入上移 ----
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
  );
  revealEls.forEach((el) => io.observe(el));
} else {
  // 老浏览器兜底：直接全部显示
  revealEls.forEach((el) => el.classList.add('in'));
}

// ---- 文档目录高亮：当前阅读章节对应的目录项加亮 ----
const tocLinks = Array.from(document.querySelectorAll('.toc-link'));
const docCards = tocLinks
  .map((a) => document.querySelector(a.getAttribute('href')))
  .filter((el) => el !== null);

if (tocLinks.length && docCards.length && 'IntersectionObserver' in window) {
  const setActive = (id) => {
    tocLinks.forEach((a) =>
      a.classList.toggle('active', a.getAttribute('href') === `#${id}`),
    );
  };
  const tracker = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) setActive(entry.target.id);
      }
    },
    { rootMargin: '-30% 0px -60% 0px' },
  );
  docCards.forEach((el) => tracker.observe(el));
}
