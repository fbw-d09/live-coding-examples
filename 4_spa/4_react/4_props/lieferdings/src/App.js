import './App.css';

import { Header, RestaurantList } from './components';

function App() {

  const restaurantList =
  [
    {
      name: "Jana's Japanese Foods",
      description: "Hier gibt es tolles Japanisches Essen, mit liebe gemacht",
      dishes:
      [
        {
          name: "Ramen",
          price: 12
        },
        {
          name: "Gyoza",
          price: 9
        },
        {
          name: "Edamame",
          price: 4
        }
      ]
    },
    {
      name: "Hansis House of Hummus",
      description: "Irgendwie bekommt man hier Hummus, auch wenn der betreiber es nicht mag",
      dishes:
      [
        {
          name: "Hummus Stulle",
          price: 6
        },
        {
          name: "Hummus mit Avocado",
          price: 7
        },
        {
          name: "Hummus mit Schokolade",
          price: 8
        }
      ]
    },
    {
      name: "Pawels Pizza & Pasta",
      description: "Leckere Pizza und Pasta vom Steinofen",
      dishes:
      [
        {
          name: "Pizza Margharita",
          price: 8
        },
        {
          name: "Pizza Funghi",
          price: 10
        },
        {
          name: "Pizza Hawaii",
          price: 10
        },
        {
          name: "Pasta Carbonara",
          price: 7
        }
      ]
    },
    {
      name: "Sashas Sushi",
      description: "Keine Ahnung, aber das sushi ist echt eine überraschung",
      dishes:
      [
        {
          name: "Maguro",
          price: 8
        },
        {
          name: "Uni",
          price: 4
        },
        {
          name: "Ebi",
          price: 6
        },
        {
          name: "Bangladesh",
          price: 2
        }
      ]
    },
    {
      name: "Dirks Döner",
      description: "Das Team, bestehend aus 2 Dirks, besteht darauf, das unser Döner schöner macht.",
      dishes:
      [
        {
          name: "Döner Kebab",
          price: 6
        },
        {
          name: "Döner Alles",
          price: 12
        },
        {
          name: "Döner Vegan",
          price: 8
        },
        {
          name: "Lahmacun",
          price: 5
        },
        {
          name: "Falafel Türkisch",
          price: 7
        }
      ]
    },
    {
      name: "Benny's Burger",
      description: "Unsere Burger sind toll und lecker, mit Dialekt!",
      dishes:
      [
        {
          name: "Cheeseburger",
          price: 10
        },
        {
          name: "Saitan Burger",
          price: 8
        },
        {
          name: "Bacon Burger",
          price: 12
        },
        {
          name: "Leipziger Chilli Cheese Burger",
          price: 15
        }
      ]
    }
  ]

  return (
    <div className="App">
      <Header/>
      <RestaurantList restaurants={restaurantList}/>
    </div>
  );
}

export default App;
