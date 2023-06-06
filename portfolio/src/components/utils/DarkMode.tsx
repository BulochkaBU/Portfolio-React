"use client";

import { useState } from "react";

interface Props {
  dark: string;
  light: string;
}
export default function DarkMode({ dictionary }: { dictionary: Props }) {
  const [currentMode, setCurrentMode] = useState<string>(dictionary.light);

  const changeMode = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      setCurrentMode(dictionary.light);
    } else {
      document.documentElement.classList.add("dark");
      setCurrentMode(dictionary.dark);
    }
  };
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        onClick={() => changeMode()}
      />
      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-pink-300 dark:peer-focus:ring-pink-600 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-pink-600"></div>
      <span className="ml-3 font-bold text-slate-800 dark:text-white ">
        {currentMode}
      </span>
    </label>
  );
}
