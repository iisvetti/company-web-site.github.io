document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".animate-on-scroll");

  elements.forEach((element, index) => {
    setTimeout(() => {
      element.classList.add("visible");
    }, index * 300);
  });
});
