import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ThemeProvider } from "./contexts/ToggleThemeMode";
import ThemeBtn from "./components/ThemeBtn";
import InputForm from "./components/InputForm";

function App() {
  const [theme, setTheme] = useState("light");
  const darkMode = () => {
    setTheme("dark");
  };

  const lightMode = () => {
    setTheme("light");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(theme);
  }, [theme]);

  return (
    <ThemeProvider value={{ theme, darkMode, lightMode }}>
      <div>
      <div className="flex justify-center items-center mt-10">
        <ThemeBtn/>
      </div>
      <InputForm />
      </div>

    </ThemeProvider>
  );
}

export default App;
