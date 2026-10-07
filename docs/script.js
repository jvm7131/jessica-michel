document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("changeFlower")
    .addEventListener("click", function () {
      document.querySelectorAll("#flower ellipse").forEach(function (petal) {
        petal.style.fill = "hotpink";
      });
    });
});
