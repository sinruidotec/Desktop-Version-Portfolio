const SEE_PROJECT_BUTTON2 = document.querySelector('.experience__button');
const MODAL_BOX2 = document.getElementById('modal__box_container');
const PROJECTS_ARRAY = [
  {
    titleD: 'Keeping track of hundreds of components website',
    titleM: 'Multi Post Stories',
    itemStack: ['HTML', 'Bootstrap', 'Ruby on Rails'],
    xButton: 'Assets/Icon - Cancel.svg',
    img: 'Assets/Snapshoot Portfolio.svg',
    pTextD:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. <br> <br>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relax map lapora verita.",
    pTextM:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    liveButton: 'Assets/Icon - Export.svg',
    sourceButton: 'Assets/Icon -GitHub.svg',
  },
];

function componentToHTML(modalnfo) {
  const {
    titleD,
    titleM,
    xButton,
    itemStack,
    img,
    pTextD,
    pTextM,
    liveButton,
    sourceButton,
  } = modalnfo;

  return `
    <div class="modal__info-container">
      <div class="modal__header">
        <div class="modal__header-title">
          <h2 class="title_desk">${titleD}</h2>
          <h2 class="title_mob">${titleM}</h2>
          <img class="x_buttonIcon" id="modal__none" src="${xButton}" alt="">
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
            <p class="desktop_p">${pTextD.replace(/\n/g, '<br>')}</p>
            <p class="mobile_p">${pTextM.replace(/\n/g, '<br>')}</p>
          </div>
          <div class="modal__main-buttons-container">
            <a class="live modal__main-buttons-style" href="">See live<img src="${liveButton}" alt=""></a>
            <a class="see modal__main-buttons-style" href="">See source<img src="${sourceButton}" alt=""></a>
          </div>
        </div>
      </div>
    </div>
  `;
}

function modalDisplay(project) {
  const MODAL_HTML = componentToHTML(project);
  MODAL_BOX2.innerHTML = MODAL_HTML;
  MODAL_BOX2.style.display = 'block';
}

SEE_PROJECT_BUTTON2.addEventListener('click', () => modalDisplay(PROJECTS_ARRAY[0]));
function modalClose() {
  MODAL_BOX2.style.display = 'none';
}

MODAL_BOX2.addEventListener('click', (event) => {
  if (event.target.id === 'modal__none') {
    modalClose();
  }
});
