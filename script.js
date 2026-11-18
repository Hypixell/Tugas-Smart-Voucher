"use strict";

// Tombol kembali ke atas muncul setelah halaman digulir.
const backTopButton = document.getElementById("backTop");
window.addEventListener("scroll", function () {
  backTopButton.classList.toggle("visible", window.scrollY > 350);
});
backTopButton.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
