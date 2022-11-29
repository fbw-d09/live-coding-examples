# Regeln für commit nachrichten in git

- Um etwas neues hinzuzufügen, fangen wir unsere commit nachricht mit dem wort "Add" an
- Um etwas neues zu erstellen, fangen wir unsere commit nachricht mit dem wort "Create" an
- Um etwas zu ändern, fangen wir unsere commit nachricht mit dem wort "Change" an
- um etwas zu reparieren, fangen wir unsere commit nachricht mit dem wort "Fix" an
- um etwas zu löschen, fangen wir unsere commit nachricht mit dem wort "Delete" an

Allgemein sollte eine commit nachricht kurz sein, aber es ist durchaus erlaubt zum beispiel den datei namen oder die spezifische position der änderung mit anzugeben.

__Beispiele__

- "Create README.md file"
- "Change header in README.md file"
- "Delete License text"

Wenn wir eine "Issue" bearbeiten wollen, und unser commit "repariert das problem", dann referenzieren wir die issue, indem wir unsere commit nachricht mit dem wort "Fix" anfangen, danach eine raute, gefolgt von der nummer der issue angeben, und dahinter ein Semikolon schreiben. Wenn wir dies getan haben, können wir dahinter unsere ganz normale commit nachricht schreiben.

__Beispiele__

- "Fix #1; Add commit-rules.md file"
- "Fix #877; Change installation instructions in README.md file"

