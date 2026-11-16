let target = null;

document.addEventListener(
  "contextmenu",
  (e) => {
    target = e.composedPath()[0] || e.target;
  },
  true
);

chrome.runtime.onMessage.addListener((msg) => {
  if (msg !== "fuckit" || !target) return;
  target.remove();
  target = null;
});
