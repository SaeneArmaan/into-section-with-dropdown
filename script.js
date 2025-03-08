const featureLi = document.querySelector(".featuresDrop");
const companyLi = document.querySelector(".companyDrop");
const featuresMb = document.querySelector(".menubar_options_features");
const companyMb = document.querySelector(".menubar_options_company");

const overlay = document.querySelector(".overlay");
const menuBar = document.querySelector(".menuBar");

const menuBtn = document.querySelector(".menuBtn");
const menuCloseBtn = document.querySelector(".menuCloseBtn");

menuBtn.addEventListener("click", () => {
  overlay.style.right = "100%";
  menuBar.style.right = "100%";

  overlay.classList.add("slideIn");
  menuBar.classList.add("slideIn");

  overlay.classList.remove("slideOut");
  menuBar.classList.remove("slideOut");
});

menuCloseBtn.addEventListener("click", () => {
  overlay.style.right = "0%";
  menuBar.style.right = "0%";

  overlay.classList.add("slideOut");
  menuBar.classList.add("slideOut");

  overlay.classList.remove("slideIn");
  menuBar.classList.remove("slideIn");
});

featureLi.addEventListener("click", (event) => {
  const dropdown = event.target.parentElement.querySelector("ul");
  const icon = event.target.parentElement.querySelector("svg");

  event.target.classList.toggle("active");
  dropdown.classList.toggle("hidden");

  if (event.target.classList.contains("active")) {
    icon.style.animation = "rotateStart 0.2s ease-in forwards";
  } else {
    icon.style.animation = "rotateStop 0.2s ease-in forwards";
  }
});

companyLi.addEventListener("click", (event) => {
  const dropdown = event.target.parentElement.querySelector("ul");
  const icon = event.target.parentElement.querySelector("svg");

  event.target.classList.toggle("active");
  dropdown.classList.toggle("hidden");

  if (event.target.classList.contains("active")) {
    icon.style.animation = "rotateStart 0.2s ease-in forwards";
  } else {
    icon.style.animation = "rotateStop 0.2s ease-in forwards";
  }
});

featuresMb.addEventListener("click", () => {
  const arrow = featuresMb.querySelector(
    ".menubar_options_features div > img  "
  );
  const span = featuresMb.querySelector(".menubar_options_features div > span");
  const dropdown = featuresMb.querySelector(".menubar_features");

  span.classList.toggle("active");
  dropdown.classList.toggle("hidden_menubar");

  if (span.classList.contains("active")) {
    arrow.style.animation = "rotateStart 0.2s ease-in forwards";
  } else {
    arrow.style.animation = "rotateStop 0.2s ease-in forwards";
  }
});

companyMb.addEventListener("click", () => {
  const arrow = companyMb.querySelector(".menubar_options_company div > img  ");
  const span = companyMb.querySelector(".menubar_options_company div > span");
  const dropdown = companyMb.querySelector(".menubar_features");

  span.classList.toggle("active");
  dropdown.classList.toggle("hidden_menubar");

  if (span.classList.contains("active")) {
    arrow.style.animation = "rotateStart 0.2s ease-in forwards";
  } else {
    arrow.style.animation = "rotateStop 0.2s ease-in forwards";
  }
});
