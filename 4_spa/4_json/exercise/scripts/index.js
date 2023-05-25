import { recipeData } from "./data.js";

const dataObj = JSON.parse(recipeData);
console.log(Object.entries(dataObj));
Object.entries(dataObj).forEach((entryCards) => {
  // step 1
  console.log(entryCards);
  const sections = [
    document.querySelector("#cakes"),
    document.querySelector("#biscuits"),
    document.querySelector("#bread"),
  ];
  // step 2
  // console.log(sections);
  // why index number 1
  // const obj = {
  //   autos: [{ car: "BMW" }, { motor: "Ducati" }],
  //   age: 33,
  //   add: "Berlin",
  // };
  // console.log(Object.entries(obj));
  entryCards[1].map((card) => {
    // step 3
    console.log(card);
    sections.forEach((section) => {
      if (card.type === section.id) {
        let cardInfo = `
        <div class="card m-3" style="width: 18rem;">
        <img src="${
          card.image
        }" class="card-img-top" alt="Baked Goods" height="200rem">
        <div class="card-body">
          <h4 class="card-title">${card.title}</h4>
          <h6>${card.author}<h6>
          <p class="border-top border-secondary pt-2">Ingredients: ${card.ingredients.join(
            " 💡 "
          )}</p>
        </div>
      </div>`;
        section.insertAdjacentHTML("afterbegin", cardInfo);
      }
    });
  });
});
