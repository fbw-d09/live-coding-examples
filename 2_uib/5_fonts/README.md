## CSS einbinden
- internal ---> `<style></style>` im **HEAD** Bereich
- external --> `<link></link>` im **HEAD**
- inline --> in das html Element eingefügt `style=""`
--> inline ist "wichtiger" als external oder internal, daher möglichst vermeiden

- CSS arbeitet von oben nach unten, gleiche Eigenschaften werden überschrieben


## Selektoren
- `.main > p` --> selektiert die direkten Kinder
-  `.main p`   --> selektiert Kinder, Enkel usw. (auch verschachelt)
- `.list :nth-child(even)` alle geraden Kindelemente selekieren - `.list :nth-child(2)` das zweite Kindelemente selekieren 


## Styleguide
- Firmen verwenden Styleguides die feste Regeln zum Schreiben des CSS vorgeben, oft sind diese einsehbar, Beispiele:
    - [mdn](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/CSS)
    - [google](https://google.github.io/styleguide/htmlcssguide.html)


## Google Fonts einbinden

### als externe Ressource
- `<link>`-Tag im html oder `@import` im CSS
- in Deutschland aktuell rechtlich problematisch


### als lokale Ressource:
1. Schrift herunterladen
    - entweder direkt von Google (dort bekmmt ihr immer den gesamten Schriftsatz)
    - über den [google-webfont-helper](https://gwfh.mranftl.com/fonts) -> Empfehlung!
2. Schrift mittels @font-face einbinden, z.B. so:
```
@font-face {
font-family: 'Comic_Thin';   
font-weight: 300;
src: url(./fonts/ComicNeue-Italic.ttf);
}
```
Erklärung:
- `font-family` --> der Name wie ihr die Schrift später in eurem CSS ansprechen könnt
- `font-weight` --> jede Schriftstärke muss einzeln eingebunden werden, nur die vorhanden Schriftstärken können verwendet werden
- `src: url()` --> hier wird die entpsrechende Datei verknüpft


## Font Stack
- wenn ihr eine Schriftart verwendet, denkt an Rückfallmöglichkeiten, falls die Schriftart nicht verfügbar ist --> dafür der sogenannte font stack, Beispiel:
```
:root {
    font-size: 62.5%;
    font-family: 'Roboto', 'Montserrat', sans-serif;
}
```
--> wenn Roboto nicht verfügbar, dann Montserrat, falls die auch ausfällt die Standard sans-serif Schrift
- [anderes Beispiel hier](https://kulturbanause.de/faq/font-stack/) 

