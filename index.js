const accordions = document.getElementsByClassName("accordion");

Array.from(accordions).forEach(accordion => {
  accordion.addEventListener("click", function() {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      Array.from(accordions).forEach(otherAccordion => {
        const otherPanel = otherAccordion.nextElementSibling;
        if (otherPanel !== panel) {
          otherPanel.style.maxHeight = null;
          otherAccordion.classList.remove("active");
        }
      });

      panel.style.maxHeight = panel.scrollHeight + "px";
      panel.scrollIntoView({ behavior: "smooth" });
    }
  });
});
