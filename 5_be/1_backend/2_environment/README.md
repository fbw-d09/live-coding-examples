Um für ein Projekt spezifische umgebungsvariablen anzulegen, erstellen wir eine datei namens ".env", diese wird NIEMALS (!!!) mit gepusht und sollte in der ".gitignore" datei landen. Um jemandem, der das projekt runterläd, mitzuteilen, welche daten in die ".env" datei gehören, legen wir eine datei namens ".env.template" an. in der wir nur die schlüssel hinterlegen. Um die daten aus der ".env" datei auszuesen, benötigen wir das nodejs modul "dotenv".

in einzelschritten machen wir folgendes, um selbst definierte umgebungsvariablen zu nutzen.

1. (optional, wenn neues projekt) Wir initialisieren ein npm projekt mit "npm init -y", damit uns npm keine fragen stellt und alle daten automatisch anfügt.
2. wir erstellen eine ".gitignore" datei, und schreiben dort node_modules und .env hinein.
3. Wir installieren das modul "dotenv", dieses modul sorgt dafür, das wir in nodejs .env dateien lesen können.
4. Wir erstellen eine datei namens .env und schreiben dort unsere informationen hinein, die wir auslesen wollen.
5. Wir importieren das modul dotenv mit dem zusatz .config();.
6. Jetzt können wir auf unsere umgebungsvariablen zugreifen.
7. Im normalfall erstellen wir noch eine datei, namens ".env.template", die wir mit dem projekt ausliefern. Diese datei enthält NUR die SCHLÜSEL, aber nicht die WERTE. So eine datei wird normalerweise vor dem hochfahren eines projektes in .env umbenannt und mit den gewünschten daten befüllt. Erstellt wird sie normalerweise, indem wir die .env datei kopieren, umbenennen und die werte löschen.