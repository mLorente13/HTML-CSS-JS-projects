let arrows = document.querySelectorAll(".arrow");
arrows = Array.from(arrows);
const root = document.querySelector(":root");
let background = document.querySelector('.bg')
let sliderProgress = 0;

arrows.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    if (arrow.classList.contains("left") && sliderProgress > 0) {
      sliderProgress -= 50;
      root.style.setProperty("--sliderProgressWidth", `${sliderProgress}%`);
    } else if (arrow.classList.contains('right') && sliderProgress < 100){
      sliderProgress += 50;
      root.style.setProperty("--sliderProgressWidth", `${sliderProgress}%`);
    }
    if (sliderProgress === 0) {
        background.classList.remove('bg-2')
        background.classList.add('bg-1')
    } else if (sliderProgress === 50) {
        background.classList.remove('bg-1', 'bg-3')
        background.classList.add('bg-2')
    } else {
        background.classList.add('bg-3')
        background.classList.remove('bg-2')
    }
    })
  });
