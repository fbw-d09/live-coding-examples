# Mongosh Kommandos

## mongosh starten

um mongosh zu starten, tippen wir den befehl "mongosh" ins terminal ein, wen alles geklappt hat, sollten wir in dritter reihe folgendes stehen haben:

Connecting to: mongodb://127.0.0.1:27017/... (in grün)

MongoDB hat sein eigenes web-protokoll namens "mongodb" und die "27017" ist der default port von MongoDB.

## Hilfe

um die hilfefunktion in mongosh aufzurufen, schreiben wir in der eingabeaufforderung den befehl "help". Außerdem können wir für jede untermethode in mongosh eine eigene hilfe aufrufen, z.B.: "db.help".

## Alle Datenbanken anzeigen

um alle datenbanken innerhalb von unserer MongoDB installation zu sehen, nutzen wir den befehl "show dbs"

## Eine datenbank erstellen

mit dem befehl "use [datenbankname]" wechseln wir auf eine datenbank und sollte diese nicht existieren, wird sie automatisch angelegt.

Beispiel: use DatenbankName

## Eine datenbank löschen

um eine datenbank zu löschen, mit all ihren inhalten, schreiben wir, wenn wir die jeweilige datenbank mit use selektiert haben, den befehl db.dropDatabase(). Die shell bleibt dann in der jeweiligen datenbank, obwohl sie nicht mehr existiert, wir müssen also manuell eine andere selektieren.

## Eine kollektion erstellen

Dokumentenbasierende datenbanken wie MongoDB, CouchDB, Rethink oder LowDB arbeiten, im gegensatz zu Relationellen (Tabularen) Datenbanken, mit dokumentenkollektionen, dort werden mehrere dokumente in kollektionen zusammengefasst, um zum beispiel auf alle "user" an einer stelle zuzugreifen. (Wie eine ordner für papiere)

Um eine kollektion zu erstellen, schreiben wir, wenn wir eine datenbank selektiert haben, den befehl db.createCollection("Kollektionsname");

Beispiel: db.createCollection("Beispiele")

WICHTIG: eine kollektion sollte immer aus einem wort bestehen

## Alle kollektionen sehen

Um alle kollektionen INNERHALB einer selektierten datenbank zu sehen, schreiben wir "show collections".

## Eine kollektion löschen

UM eine kollektion zu löschen, was man in datenbanksprache "droppen" nennt, schreiben wir "db.[kollektionsname].drop()

Beispiel: db.Beispiele.drop()

## Ein Dokument erstellen

Wenn wir die richtige datenbank selektiert haben, und unsere kollektion existiert, können wir dort dokumente einfügen, dies können wir mit dem befehl "db.[kollektionsname].insertOne() bewerkstelligen, dort fügen wir unsere json daten ein.

Beispiel:
db.users.insertOne({
    firstname: "Max",
    lastname: "Mustermann"
})

Das dokument bekommt nun eine zufällige ID zugewiesen, die unique, also nur einmal, für die komplette datenbank existiert.

## Mehrere dokumente auf einmal einfügen

Wir können auch mehrere dokumente auf einen schlag einfügen, dafür nutzen wir den befehl db.[kollektionsname].insertMany()

Beispiel:
db.users.insertMany([{
    firstname: "Dörk",
    lastname: "Krimpenfört",
    group: "admin"
},
{
    firstname: "James",
    lastname: "Bond",
    group: "admin"
},
{
    firstname: "Henry",
    lastname: "Jones",
    group: "user"
}])

wenn es geklappt hat, wird mongosh für jedes hinzugefügte dokument eine id ausspucken.

## Dokumente finden

Um alle dokumente in einer kollektion zu finden, nutzen wir den befehl db.[kollektionsname].find({}), mit dem lehren objekt geben wir an, das wir keine suchkriterien haben.

Beispiel: db.users.find({});

um spezifische dokumente zu finden, basierend auf suchkritieren, schreiben wir in die objektklammer unser suchkriterium

Beispiel: db.users.find({ group: "admin" })

Um den ersten eintrag zu finden, der auf unser suchkriterium zutrifft, ohne eine liste von einem inhalt zu bekommen, nutzen wir den befehl db.[kollektionsname].findOne().

Beispiel: db.users.findOne({ firstname: "Max" })

um herauszufinden, wieviel einträge in einer kollektion sind, die auf unsere suchanfrage zutreffen, können wir den befhl "db.[kollektionsname].countDocuments()" nutzen

Beispiel:
db.users.countDocuments({ group: "admin" })

Beispiel für alle einträge:
db.users.countDocuments({})

## Dokumente updaten

Um dokumente zu updaten, also werte zu ändern oder hinzuzufügen, nutzen wir den befehl db.[kollektionsname].updateOne(), dort müssen wir mit "$set" sagen was wir ändern wollen.

zb. db.users.updateOne({ firstname: "Max" }, { $set: { group: "editor" }})

um mehrere dokumente auf einmal upzudaten, nutzen wir den befehl db.[kollektionsname].updateMany()

Beispiel: db.users.updateMany({ group: "admin"}, { $set: { lastname: "Schmitz" }})

## Dokumente löschen

um dokumente zu löschen, nutzen wir den befehl db.[kollektionsname].deleteOne(), dies löscht das erste gefundene dokument, das auf unsere suchanfrage zutrifft

Beispiel: db.users.deleteOne({ lastname: "Jones" })

um mehrere dokumente zu löschen, die auf eine suchanfrage zutreffen, nutzen wir db.[kollektionsname].deleteMany()

db.users.deleteMany({ group: "admin" })

---

mongosh beenden wir, indem wir ".exit" eingeben.
