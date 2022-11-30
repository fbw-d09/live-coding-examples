# Linux Commands

- clear: löscht den inhalt des terminals
- nano: öffnet den linux internen text editor.
- pwd: Zeigt uns den ordner an, in dem wir uns aktuell befinden.
- touch [Dateiname]: Erstellt eine datei.
- echo "[Text]": gibt einen text im terminal aus.
- echo "[Text]]" >> [Dateiname]: speichert einen text in der angegebenen datei ab.
- ls: zeigt den inhalt des aktuellen ordners.
- ls -R: zeigt den inhalt des aktuellen ordners und dessen unterordners an.
- ls -a: zeigt uns versteckte dateien im aktuellen ordner an.
- ls -al: zeigt uns die rechte zu allen dateien im aktuellen ordner an.
- cat [Dateiname]: Gibt den inhalt einer datei im terminal aus.
- cat > [Dateiname]: Erstellt eine datei.
- cat [Dateiname1] [Dateiname2] > [Dateiname3]: fügt 2 dateien zusammen, und speichert sie gemeinsam in einer dritten datei.
- history: Gibt uns ein log aus, mit den bisherigen benutzten befehlen.
- rm [Dateiname]: löscht die angegebene datei.
- rmdir [Ordnername]: löscht den angegebenen ordner.
- rm -rf [Ordnername]: löscht den angegebenen ordner mit allen inhalten.
- mkdir [Ordnername]: erstllt einen ordner
- mv [AlterDateiname] [NeuerDateiname]: Nennt eine datei um (bewegt den inhalt der datei in eine neue datei)
- cd ./.. : geht einen ornder nach oben
- cd ./../.. : geht zwei ordner nach oben
- cd ./../[Ordnername]: öffnet einen spezifischen ordner eine eben über dem aktuellen ordner (also sozusagen einen geschwisterordner)
- cd ./[Ordnername1]/[Ordnername2]/: öffnet einen spezifischen ordner, innerhalb eines anderen darüberliegenden spezifischen ordners.
- cd [Doppelt-Tab]: sagt uns, welche möglichkeiten zur bewegung im akutellen ordner wir haben.
- cd oder cd ~: schickt uns zurück in unser home verzeichnis.
- cd /: schickt uns ins root directory.
- less [Dateiname]: Zeigt uns den inhalt der datei in zeile an, so das wir bei einer datei, die mehr platz weg nimmt als das terminal, wir die inhalte schritt für schritt anschauen können
- more [Dateiname]: Wie less, allerdings zeigt uns der more befehl an, wieviel vom dokument an der aktuellen stelle noch übrig ist.

## Erstellen von shell scripten

eine datei mit der endung .sh wird vom terminal direkt beim aufruf ausgeführt und führt die angegebenen befehle aus.

wir starten diese datei mit dem befehl sh (shell), also zum beispiel: sh test.sh
