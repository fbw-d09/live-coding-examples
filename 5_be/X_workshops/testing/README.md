# testing-live-coding

Tests sind nützlich, um sicherzustellen, das programmcode wie erwartet funktioniert und fehler frühzeitig, in der entwicklung erkannt werden, und nicht in produktion auftreten, wenn die applikation läuft. Hierbei handelt es sich meist weniger um "bugs" innerhalb des programms, die dafür sorgen das eine funktion nicht die erwarteten ergebnisse liefert, sondern eher um richtige laufzeitfehler, die das programm zum absturz bringen.

### Was sind tests

Essentiell ermöglichen es tests dem entwickler also vertrauen in neuen, und veränderten code zu haben, ohne befürchten zu müssen das der code fehlerhaft ist, oder das programm zusammenbricht.

Tests sind ein wichtiger bestandteil von Agiler entwicklung, da bei der bereitstellung des codes für die applikation, vor dem build prozess IMMER tests ausgeführt werden, und so die funktionalität sichergestellt wird.

Es gibt in der web-entwicklung verschiedene arten von tests:
- Unit tests: die das ziel haben komponenten oder funktionen getrennt von anderen inhalten auf funktionalität zu prüfen. Also ob zum beispiel eine funktion innerhalb eines komponenten das erwartete ergebnis liefert. Typischerweise nutzt man für diese art von tests tools wie Mocha oder Jest.

- Integrationstests: um herauszufinden, ob verschiedene komponenten der applikation miteinander interagieren können. Ein beispiel hierfür wäre das überprüfen ob eine API anfrage erfolgreich die datenbank aufruft. Hierfür nutzt man meist tools wie Supertest, chai-http oder Selenium.

- Funktionstests: Um wichtige funktionale interaktionen innerhalb von applikationsinhalten zu testen, zum beispiel ob ein nutzer sich anmelden kann, wenn er auf den login button klickt. hierfür werden meist tools wie selenium oder puppeteer genutzt.

es gibt noch viele weitere arten von tests, die man aber meist nicht innerhalb des test-prozesses der entwicklung nutzt. Wie das testen der Barrierefreiheit oder der Datensicherheit. Viele der genannten tests werden allerdings in kombination verwendet, um sicherzustellen das die webanwendung zuverlässig und performant ist.

# Ein backend test mit mocha und chai

Meist machen wir unit oder integrationstests, in denen wir erwarten, das ein teil unserer applikation etwas so ausführt, wie wir es wollen.

Im backend nutzt man vor allem Mocha in zusammenarbeit mit Chai oder Chai-HTTP.

Mocha ist ein Test-framework für nodejs, das die organisierung und ausführung von tests erleichtert. Chai ist eine bibliothek die hilfreiche funktionen zur überprüfung von ergebnissen bereitstellt.

So können wir mit mocha tests ausführen, die wir durch chai, sehr gut lesbar und logisch beschreiben können.

> BEISPIEL 1:

- wir erstellen ein neues express-projekt
- wir installieren express als dependency und mocha, chai und chai-http als dev dependencies.
- wir erstellen einen ordner src. eine index.js und einen ordner test im root verzeichnis unserer applikation
- wir erstellen eine datei namens test.js innerhalb des test ordners, sollten wir verschiedene teile der applikation haben, und testen wollen, würden wir für jede der zu testenden dateien eine test datei mit der namenskonvetion [dateiname].test.js erstellen.
- wir fügen den befehl "test": "mocha --watch --exit" unserer package.json hinzu.

Wenn wir mocha im watch mode starten, müssen wir theoretisch unsere eigentliche app garnicht ausführen, da chai-http die express app von selber startet und testet, müssen wir nur unseren programmcode schreiben, die benötigten tests sind so verfügbar und sorgen für ein sicheres arbeiten.

fügen wir jetzt das script aus, sehen wir:
Express App
[grünes häkchen] should return "Hello, World!" when / GET

1 passing

dies bedeutet, das der test erfolgreich ausgeführt wurde, die seite aufgerufen wurde und das erwartete ergebnis geliefert wurde.
Ändern wir jetzt mal was zum test, sehehen wir ein anderes ergebnis.

Hier sagt er uns WO der fehler auftrat, was GENAU der fehler war, und was er eigentlich erwartete.

### Weitere tests

