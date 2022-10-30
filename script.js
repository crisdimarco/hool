document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".bio_avatar").forEach((trigger) => {
    trigger.addEventListener("mouseover", function () {
      document
        .querySelectorAll(".bio_avatar")
        .forEach((target) => target.classList.add("zoom"));
    });
  });

  document.querySelectorAll(".bio_avatar").forEach((trigger) => {
    trigger.addEventListener("mouseout", function () {
      document
        .querySelectorAll(".bio_avatar")
        .forEach((target) => target.classList.remove("zoom"));
    });
  });
});
