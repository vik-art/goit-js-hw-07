const nameRef = document.querySelector("#name-input");
const nameValue = document.querySelector("#name-output");
const addName = () => {
  nameValue.textContent = nameRef.value === "" ? "незнакомец" : nameRef.value;
};
nameRef.addEventListener("input", addName);
