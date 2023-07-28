const MODAL_BOX = document.getElementById('modal__box_container');
const EXPERIENCE_GRID = document.querySelector('.experience__grid');
const GRID_PROJECT = [
  {
    title: 'Profesional Art Printing Data',
    itemStack: ['Bootstrap', 'HTML', 'Ruby'],
    img: 'Assets/Snapshoot Portfolio.svg',
    pText:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    classes: 'grid__item-1-4',
  },
  {
    title: 'Data Dashboard Healthcare',
    itemStack: ['Bootstrap', 'HTML', 'Ruby'],
    img: 'Assets/Snapshoot Portfolio.svg',
    pText:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    classes: 'grid__item-2-5',
  },
  {
    title: 'Website Portfolio',
    itemStack: ['Bootstrap', 'HTML', 'Ruby'],
    img: 'Assets/Snapshoot Portfolio.svg',
    pText:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    classes: 'grid__item-3-6',
  },
  {
    title: 'Profesional Art Printing Data',
    itemStack: ['Bootstrap', 'HTML', 'Ruby'],
    img: 'Assets/Snapshoot Portfolio.svg',
    pText:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    classes: 'grid__item-1-4',
  },
  {
    title: 'Data Dashboard Healthcare',
    itemStack: ['Bootstrap', 'HTML', 'Ruby'],
    img: 'Assets/Snapshoot Portfolio.svg',
    pText:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    classes: 'grid__item-2-5',
  },
  {
    title: 'Website Portfolio',
    itemStack: ['Bootstrap', 'HTML', 'Ruby'],
    img: 'Assets/Snapshoot Portfolio.svg',
    pText:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    classes: 'grid__item-3-6',
  },
];

const card = (projectInfo, index) => {
  const {
    title, itemStack, pText, classes,
  } = projectInfo;

  return `<div class="${classes}">
    <div class="grid__hover">
    <h4>${title}</h4>
    <p class="grid__item-1-4-paragraph p__hover p">${pText}</p>
    <ul class="grid__item-stack">
        ${itemStack
    .map((item) => ` <li class="grid__badges">${item}</li>`)
    .join('')}
          </ul>
          </div>
          <button id="${index}" class="grid__item-button 3tw353252352353">See project</button>
    </div>
`;
};

function componentToHTML2(modalnfo) {
  const {
    title, itemStack, img, pText,
  } = modalnfo;

  return `
      <div class="modal__info-container">
        <div class="modal__header">
          <div class="modal__header-title">
            <h2 class="title_desk">${title}</h2>
            <h2 class="title_mob">${title}</h2>
            <img class="x_buttonIcon" id="modal__none" src='Assets/Icon - Cancel.svg' alt="">
          </div>
          <ul>
            ${itemStack
    .map((stack) => `<li class="li__Stack">${stack}</li>`)
    .join('')}
          </ul>
        </div>
        <div class="modal__main">
          <div class="modal__main-img">
            <img src="${img}" alt="">
          </div>
          <div class="modal__main-info">
            <div class="modal__main-p-container">
              <p class="desktop_p">${pText}</p>
              <p class="mobile_p">${pText}</p>
            </div>
            <div class="modal__main-buttons-container">
  
              <a class="live modal__main-buttons-style" href="https://sinruidotec.github.io/Desktop-Version-Portfolio/"> 
                See live
                <img src="Assets/Icon - Export.svg" alt>
              </a>
              <a class="see modal__main-buttons-style" href="https://github.com/sinruidotec/Desktop-Version-Portfolio/tree/Popup-Window-implementation">
                See source
                <img src="Assets/Icon -GitHub.svg" alt>
              </a> 
  
            </div>
          </div>
        </div>
      </div>
    `;
}

function modalDisplay2(project) {
  const MODAL_HTML = componentToHTML2(project);
  MODAL_BOX.innerHTML = MODAL_HTML;
  MODAL_BOX.style.display = 'block';
}

function modalClose() {
  MODAL_BOX.style.display = 'none';
}

MODAL_BOX.addEventListener('click', (event) => {
  if (event.target.id === 'modal__none') {
    modalClose();
  }
});

const grid = (gridProjects) => {
  const markup = gridProjects.reduce((acc, item) => acc + card(item), '');
  return markup;
};

EXPERIENCE_GRID.innerHTML = grid(GRID_PROJECT);

const buttons = document.querySelectorAll('.grid__item-button');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const projectInfo = GRID_PROJECT[index];
    modalDisplay2(projectInfo);
  });
});
