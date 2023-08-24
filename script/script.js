const buttonEdit = document.querySelector(".button__edit");
const form = document.querySelector(".form");
const formClose = document.querySelector(".form__close-icon");

const formElement = document.querySelector(".form__element");
const formName = document.querySelector(".form__name");
const formAbout = document.querySelector(".form__about");

const profileTitle = document.querySelector("#profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");

buttonEdit.addEventListener("click", () => {
  form.style.visibility = "visible";
});

formClose.addEventListener("click", () => {
  form.style.visibility = "hidden";
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  let nameInput = formName.value;
  let aboutInput = formAbout.value;

  profileTitle.textContent = nameInput;
  profileSubtitle.textContent = aboutInput;

  form.style.visibility = "hidden";
}

formElement.addEventListener("submit", handleProfileFormSubmit);
