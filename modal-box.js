const SEE_PROJECT_BUTTON = document.querySelector(".experience__button");
const MODAL_BOX = document.getElementById("modal__box_container");
const PROJECTS_ARRAY = [
  {
    title_d: "Keeping track of hundreds of components website",
    title_m: "Multi Post Stories",
    item_stack: ["HTML", "Bootstrap", "Ruby on Rails"],
    x_button: "Assets/Icon - Cancel.svg",
    img: "Assets/Snapshoot Portfolio.svg",
    p_text_d:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. <br> <br>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relax map lapora verita.",
    p_text_m:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
      live_button: "Assets/Icon - Export.svg",
      source_button: "Assets/Icon -GitHub.svg",
  },
];

function modalDisplay(project) {
  const MY_OBJECT = [project];
  const MODAL_HTML = MY_OBJECT.map(componentToHTML).join("");
  MODAL_BOX.innerHTML = MODAL_HTML;
  MODAL_BOX.style.display = "block";
}

function modalClose() {
  MODAL_BOX.style.display = "none";
}

SEE_PROJECT_BUTTON.addEventListener("click", () => modalDisplay(PROJECTS_ARRAY[0]));

function componentToHTML(modal_info) {
  const { title_d, title_m, x_button, item_stack, img, p_text_d, p_text_m, live_button, source_button } =
    modal_info;

  return `
    <div class="modal__info-container">
      <div class="modal__header">
        <div class="modal__header-title">
          <h2 class="title_desk">${title_d}</h2>
          <h2 class="title_mob">${title_m}</h2>
          <img class="x_buttonIcon" id="modal__none" src="${x_button}" alt="">
        </div>
        <ul>
          ${item_stack.map((stack) => `<li class="li__Stack">${stack}</li>`).join("")}
        </ul>
      </div>
      <div class="modal__main">
        <div class="modal__main-img">
          <img src="${img}" alt="">
        </div>
        <div class="modal__main-info">
          <div class="modal__main-p-container">
            <p class="desktop_p">${p_text_d.replace(/\n/g, "<br>")}</p>
            <p class="mobile_p">${p_text_m.replace(/\n/g, "<br>")}</p>
          </div>
          <div class="modal__main-buttons-container">
            <a class="live modal__main-buttons-style" href="">See live<img src="${live_button}" alt=""></a>
            <a class="see modal__main-buttons-style" href="">See source<img src="${source_button}" alt=""></a>
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
