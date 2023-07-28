const EXPERIENCE_GRID_MOBILE = document.querySelector('.experience__grid');
const GRID_MOBILE_PROJECT = [
  {
    title: 'Profesional Art Printing Data',
    itemStack: ['Bootstrap', 'HTML', 'Ruby'],
    img: 'Assets/Snapshoot Portfolio.svg',
    pText: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    button: 'See project',
  },
  {
    title: '2Profesional Art Printing Data',
    itemStack: ['Bootstrap', 'HTML', 'Ruby'],
    img: 'Assets/Snapshoot Portfolio.svg',
    pText:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    button: 'See project',
  },
  {
    title: '3Profesional Art Printing Data',
    itemStack: ['Bootstrap', 'HTML', 'Ruby'],
    img: 'Assets/Snapshoot Portfolio.svg',
    pText:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    button: 'See project',
  },
  {
    title: '4Profesional Art Printing Data',
    itemStack: ['Bootstrap', 'HTML', 'Ruby'],
    img: 'Assets/Snapshoot Portfolio.svg',
    pText:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    button: 'See project',
  },
  {
    title: '5Profesional Art Printing Data',
    itemStack: ['Bootstrap', 'HTML', 'Ruby'],
    img: 'Assets/Snapshoot Portfolio.svg',
    pText:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    button: 'See project',
  },
  {
    title: 'Profesional Art Printing Data',
    itemStack: ['Bootstrap', 'HTML', 'Ruby'],
    img: 'Assets/Snapshoot Portfolio.svg',
    pText:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    button: 'See project',
  },
];

const cardMobile = (projectInfo) => {
  const {
    title, pText, itemStack, button,
  } = projectInfo;

  return `<div class="grid__item">
    <h4>${title}</h4>
    <p>${pText}</p>
    <ul class="grid__item-stack">
      ${itemStack
    .map((item) => `<li class="grid__badges">${item}</li>`)
    .join('')}
    </ul>
    <button class="grid__item-button experience__button 345345345">${button}</button>
  </div>`;
};

const gridMobile = (gridProjects) => {
  const markup = gridProjects.reduce((acc, item) => acc + cardMobile(item), '');
  return markup;
};

EXPERIENCE_GRID_MOBILE.innerHTML = gridMobile(GRID_MOBILE_PROJECT);
