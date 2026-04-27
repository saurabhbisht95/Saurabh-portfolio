"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  FaRegUserCircle,
  FaRss,
  FaPaperPlane,
  FaRegFolderOpen,
  FaRegMoon,
} from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";
import { ImProfile } from "react-icons/im";

const navItems = [
  { path: "#about", icon: <FaRegUserCircle />, label: "ABOUT" },
  { path: "#career", icon: <ImProfile />, label: "CAREER" },
  { path: "#projects", icon: <FaRegFolderOpen />, label: "PROJECTS" },
  { path: "#contact", icon: <FaPaperPlane />, label: "CONTACT" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  };

  return (
    <>
      {/* Mobile bottom navigation */}
      <div className="md:hidden w-full bg-white dark:bg-gray-800 shadow-lg rounded-t-xl border-t border-gray-100 dark:border-gray-700">
        <div className="flex items-center justify-around px-2 py-2">
          {navItems.map((item) => (
            <Link
              href={item.path}
              key={item.path}
              className={`flex flex-col items-center justify-center w-14 py-1 rounded-lg ${
                pathname === item.path
                  ? "bg-primary text-white"
                  : "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              <div className="text-lg">{item.icon}</div>
              <span className="text-[8px] mt-0.5 font-medium">
                {item.label}
              </span>
            </Link>
          ))}
          <button
            onClick={toggleTheme}
            className="flex flex-col items-center justify-center w-14 py-1 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
          >
            <div className="text-lg">
              {darkMode ? <MdOutlineWbSunny /> : <FaRegMoon />}
            </div>
            <span className="text-[8px] mt-0.5 font-medium">
              {darkMode ? "LIGHT" : "DARK"}
            </span>
          </button>
        </div>
      </div>

      {/* Desktop sidebar */}
      <aside className="hidden md:flex md:flex-col items-center md:h-[90vh] md:justify-start gap-3 mb-3 md:mb-0 md:py-6">
        <div className="flex flex-col items-center gap-3 w-full">
          <button
            onClick={toggleTheme}
            className="h-12 w-12 rounded-full bg-primary text-white shadow-lg flex items-center justify-center transition-transform hover:scale-105"
          >
            {darkMode ? (
              <MdOutlineWbSunny className="text-xl" />
            ) : (
              <FaRegMoon className="text-xl" />
            )}
          </button>

          <nav className="flex flex-col items-center justify-center gap-3 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-3 w-16">
            {navItems.map((item) => (
              <Link
                href={item.path}
                key={item.path}
                className={`relative flex flex-col items-center justify-center w-14 h-14 rounded-xl transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700 ${
                  pathname === item.path
                    ? "bg-primary text-white"
                    : "text-gray-500 dark:text-gray-400"
                }`}
              >
                <div className="text-xl">{item.icon}</div>
                <span className="text-[10px] mt-1 font-medium">
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
}
