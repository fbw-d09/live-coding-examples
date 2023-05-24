const recipes = {
  cakes: [
    {
      type: "cakes",
      author: "John Smith",
      title: "Deliciously Decadent",
      ingredients: [
        "chocolate",
        "milk",
        "flour",
        "vegetable oil",
        "sugar",
        "butter",
      ],
      image:
        "https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/easy_chocolate_cake_31070_16x9.jpg",
    },
    {
      type: "cakes",
      author: "Jane Doe",
      title: "Ridiculous Raspberry",
      ingredients: [
        "raspberries",
        "milk",
        "flour",
        "vegetable oil",
        "sugar",
        "butter",
      ],
      image:
        "https://thecakeblog.com/wp-content/uploads/2017/01/chocolate-raspberry-cake-thumb-sm.jpg",
    },
    {
      type: "cakes",
      author: "Tim Thomas",
      title: "Famous NY Cheese Cake",
      ingredients: [
        "cream cheese",
        "milk",
        "flour",
        "sugar",
        "butter",
        "biscuits",
      ],
      image:
        "https://www.tasteofhome.com/wp-content/uploads/2017/10/Vanilla-Cheesecake_EXPS_THLS17_205125_D02_23_3b-1.jpg",
    },
  ],
  biscuits: [
    {
      type: "biscuits",
      author: "Vincent Grey",
      title: "Ginger Snaps",
      ingredients: ["ginger", "flour", "butter", "sugar"],
      image: "https://www.joyofbaking.com/images/facebook/gingersnaps1.jpg",
    },
    {
      type: "biscuits",
      author: "Earl Senseo",
      title: "Short Bread",
      ingredients: ["sugar", "flour", "butter"],
      image:
        "https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/butter_shortbread_74896_16x9.jpg",
    },
    {
      type: "biscuits",
      author: "Lily Shanes",
      title: "Millionaires",
      ingredients: [
        "sugar",
        "flour",
        "butter",
        "condensed milk",
        "milk chocolate",
      ],
      image:
        "https://i0.wp.com/everydaycooks.co.uk/wp-content/uploads/2017/10/millionaire-shortbread-h2.jpg?fit=1800%2C1360&ssl=1",
    },
  ],
  bread: [
    {
      type: "bread",
      author: "Martin Zammit",
      title: "Sourdough",
      ingredients: ["water", "flour", "salt", "yeast"],
      image:
        "https://amyinthekitchen.com/wp-content/uploads/2018/11/Beginners-Sourdough-Bread-AITK.jpg",
    },
    {
      type: "bread",
      author: "Pia Falzon",
      title: "Beautiful Baguettes",
      ingredients: ["water", "flour", "salt", "yeast"],
      image:
        "https://www.thespruceeats.com/thmb/mCTU2pQ6A-WZ7qQqxH4C8gSbR9E=/1428x1428/smart/filters:no_upscale()/GettyImages-636741221-e5442b2f0b3a4d33a26ebf7deb237fed.jpg",
    },
    {
      type: "bread",
      author: "Maria Mifsud",
      title: "The best thing since sliced bread",
      ingredients: ["water", "flour"],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdfaG5Cv4oOjewDMyFitnCpsOBH3ifA5fkycKUy0_y_4Vv2P4IkA",
    },
  ],
};

const recipeData = JSON.stringify(recipes);
export { recipeData };
