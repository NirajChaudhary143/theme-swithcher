import { useContext, useEffect, useState } from "react";
import ToggleContext from "../context/ToggleContext";

export default function ThemeBtn() {
  const [checked, setChecked] = useState(false);
  const { setTheme, theme } = useContext(ToggleContext);
  const handleToggle = (e) => {
    setChecked(e.target.checked);
  };
  const getHtml = document.querySelector("html");
  if (checked) {
    setTheme("dark");
  } else {
    setTheme("light");
  }
  useEffect(() => {
    getHtml.classList.remove("light", "dark");
    getHtml.classList.add(theme);
  }, [theme]);

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        onChange={handleToggle}
        value=""
        className="sr-only peer"
      />
      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      <span className="ml-3 text-sm font-medium text-gray-900">
        Toggle Theme
      </span>
    </label>
  );
}
