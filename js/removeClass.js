let windowWidth = window.innerWidth;
if (windowWidth < 800) {
  document.getElementById("carousel").classList.remove("carousel");
} else if (windowWidth > 800) {
  document.getElementById("carousel").classList.add("carousel");
}
window.addEventListener("resize", () => {
  const removeClass = function () {
    let windowWidth = window.innerWidth;
    if (windowWidth < 800) {
      document.getElementById("carousel").classList.remove("carousel");
    } else if (windowWidth > 800) {
      document.getElementById("carousel").classList.add("carousel");
    }
  };
  removeClass();
});
