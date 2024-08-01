const menuBtn = document.querySelector(".header__menu-btn");
const menu = document.querySelector(".header__menu");
const code = document.querySelector(".token__code");
const tooltip = document.querySelector(".tooltip");
const slider = document.querySelector(".roadmap__schedule");

// открыть/закрыть меню
menuBtn.addEventListener("click", () => {
  menu.classList.toggle("visible");
  menuBtn.classList.toggle("close");
  document.body.classList.toggle("scroll-off");
});

// закрытие меню при нажатии на ссылку
document.querySelectorAll(".menu__link").forEach((link) =>
  link.addEventListener("click", () => {
    menu.classList.remove("visible");
    menuBtn.classList.remove("close");
    document.body.classList.remove("scroll-off");
  })
);

// копирование кода в буфер обмена
document.querySelector(".token__copy").addEventListener("click", () => {
  navigator.clipboard.writeText(code.innerText);
  tooltip.classList.add("visible");
  setTimeout(() => tooltip.classList.remove("visible"), 600);
});

// roadmap slider
let step = 1;
let offset = 0;
const gap = +window.getComputedStyle(slider).gap.replaceAll(/[a-z]/g, "");

document.querySelector("#prev").addEventListener("click", () => {
  if (offset == 0) return;

  offset -= slider.firstElementChild.offsetWidth + gap;

  slider.classList.remove("move");
  slider.style.translate = `-${offset}px 0`;
  setTimeout(() => slider.classList.add("move"));

  step -= 1;
});

document.querySelector("#next").addEventListener("click", () => {
  if (step >= slider.childElementCount) return;

  offset += slider.firstElementChild.offsetWidth + gap;

  slider.classList.remove("move");
  slider.style.translate = `-${offset}px 0`;
  setTimeout(() => slider.classList.add("move"));

  step += 1;
});

window.addEventListener("resize", () => {
  if (offset == 0) return;

  offset = (slider.firstElementChild.offsetWidth + gap) * (step - 1);
  slider.classList.remove("move");
  slider.style.translate = `-${offset}px 0`;
  slider.classList.add("move");
});
