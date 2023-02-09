import { musicLists } from "./data.js";

// filter lists by type
function filterListsByType(type) {
  const filterLists = musicLists.filter((list) => {
    return list.listType === type;
  });
  return filterLists;
}

// map filtered lists by type
function mapDefinedList(lists) {
  const mapList = lists.map((list) => {
    return displayLists(list.imgURL, list.title, list.description);
  });
  return mapList;
}

// template to display
function displayLists(image, title, description) {
  return `
        <div class="card">
            <div class="img__container">
                <img src="${image}" alt="${title}" loading="lazy">
            </div>
            <div class="card__body">
              <h3 class="title">${title}</h3>
              <p class="description">${description}</p>
            </div>
        </div>
    `;
}

function closeSideBar() {
  sidebar.classList.remove("active");
}

function closeSidebarOnClickOutside(e) {
  if (
    !e.target.classList.contains("btn__menu") &&
    !e.target.classList.contains("fa-bars")
  ) {
    if (!sidebar.contains(e.target)) {
      closeSideBar();
    }
  }
}

const btnMenu = document.querySelector(".btn__menu");
const sidebar = document.querySelector(".sidebar");
const elementFocusLists = document.querySelector("#focus__lists");
const elementPlayLists = document.querySelector("#play__lists");
const elementSleepLists = document.querySelector("#sleep__lists");

document.addEventListener("click", closeSidebarOnClickOutside);

btnMenu.addEventListener("click", () => {
  sidebar.classList.add("active");
});

const focusLists = filterListsByType("focus");
const playLists = filterListsByType("play");
const sleepLists = filterListsByType("sleep");

const displayFocusLists = mapDefinedList(focusLists);
const displayPlayLists = mapDefinedList(playLists);
const displaySleepLists = mapDefinedList(sleepLists);

elementFocusLists.innerHTML = displayFocusLists.join("");
elementPlayLists.innerHTML = displayPlayLists.join("");
elementSleepLists.innerHTML = displaySleepLists.join("");
