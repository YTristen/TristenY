import { useRef, useEffect } from "react";
import Icon from "../Icon";
import "./index.scss";
interface Props {
  // value 是<"light" | "dark">
  setTheme: (value: "light" | "dark") => void;
}

const ThemeToogle = (props: Props) => {
  const themeToogleRef = useRef(null);
  const isDark = () => {
    return document.documentElement.classList.contains("theme-dark");
  };
  useEffect(() => {
    const dark = isDark();
    console.log("Tristen-Component", dark, localStorage.getItem("theme"));
    if (!dark && localStorage.getItem("theme") === "theme-dark") {
      props.setTheme("dark");
      document.documentElement.classList["add"]("theme-dark");
    }
  });

  const handleChange = () => {
    const dark = !isDark();
    console.log("Tristen-COmponemt", dark);
    props.setTheme(dark ? "dark" : "light");
    document.documentElement.classList[dark ? "add" : "remove"]("theme-dark");
    themeToogleRef?.current.setAttribute("aria-pressed", String(dark));
    localStorage.setItem("theme", dark ? "theme-dark" : "light");
  };
  return (
    <button className="ThemeToogle" onClick={handleChange} ref={themeToogleRef}>
      <span className="sr-only">Dark theme</span>
      <span className="icon light">
        <Icon icon="sun" />
      </span>
      <span className="icon dark">
        <Icon icon="moon-stars" />
      </span>
    </button>
  );
};

export default ThemeToogle;
