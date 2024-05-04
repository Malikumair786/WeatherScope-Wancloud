import React, { useEffect } from "react";
import "./loader.css";

const Loader = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="loader-container">
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
