const EXPERIENCE_GRID = document.querySelector('.grid__item-hidden');

const GRID_PROJECT = [
  {
    title: "Profesional Art Printing Data",
    item_stack: ["Bootstrap","HTML", "Ruby"],
    img: "Assets/Snapshoot Portfolio.svg",
    p_text: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    classes: "grid__item-1-4"
  },
  {
    title: "Profesional Art Printing Data",
    item_stack: ["Bootstrap","HTML", "Ruby"],
    img: "Assets/Snapshoot Portfolio.svg",
    p_text: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    classes: "grid__item-2-5"
  },
  {
    title: "Profesional Art Printing Data",
    item_stack: ["Bootstrap","HTML", "Ruby"],
    img: "Assets/Snapshoot Portfolio.svg",
    p_text: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    classes: "grid__item-3-6"
  },
  {
    title: "Profesional Art Printing Data",
    item_stack: ["Bootstrap","HTML", "Ruby"],
    img: "Assets/Snapshoot Portfolio.svg",
    p_text: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    classes: "grid__item-1-4"
  },
  {
    title: "Profesional Art Printing Data",
    item_stack: ["Bootstrap","HTML", "Ruby"],
    img: "Assets/Snapshoot Portfolio.svg",
    p_text: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    classes: "grid__item-2-5"
  },
  {
    title: "Profesional Art Printing Data",
    item_stack: ["Bootstrap","HTML", "Ruby"],
    img: "Assets/Snapshoot Portfolio.svg",
    p_text: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    classes: "grid__item-3-6"
  },
];

const card = (project_info, index) => {
  const { title, item_stack, p_text, classes } = project_info

  return `<div class="${classes}">
    <div class="grid__hover">
    <h4>${title}</h4>
    <p class="grid__item-1-4-paragraph p__hover">${p_text}</p>
    <ul class="grid__item-stack">
        ${item_stack.map((item) => ` <li class="grid__badges">${item}</li>`).join('')}
    </ul>
    </div>
    <button id="${index}" class="grid__item-button">See project</button>
    </div>
`};

const grid = (grid_projects) => {
  let markup = grid_projects.reduce((acc, item, i) => {
    return acc += card(item, i);
  }, ``)
  return markup;
}

EXPERIENCE_GRID.innerHTML = grid(GRID_PROJECT);

const buttons = document.querySelectorAll('.grid__item-button');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {

    const projectInfo = GRID_PROJECT[index];
    console.log('Se hizo clic en el botón:', projectInfo);

  });
});
