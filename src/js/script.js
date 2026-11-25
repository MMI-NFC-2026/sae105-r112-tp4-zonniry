const accordeon = document.querySelector(".accordeon");
const detailsList = accordeon.querySelectorAll("details");

detailsList.forEach((details) => {
  const summary = details.querySelector("summary");

  summary.addEventListener("click", () => {
    detailsList.forEach((otherDetails) => {
      if (otherDetails !== details) {
        otherDetails.open = false;
      }
    });
  });
});
