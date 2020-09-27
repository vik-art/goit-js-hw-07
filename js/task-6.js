let inputRef = document.querySelector("#validation-input");
const validNum = Number(inputRef.dataset.length);
const validation = () => {
  if (inputRef.value.length === validNum) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else if (inputRef.value.length === 0) {
    inputRef.classList.remove("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.add("invalid");
    inputRef.classList.remove("valid");
  }
};
inputRef.addEventListener("blur", validation);
