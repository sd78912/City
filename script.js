document.querySelectorAll(".nav__link").forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.preventDefault();

    const id = this.getAttribute("href");
    // console.log(id);

    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  });
});
