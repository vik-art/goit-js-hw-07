const inputRef = document.querySelector("#font-size-control");
const sizeRef = document.querySelector("#text");
const changeFontSize = () => {
  sizeRef.style.fontSize = `${inputRef.value}px`;
};
inputRef.addEventListener("input", changeFontSize);
