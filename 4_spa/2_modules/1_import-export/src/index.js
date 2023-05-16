// Wir können einen import eines default exports so nennen wir wir wollen, eine standardkonvention ist, sie bei klassen oder funktionen so zu nennen, wie das exportiere element heißt. Also in unserem falle "App", dies erstellt einen sogenannten namespace.
import App from './App.js';
import { makePage } from './utils.js';

const app = new App(25);
console.log(app);

const newValue = app.createNewValue();
console.log(newValue);

makePage(newValue);
