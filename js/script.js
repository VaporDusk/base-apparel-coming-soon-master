const container = document.querySelector(".container");
const button = document.querySelector(".button");
const errorIcon = document.querySelector(".errorIcon");

button.addEventListener("click", function () {
  const email = document.querySelector(".email");
  if (email.value === "" || !dogSearcher(email.value)) {
    if (!document.querySelector(".error-text")) {
      email.setAttribute("style", "border:2px solid hsl(0, 93%, 68%)");
      const error = document.createElement("p");
      error.innerText = "Please provide a valid email";
      error.setAttribute("class", "error-text");
      container.appendChild(error);
      errorIcon.setAttribute("style", "display:inline");
    };
  } else {
    if (document.querySelector(".error-text")) {
      email.setAttribute("style", "border:1px solid hsla(0, 0%, 0%, 0.5)");
      errorIcon.setAttribute("style", "display:none");
      const error = document.querySelector(".error-text");
      container.removeChild(error);
    };
    email.value = "";
  };
});

function dogSearcher(text) {
  for (let i = 1; i < text.length; i++) {
    if (text[i] === "@") {
      return true;
    };
  };
  return false;
};