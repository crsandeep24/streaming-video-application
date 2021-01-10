import React from "react";
import "../style.css";

const DarkMode = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  React.useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div>
      <button
        className="ui orange button"
        onClick={() => setDarkMode(!darkMode)}
      >
        Toggle Dark Mode
      </button>
    </div>
  );
};

export default DarkMode;
