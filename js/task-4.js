let counterValue = 0;
const counterValueRef = document.querySelector("#value");
const increment = () => {
  counterValue += 1;
  counterValueRef.textContent = counterValue;
};
const decrement = () => {
  counterValue -= 1;
  counterValueRef.textContent = counterValue;
};
const incrementRef = document
  .querySelector("[data-action='increment']")
  .addEventListener("click", increment);
const decrementRef = document
  .querySelector("[data-action='decrement']")
  .addEventListener("click", decrement);
