import React from "react";

import { render, fireEvent } from '@testing-library/react';

import Button from "./Button";

test('renders the component with the provided label', () => {
    // wir erstellen eine variable in der wir den inhalt des labels angeben:
    const labelText = "Click Me!";

    // wir rendern das element mit dem label:
    const { getByText } = render(<Button label={labelText}/>);

    const buttonElement = getByText(labelText);

    expect(buttonElement).toBeInTheDocument();
});

test('calls the onClick function when the button is clicked', () =>
{
    const labelText = "Click Me!";

    // wir erstellen eine mock funktion, die der test ausführen kann
    const onClick = jest.fn();

    const { getByText } = render(<Button label={labelText} onClick={onClick}/>);

    const buttonElement = getByText(labelText);

    // wir erwarten, dass das element geklickt werden kann:
    fireEvent.click(buttonElement);
});
