const EXPERIENCE_GRID_MOBILE = document.querySelector('.experience__grid');

const GRID_MOBILE_PROJECT = [
  {
    title: "Profesional Art Printing Data",
    item_stack: ["Bootstrap", "HTML", "Ruby"],
    img: "Assets/Snapshoot Portfolio.svg",
    p_text: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
  },
  {
    title: "Profesional Art Printing Data",
    item_stack: ["Bootstrap", "HTML", "Ruby"],
    img: "Assets/Snapshoot Portfolio.svg",
    p_text: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
  },
  {
    title: "Profesional Art Printing Data",
    item_stack: ["Bootstrap", "HTML", "Ruby"],
    img: "Assets/Snapshoot Portfolio.svg",
    p_text: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
  },
  {
    title: "Profesional Art Printing Data",
    item_stack: ["Bootstrap", "HTML", "Ruby"],
    img: "Assets/Snapshoot Portfolio.svg",
    p_text: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
  },
  {
    title: "Profesional Art Printing Data",
    item_stack: ["Bootstrap", "HTML", "Ruby"],
    img: "Assets/Snapshoot Portfolio.svg",
    p_text: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
  },
  {
    title: "Profesional Art Printing Data",
    item_stack: ["Bootstrap", "HTML", "Ruby"],
    img: "Assets/Snapshoot Portfolio.svg",
    p_text: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
  },
];

const card_mobile = (project_info, index) => {
  const { title, p_text, item_stack, classes } = project_info;

  return `<div class="grid__item">
    <h4>${title}</h4>
    <p>${p_text}</p>
    <ul class="grid__item-stack">
      ${item_stack.map((item) => `<li class="grid__badges">${item}</li>`).join('')}
    </ul>
    <button class="grid__item-button experience__button">See project</button>
  </div>`;
};

const grid_mobile = (grid_projects) => {
  let markup = grid_projects.reduce((acc, item, i) => {
    return acc += card_mobile(item, i);
  }, ``);
  return markup;
};

EXPERIENCE_GRID_MOBILE.innerHTML = grid_mobile(GRID_MOBILE_PROJECT);
