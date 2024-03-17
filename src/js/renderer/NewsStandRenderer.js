import renderNewsTitles from "./NewsTitleRenderer.js";
import activateGridView from "./PressTableRenderer.js";

const WEEK = [
  "일요일",
  "월요일",
  "화요일",
  "수요일",
  "목요일",
  "금요일",
  "토요일",
];
const INCREMENT = 1;
const CHAR_COUNT = 2;
const ROLLING_DELAY = 5000;

const rollingContainer = document.querySelector(".rolling-container");
const pageLogoIcon = document.querySelector(".top-container__icon");

let rollNewsInInterval = null;

const animateRolling = () => {
  if (rollNewsInInterval !== null) {
    clearInterval(rollNewsInInterval);
    rollNewsInInterval = null;
  }
  rollNewsInInterval = setInterval(renderNewsTitles, ROLLING_DELAY);
};

const stopRollingAnimation = () => clearInterval(rollNewsInInterval);

const pageReload = () => location.reload();

const renderCurrentDate = () => {
  const currentDateTag = document.querySelector(".top-container__date-text");
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + INCREMENT;
  const date = currentDate.getDate();
  const day = WEEK[currentDate.getDay()];

  currentDateTag.innerHTML = `${year}. ${month
    .toString()
    .padStart(CHAR_COUNT, "0")}. ${date
    .toString()
    .padStart(CHAR_COUNT, "0")}. ${day}`;
};

export const renderIndex = () => {
  renderCurrentDate();
  renderNewsTitles();
  activateGridView();
  animateRolling();
};

pageLogoIcon.addEventListener("click", pageReload);
rollingContainer.addEventListener("mouseover", stopRollingAnimation);
rollingContainer.addEventListener("mouseout", animateRolling);
