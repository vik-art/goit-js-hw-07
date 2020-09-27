//скрипт, который подсчитает и выведетв консоль количество категорий в ul#categoties

const categoryEl = document.querySelectorAll(".item");
console.log(`В списке ${categoryEl.length} категорий`);

//Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2)
//и количество элементов в категории (всех вложенных в него элементов li)

categoryEl.forEach.call(categoryEl, (element) => {
  console.log(
    `Категория: ${
      element.querySelector("h2").innerHTML
    } / Количество элементов: ${element.querySelectorAll("li").length}`
  );
});
