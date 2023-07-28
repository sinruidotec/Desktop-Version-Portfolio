const EXPERIENCE_GRID_MOBILE = document.querySelector(".experience__grid");
const MODAL_BOX3 = document.getElementById("modal__box_container");
const SEE_PROJECT_BUTTON3 = document.querySelector(".experience__button");
const GRID_MOBILE_PROJECT = [
  {
    title: "Profesional Art Printing Data",
    item_stack: ["Bootstrap", "HTML", "Ruby"],
    img: "Assets/Snapshoot Portfolio.svg",
    p_text: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    button: "See project",
  },
  {
    title: "2Profesional Art Printing Data",
    item_stack: ["Bootstrap", "HTML", "Ruby"],
    img: "Assets/Snapshoot Portfolio.svg",
    p_text:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
      button: "See project",
  },
  {
    title: "3Profesional Art Printing Data",
    item_stack: ["Bootstrap", "HTML", "Ruby"],
    img: "Assets/Snapshoot Portfolio.svg",
    p_text:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
      button: "See project",
  },
  {
    title: "4Profesional Art Printing Data",
    item_stack: ["Bootstrap", "HTML", "Ruby"],
    img: "Assets/Snapshoot Portfolio.svg",
    p_text:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
      button: "See project",
  },
  {
    title: "5Profesional Art Printing Data",
    item_stack: ["Bootstrap", "HTML", "Ruby"],
    img: "Assets/Snapshoot Portfolio.svg",
    p_text:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    button: "See project"      
  },
  {
    title: "Profesional Art Printing Data",
    item_stack: ["Bootstrap", "HTML", "Ruby"],
    img: "Assets/Snapshoot Portfolio.svg",
    p_text:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
      button: "See project",
  },
];

const card_mobile = (project_info, index) => {
  const { title, p_text, item_stack, button } = project_info;

  return `<div class="grid__item">
    <h4>${title}</h4>
    <p>${p_text}</p>
    <ul class="grid__item-stack">
      ${item_stack
        .map((item) => `<li class="grid__badges">${item}</li>`)
        .join("")}
    </ul>
    <button class="grid__item-button experience__button 345345345">${button}</button>
  </div>`;
};

const grid_mobile = (grid_projects) => {
  let markup = grid_projects.reduce((acc, item, i) => {
    return (acc += card_mobile(item, i));
  }, ``);
  return markup;
};

EXPERIENCE_GRID_MOBILE.innerHTML = grid_mobile(GRID_MOBILE_PROJECT);

const buttons3 = document.querySelectorAll(".grid__item-button");

buttons3.forEach((button, index) => {
  button.addEventListener("click", () => {
    const projectInfo = GRID_PROJECT[index];
    modalDisplay2(projectInfo);
  });
});
