import { Circle, Paragraph } from './components';
import './App.css';

function App() {
  const arrExample =
  [
    {
      text: "Hallo Behzad",
      hasArrow: true,
      color: "red"
    },
    {
      text: "Hallo Miad",
      hasArrow: true,
      color: "blue"
    },
    {
      text: "Hallo Zoe",
      hasArrow: false,
      color: "red"
    }
  ]

  return (
    <div className="App">
      <Circle 
        showInnerCircle // im professionellen umfeld schreiben wir booleans bei react in jsx nicht aus, ein props, der dort steht, ist true, und wenn er nicht dort steht, ist er automatisch falsch.
        color={"purple"}
      />

      <Circle 
        showInnerCircle // im professionellen umfeld schreiben wir booleans bei react in jsx nicht aus, ein props, der dort steht, ist true, und wenn er nicht dort steht, ist er automatisch falsch.
        color={"orange"}
      />

      {
        arrExample.map(({ hasArrow, color, text }, i) =>
        {
          return(
            <Paragraph key={i} hasArrow={hasArrow} color={color}>
              { text }
            </Paragraph>
          )
        })
      }
    </div>
  );
}

export default App;
