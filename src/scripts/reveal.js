// Reveal on scroll: adds .is-visible to [data-reveal] elements when they enter the viewport.
// Elements already in view on page load animate in right away (the "page enter" animation).

const STAGGER_MS = 90;

export function initReveal() {
  // Children of a [data-reveal-stagger] parent become reveal elements with increasing delay
  document.querySelectorAll("[data-reveal-stagger]").forEach((parent) => {
    [...parent.children].forEach((child, index) => {
      child.setAttribute("data-reveal", "");
      child.style.setProperty("--reveal-delay", `${index * STAGGER_MS}ms`);
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target); // animate only once
      });
    },
    { rootMargin: "0px 0px -10% 0px" } // start slightly before the element is fully in view
  );

  document.querySelectorAll("[data-reveal]").forEach((el) => observer.observe(el));
}
