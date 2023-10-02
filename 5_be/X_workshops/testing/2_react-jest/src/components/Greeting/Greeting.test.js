import React from "react";

// Wir importieren die methode .render(); aus der testbibliothek, diese methode sorgt dafür, das ein einzelner komponent gerendert werden kann.
import { render } from '@testing-library/react';

// Wir importieren den komponenten
import Greeting from "./Greeting";

// wir schreiben wieder deklarativ einen test:
test('renders a greeting message with the provided name', () =>
{
    // wir sagen, wir wollen die methode .getByText(); von render nutzen, um das element anhand des textes zu finden.
    const { getByText } = render(<Greeting name="Rick"/>);

    // wir legen das element auf eine variable
    const greetingElement = getByText('Hello, Rick!');

    // wir erwarten, dass das element sich im dokument befindet:
    expect(greetingElement).toBeInTheDocument();
});
