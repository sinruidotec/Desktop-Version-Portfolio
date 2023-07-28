const MODAL_BOX = document.getElementById("modal__box_container");
const EXPERIENCE_GRID = document.querySelector(".grid__item-hidden");
const GRID_PROJECT = [
  {
    title: "1Profesional Art Printing Data",
    item_stack: ["Bootstrap", "HTML", "Ruby"],
    img: "Assets/Snapshoot Portfolio.svg",
    p_text:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    classes: "grid__item-1-4",
    x_button: "Assets/Icon - Cancel.svg",
  },
  {
    title: "2Profesional Art Printing Data",
    item_stack: ["Bootstrap", "HTML", "Ruby"],
    img: "Assets/Snapshoot Portfolio.svg",
    p_text:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    classes: "grid__item-2-5",
    x_button: "Assets/Icon - Cancel.svg",
  },
  {
    title: "3Profesional Art Printing Data",
    item_stack: ["Bootstrap", "HTML", "Ruby"],
    img: "Assets/Snapshoot Portfolio.svg",
    p_text:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    classes: "grid__item-3-6",
    x_button: "Assets/Icon - Cancel.svg",
  },
  {
    title: "4Profesional Art Printing Data",
    item_stack: ["Bootstrap", "HTML", "Ruby"],
    img: "Assets/Snapshoot Portfolio.svg",
    p_text:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    classes: "grid__item-1-4",
    x_button: "Assets/Icon - Cancel.svg",
  },
  {
    title: "5Profesional Art Printing Data",
    item_stack: ["Bootstrap", "HTML", "Ruby"],
    img: "Assets/Snapshoot Portfolio.svg",
    p_text:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    classes: "grid__item-2-5",
    x_button: "Assets/Icon - Cancel.svg",
  },
  {
    title: "6Profesional Art Printing Data",
    item_stack: ["Bootstrap", "HTML", "Ruby"],
    img: "Assets/Snapshoot Portfolio.svg",
    p_text:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    classes: "grid__item-3-6",
    x_button: "Assets/Icon - Cancel.svg",
  },
];

const SEE_PROJECT_BUTTON = document.getElementsByClassName("3tw353252352353");

const card = (project_info, index) => {
  const { title, item_stack, p_text, classes } = project_info;

  return `<div class="${classes}">
    <div class="grid__hover">
    <h4>${title}</h4>
    <p class="grid__item-1-4-paragraph p__hover">${p_text}</p>
    <ul class="grid__item-stack">
        ${item_stack
          .map((item) => ` <li class="grid__badges">${item}</li>`)
          .join("")}
    </ul>
    </div>
    <button id="${index}" class="grid__item-button 3tw353252352353">See project</button>
    </div>
`;
};

function modalDisplay2(project) {
  const MODAL_HTML = componentToHTML2(project);
  MODAL_BOX.innerHTML = MODAL_HTML;
  MODAL_BOX.style.display = "block";
}

function componentToHTML2(modal_info) {
  console.log("modal_info", modal_info);
  const { title, x_button, item_stack, img, p_text } = modal_info;

  return `
    <div class="modal__info-container">
      <div class="modal__header">
        <div class="modal__header-title">
          <h2 class="title_desk">${title}</h2>
          <h2 class="title_mob">${title}</h2>
          <img class="x_buttonIcon" id="modal__none" src="${x_button}" alt="">
        </div>
        <ul>
          ${item_stack
            .map((stack) => `<li class="li__Stack">${stack}</li>`)
            .join("")}
        </ul>
      </div>
      <div class="modal__main">
        <div class="modal__main-img">
          <img src="${img}" alt="">
        </div>
        <div class="modal__main-info">
          <div class="modal__main-p-container">
            <p class="desktop_p">${p_text}</p>
            <p class="mobile_p">${p_text}</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

MODAL_BOX.addEventListener("click", function (event) {
  if (event.target.id === "modal__none") {
    modalClose();
  }
});

function modalClose() {
  MODAL_BOX.style.display = "none";
}

const grid = (grid_projects) => {
  let markup = grid_projects.reduce((acc, item, i) => {
    return (acc += card(item, i));
  }, ``);
  return markup;
};

EXPERIENCE_GRID.innerHTML = grid(GRID_PROJECT);

const buttons = document.querySelectorAll(".grid__item-button");

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const projectInfo = GRID_PROJECT[index];
    modalDisplay2(projectInfo);
  });
});
