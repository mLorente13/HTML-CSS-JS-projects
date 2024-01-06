const panels = document.getElementsByClassName("panel");
let panelsArr = Array.from(panels);

panelsArr.forEach((element) => {
  element.addEventListener("click", () => {
    for (i = 0; i < panelsArr.length; i++) {
      if (panelsArr[i].classList.contains("active")) {
        panelsArr[i].classList.remove("active");
        break;
      }
    }
    if (!element.classList.contains("active")) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });
});
