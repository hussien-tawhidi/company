import React, { useEffect, useState } from "react";
const Themetoggle = () => {
  const [theme, settheme] = useState(localStorage.getItem("theme"));
  const themetoggle = () => {
    settheme(theme === "dark" ? "light" : "dark");
    //   alert("Hello")
  };
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <div className='mode-icon' onClick={themetoggle}>
      {theme === "dark" ? (
        <i className='bi bi-cloud-moon'></i>
      ) : (
        <i className='bi bi-cloud-sun'></i>
      )}
    </div>
  );
};

export default Themetoggle;
