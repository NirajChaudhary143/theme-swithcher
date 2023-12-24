import { useState } from "react";
import ToggleContext from "./ToggleContext";

export default function ToggleContextProvider({ children }) {
  const [theme, setTheme] = useState("light");
  return (
    <ToggleContext.Provider value={{ theme, setTheme }}>
      {children}
    </ToggleContext.Provider>
  );
}
