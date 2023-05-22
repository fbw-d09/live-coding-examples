## Asynchronous Programming

Javascript ist eine synchrone Single-Threaded-Sprache, keine asynchrone Sprache. Was bedeutet das? Das bedeutet, dass der Javascript-Parser Zeile für Zeile vom Anfang der Datei bis zum Ende vorgeht.

Wie können wir dann asynchronen Code in Javascript schreiben?

Aber warum brauchen wir asynchrone Operationen? Weil wir nicht möchten, dass der Benutzer auf einen leeren Bildschirm schaut, während wir auf eine API-Antwort warten. Denken Sie an die Analogie zum Kellner in einem Restaurant. Der Kellner wartet nicht darauf, dass der Koch das Essen zubereitet, der Kellner kann andere Dinge tun (Tische abräumen, andere Kunden bedienen), während er auf die Zubereitung des Essens wartet.

OK, aber wie schreibe ich asynchrones Javascript? Früher gaben wir callbacks, bevor wir promises machten. [Callbacks](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function) wurden schnell sehr schwer lesbar und führten zu dem, was wir die Callback hell nennen.

Promises ermöglichten es uns, Funktionen zu verketten, anstatt Callback zu verschachteln.

# Promises bietet drei verschiedene Zustände an:

pending (ausstehend) – der Zustand, bevor unser [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) Versprechen gelöst oder abgelehnt wird
gelöst (gelöst) - sobald unser Versprechen erfolgreich erfüllt, was es versprochen hat
rejected (abgelehnt) - für den Fall, dass unser Versprechen sein Versprechen nicht erfüllen konnte

Beispiel für eine Ablehnung: Wir führen einen API-Aufruf durch und der von uns aufgerufene Server ist ausgefallen, weil dort, wo sich der Server befindet, ein Stromausfall aufgetreten ist. Wir sind nicht in der Lage, die Daten zu erhalten, daher müssen wir das Versprechen ablehnen.

# JSON

Ein weiteres Thema, das wir heute besucht haben, ist [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) – Javascript Object Notation. Es handelt sich um ein leichtes Format, das zum Speichern und Transformieren von Daten verwendet wird.

Wenn wir eine Anfrage an den Server stellen, um die Daten abzurufen, werden die Daten als JSON-String an uns gesendet. Da JSON ein String und kein Objekt ist, müssen wir den JSON in einen Javascript-Wert konvertieren.

Wir tun dies, indem wir eine Methode JSON.parse() verwenden. Wir können einen Javascript-Wert auch in einen JSON-String konvertieren, indem wir JSON.stringify() aufrufen. Überprüfen Sie die Beispiele im JSON-Verzeichnis.
