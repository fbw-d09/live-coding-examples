// Wir importieren createContext von react.
import { createContext } from 'react';

// wir initialisieren unseren context, und stellen den initial/oder default wert auf "null".
const UserDetailsContext = createContext(null);

// wir exportieren unseren neuen context
export { UserDetailsContext }
