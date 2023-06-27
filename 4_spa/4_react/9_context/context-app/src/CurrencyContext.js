// wir importieren createContext von react.
import { createContext } from "react";

// Wir initialisieren unseren context und stellen den default wert ein (meist "null")
const CurrencyContext = createContext({ type: '€', conversion: 1 });

// wir exportieren unseren neuen context
export { CurrencyContext }