normalerweise schreiben wir nicht nur tests in denen etwas funktioniert, sondern testen auch das gegneteil, also "as tut der code, wenn etwas nicht funktioniert?"

> Beispiel 2:

wir fügen unserer express applikation eine weitere route hinzu und testen ob sie sowohl mit positiver, wie auch mit negativer antwort funktioniert.

Es gibt viele verschiedene "expects" die man schreiben kann, eine komplette liste gibt es hier: https://www.chaijs.com/api/bdd/

eine gängige methode der software entwicklung ist auch das sogenannte TEST DRIVEN DEVELOPMENT, kurz TDD, in dem man erst die tests schreibt, mocha laufen lässt, und ann den code stück für stück schreibt. So weiss man von vorne herein was man erwartet und läuft, dadurch, das man mit dem selben code die tests erfüllt, nicht gefahr zu vergessen, spezifische stellen im code zu testen.

# Ein frontend test mit react und jest

Im frontend nutzen wir meistens das framework jest, dieses gibt uns die möglichkeit ähnlich wie in mocha/chai expectations zu schreiben.

Jest ist ein beliebtes javascript-test-framework, das ursprüglich von Facebook entwickelt wurde. Es wird häufig für das testen von javascript anwendungen, insbesondere für frontend anwendungen und nodejs anwendungen verwendet. Jest wurde entwickelt um das testen einfacher, effizienter und benutzerfreundlicher zu gestalten.

Jest ist besonders gut für das testen von React-Anwendungen geeignet, da es eine gute integration mit react und der react testing library bietet.

> BEISPIEL 1:

- wir erstellen ein neues react projekt mit npx create-react-app 2_react-jest
- wir installieren jest und dessen test libraries als dev-depencies: npm install --save-dev jest @testing-library/react @testing-library/jest-dom
- wir erstellen einen komponenten namens Greeting
- im selben ordner erstellen wir jetzt ein test datei namens Greeting.test.js
- jetzt können wir unsere tests automatisch für alle komponenten ausführen, wenn wir "npm run test" ausführen. wir müssen n der package.json dafür nichts verändern, da jetzt jest einfach in das kommando "react-scripts test" injiziert wurde. Der watch mode wird hier automatisch gestartet. Wir können allerdings mit dem paramter "--verbose" detalliertere testergebnisse sehen.
- Fügen wir einen weiteren komponenten hinzu
-auch hier erstellen wir eine test datei direkt im komponentenordner, so haben wir in produktion alles, was zu einem komponenten gehört an einer stelle: Den komponenten, das stylesheet, ggf. die storybook datei, und die test datei.
- auch hier können wir mit Test Driven Development arbeiten. 
- Allgemein ist es so, das wir in der entwiklung nicht react ausführen, sondern den test watcher, da wir so wissen, das alles funktioniert.

weitere expectations für jest finden wir auf: https://jestjs.io/docs/expect

# Ende zu Ende tests mit puppeteer

Eine fantastische möglichkeit um direkte userinteraktionen (ende zu ende, also user zu client) in react zu testen, ist puppeteer. Puppeteer führt die tests tatsächlich im browser aus, was nicht nur eindrucksvoll, sondern auch hilfreich ist.

> Beispiel

- wir erstellen eine neue react applikation mit npx create-react-app 3_react-puppeteer
- wir installieren puppeteer als dev dependency: npm i -D jest puppeteer@18.1.0 jest-puppeteer
- wir erstellen eine jest.config.js datei.
- wir ändern unsere react app ein wenig ab. um puppeteer einen spielplatz zu geben.
- die datei App.test.js ändern wir ab.
- wir starten den development server mit "npm run start"
- jetzt können wir in einem anderen terminal "npm run test" eingeben, und puppeteer starten.
- ok, jetzt hat der test wohl funktioniert, aber eindrucksvoll war das weniger.
- wir setzen im bereich beforeAll(); den paramter "headless" auf false
- außerdem bauen wir in alle ausführungen noch unser vorher definiertes delay ein

jetzt können wir puppeteer im browser zuschauen, wie es unseren button klickt, wie ein geist, der unsere app benutzt. Das ist zwar cool, aber nervt in der entiwkclung eher, Bei einem build prozess würden wir deshalb eher im headless mode arbeiten, also ohne browser.

weitere informationen zu puppeteer finden wir hier: https://pptr.dev/category/guides

