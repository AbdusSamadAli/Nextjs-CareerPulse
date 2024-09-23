// components/ui/loader.jsx
import React from "react";

const Loader = ({ size = "6", className = "" }) => {
  return (
    <div className={`animate-spin w-${size} h-${size} border-4 border-t-4 border-blue-500 rounded-full ${className}`}></div>
  );
};

export default Loader;
