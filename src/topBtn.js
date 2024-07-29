// 탑 버튼
let topBtn = document.querySelector("#topBtn"),
  docElem = document.documentElement,
  offset,
  scrollPos,
  docHeight;

docHeight = Math.max(docElem.scrollHeight, docElem.offsetHeight);

if (docHeight != 0) {
  offset = docHeight / 4;
}

export let scrollStart = function () {
  scrollPos = docElem.scrollTop;
  topBtn.className = scrollPos > offset ? "visible" : "";
};

export let prvent = function (ev) {
  ev.preventDefault();
  scrollToTop();
};

function scrollToTop() {
  var scrollInterval = setInterval(function () {
    scrollPos = docElem.scrollTop;
    if (scrollPos != 0) {
      window.scrollBy(0, -55);
    } else {
      clearInterval(scrollInterval);
    }
  }, 15);
}
