document.addEventListener("DOMContentLoaded", () => {
  const navButtons = document.querySelectorAll(".nav-item");
  const screens = document.querySelectorAll(".screen");
  const heartButtons = document.querySelectorAll(".heart-btn");

  navButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.dataset.target;

      navButtons.forEach((item) => item.classList.remove("active"));
      if (!button.classList.contains("camera-button")) {
        button.classList.add("active");
      }

      screens.forEach((screen) => {
        const isTarget = screen.dataset.screen === target;
        screen.classList.toggle("active", isTarget);
      });
    });
  });

  heartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      button.classList.toggle("liked");
      button.textContent = button.classList.contains("liked") ? "♥" : "♡";
    });
  });
});
