const filterBtn = document.querySelectorAll(".filter-btn");

filterBtn.forEach(function (btn, index) {
  btn.addEventListener("click", (e) => {
    const value = e.currentTarget.textContent;

    const cards = document.querySelectorAll(".filter-item-img");

    cards.forEach(function (card, index) {
      const text = card.querySelector(".filter-text");

      if (value !== text.textContent && value !== "All") {
        return card.classList.add("hidden");
      } else {
        return card.classList.remove("hidden");
      }
    });
  });
});
