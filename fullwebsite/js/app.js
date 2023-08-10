const getElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) return element;
  throw Error(
    "please double check your class names, there is no ${selectore} class"
  );
};
// navbar

const links = getElement(".nav-links");
const navBtn = getElement(".nav-btn");
navBtn.addEventListener("click", () => {
  links.classList.toggle(".show-links");
});
