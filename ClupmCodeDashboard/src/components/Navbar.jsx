import React, { useState, useRef, useEffect } from "react";
import {
  Menu,
  Search,
  Grid3x3,
  Maximize2,
  Bell,
  Settings,
  ChevronDown,
  ShoppingCart,
  Layers,
} from "lucide-react";
import login2 from "../assets/login2.svg"
const Navbar = ({ onToggleSidebar }) => {
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [appsGridOpen, setAppsGridOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [sidebarColor, setSidebarColor] = useState("blue");
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  // Close on clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="bg-slate-800 px-6 py-3 flex items-center justify-between  relative">
      <div className="flex items-center space-x-4">
        <div className="flex items-center justify-center flex-shrink-0 block  md:hidden">
           <img src={login2} alt="logo" className="w-8 h-8 " />
        </div>
         
        <button
          onClick={onToggleSidebar}
          className="hover:bg-slate-700 p-2 rounded transition"
        >
          <Menu className="w-5 h-5" />
        </button>
        <div className="relative hidden lg:block">
          <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-slate-700/50 pl-10 pr-4 py-2 rounded w-64 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-slate-700"
          />
        </div>

        {/* Mega Menu Dropdown */}
        <div className="relative hidden lg:block">
          <button
            onClick={() => setMegaMenuOpen(!megaMenuOpen)}
            className="flex items-center space-x-2 px-3 py-2 hover:bg-slate-700 rounded text-sm transition"
          >
            <span>Mega Menu</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                megaMenuOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          {megaMenuOpen && (
            <div className="absolute top-full left-0 mt-2 w-[900px] bg-slate-800 border border-slate-700 rounded-lg shadow-2xl z-[9999]">
              <div className="grid grid-cols-4 gap-6 p-8">
                {/* UI Components */}
                <div>
                  <h3 className="font-bold text-white text-sm mb-4">
                    UI Components
                  </h3>
                  <ul className="space-y-2 text-sm text-slate-400">
                    <li className="hover:text-indigo-400 cursor-pointer transition">
                      Lightbox
                    </li>
                    <li className="hover:text-indigo-400 cursor-pointer transition">
                      Range Slider
                    </li>
                    <li className="hover:text-indigo-400 cursor-pointer transition">
                      Sweet Alert
                    </li>
                    <li className="hover:text-indigo-400 cursor-pointer transition">
                      Rating
                    </li>
                    <li className="hover:text-indigo-400 cursor-pointer transition">
                      Forms
                    </li>
                    <li className="hover:text-indigo-400 cursor-pointer transition">
                      Tables
                    </li>
                    <li className="hover:text-indigo-400 cursor-pointer transition">
                      Charts
                    </li>
                  </ul>
                </div>
                {/* Applications */}
                <div>
                  <h3 className="font-bold text-white text-sm mb-4">
                    Applications
                  </h3>
                  <ul className="space-y-2 text-sm text-slate-400">
                    <li className="hover:text-indigo-400 cursor-pointer transition">
                      Ecommerce
                    </li>
                    <li className="hover:text-indigo-400 cursor-pointer transition">
                      Calendar
                    </li>
                    <li className="hover:text-indigo-400 cursor-pointer transition">
                      Email
                    </li>
                    <li className="hover:text-indigo-400 cursor-pointer transition">
                      Projects
                    </li>
                    <li className="hover:text-indigo-400 cursor-pointer transition">
                      Tasks
                    </li>
                    <li className="hover:text-indigo-400 cursor-pointer transition">
                      Contacts
                    </li>
                  </ul>
                </div>
                {/* Extra Pages */}
                <div>
                  <h3 className="font-bold text-white text-sm mb-4">
                    Extra Pages
                  </h3>
                  <ul className="space-y-2 text-sm text-slate-400">
                    <li className="hover:text-indigo-400 cursor-pointer transition">
                      Light Sidebar
                    </li>
                    <li className="hover:text-indigo-400 cursor-pointer transition">
                      Compact Sidebar
                    </li>
                    <li className="hover:text-indigo-400 cursor-pointer transition">
                      Horizontal layout
                    </li>
                    <li className="hover:text-indigo-400 cursor-pointer transition">
                      Maintenance
                    </li>
                    <li className="hover:text-indigo-400 cursor-pointer transition">
                      Coming Soon
                    </li>
                    <li className="hover:text-indigo-400 cursor-pointer transition">
                      Timeline
                    </li>
                    <li className="hover:text-indigo-400 cursor-pointer transition">
                      FAQs
                    </li>
                  </ul>
                </div>
                {/* UI Components (duplicate) */}
                <div>
                  <h3 className="font-bold text-white text-sm mb-4">
                    UI Components
                  </h3>
                  <ul className="space-y-2 text-sm text-slate-400">
                    <li className="hover:text-indigo-400 cursor-pointer transition">
                      Lightbox
                    </li>
                    <li className="hover:text-indigo-400 cursor-pointer transition">
                      Range Slider
                    </li>
                    <li className="hover:text-indigo-400 cursor-pointer transition">
                      Sweet Alert
                    </li>
                    <li className="hover:text-indigo-400 cursor-pointer transition">
                      Rating
                    </li>
                    <li className="hover:text-indigo-400 cursor-pointer transition">
                      Forms
                    </li>
                    <li className="hover:text-indigo-400 cursor-pointer transition">
                      Tables
                    </li>
                    <li className="hover:text-indigo-400 cursor-pointer transition">
                      Charts
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center space-x-3">
        <div className="relative lg:hidden">
          {/* Mobile Search Icon */}
          <button
            onClick={() => setOpen(!open)}
            className="hover:bg-slate-700 p-2 rounded transition block lg:hidden"
          >
            <Search className="w-5 h-5 text-white" />
          </button>

          {/* Dropdown Search Box */}
          {open && (
            <div
              ref={dropdownRef}
              className="absolute right-0 mt-2 w-64 bg-[#1f273f] border border-slate-700 rounded-lg p-3 shadow-xl animate-fadeIn z-[9999]"
            >
              <div className="flex items-center bg-[#1a2238] border border-slate-700 rounded-lg px-3 py-2">
                <input
                  type="text"
                  placeholder="Search ..."
                  className="flex-1 bg-transparent outline-none text-white placeholder-gray-400"
                />
                <button className="bg-indigo-500 hover:bg-indigo-600 p-2 rounded text-white">
                  <Search size={16} />
                </button>
              </div>
            </div>
          )}
        </div>
        {/* Language Dropdown */}
        <div className="relative">
          <button
            onClick={() => setLanguageOpen(!languageOpen)}
            className="hover:bg-slate-700 p-2 rounded transition flex items-center space-x-1"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png"
              alt="Language"
              className="w-6 h-4 rounded"
            />
            <ChevronDown
              className={`w-3 h-3 transition-transform ${
                languageOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          {languageOpen && (
            <div className="absolute top-full right-0 mt-2 w-40 bg-slate-800 border border-slate-700 rounded-lg shadow-xl z-[9999]">
              {["Spanish", "German", "Italian", "Russian", "English"].map(
                (lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setSelectedLanguage(lang);
                      setLanguageOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-slate-700 transition ${
                      selectedLanguage === lang
                        ? "bg-indigo-600"
                        : "text-slate-400"
                    }`}
                  >
                    {lang}
                  </button>
                )
              )}
            </div>
          )}
        </div>
        {/* Apps Grid Dropdown */}
        <div className="relative hidden lg:block">
          <button
            onClick={() => setAppsGridOpen(!appsGridOpen)}
            className="hover:bg-slate-700 p-2 rounded transition"
          >
            <Grid3x3 className="w-5 h-5" />
          </button>
          {appsGridOpen && (
            <div className="absolute top-full right-0 mt-2 w-80 bg-slate-800 border border-slate-700 rounded-lg shadow-xl z-[9999] p-6">
              <div className="grid grid-cols-3 gap-4">
                {[
                  "GitHub",
                  "Bitbucket",
                  "Dribbble",
                  "Dropbox",
                  "Mail Chimp",
                  "Slack",
                ].map((app) => (
                  <div
                    key={app}
                    className="flex flex-col items-center space-y-2 p-3 hover:bg-slate-700 rounded cursor-pointer transition"
                  >
                    <div className="w-10 h-10 bg-indigo-600/20 rounded flex items-center justify-center">
                      <span className="text-2xl">{app[0]}</span>
                    </div>
                    <span className="text-xs text-center">{app}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <button className="hover:bg-slate-700 p-2 rounded transition hidden lg:block">
          <Maximize2 className="w-5 h-5" />
        </button>
        {/* Notifications Dropdown */}
        <div className="relative">
          <button
            onClick={() => setNotificationsOpen(!notificationsOpen)}
            className="hover:bg-slate-700 p-2 rounded transition relative"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 bg-red-500 text-xs w-4 h-4 rounded-full flex items-center justify-center text-[10px]">
              3
            </span>
          </button>
          {notificationsOpen && (
            <div className="absolute top-full right-0 mt-2 w-80 bg-slate-800 border border-slate-700 rounded-lg shadow-xl z-[9999]">
              <div className="p-4 border-b border-slate-700 flex justify-between items-center">
                <h3 className="font-semibold">Notifications</h3>
                <a
                  href="#"
                  className="text-indigo-400 hover:text-indigo-300 text-sm"
                >
                  View All
                </a>
              </div>
              <div className="max-h-96 overflow-y-auto">
                <div className="p-4 border-b border-slate-700/50 hover:bg-slate-700/30 transition">
                  <div className="flex space-x-3">
                    <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <ShoppingCart className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-sm">
                        Your order is placed
                      </p>
                      <p className="text-xs text-slate-400 mt-1">
                        If several languages coalesce the grammar
                      </p>
                      <p className="text-xs text-slate-500 mt-1">⏱ 3 min ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        {/* Profile Menu Dropdown */}
        <div className="relative">
          <button
            onClick={() => setProfileMenuOpen(!profileMenuOpen)}
            className="flex items-center space-x-2 hover:bg-slate-700 px-2 py-1 rounded cursor-pointer transition"
          >
            <img
              src="https://i.pravatar.cc/150?img=12"
              alt="User"
              className="w-8 h-8 rounded-full"
            />
            <span className="text-sm">Admin</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                profileMenuOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          {profileMenuOpen && (
            <div className="absolute top-full right-0 mt-2 w-48 bg-slate-800 border border-slate-700 rounded-lg shadow-xl z-[9999]">
              <a
                href="#"
                className="block px-4 py-3 hover:bg-slate-700 text-sm border-b border-slate-700 transition"
              >
                <div className="flex items-center space-x-2">
                  <span>👤</span>
                  <span>Profile</span>
                </div>
              </a>
              <a
                href="#"
                className="block px-4 py-3 hover:bg-slate-700 text-sm border-b border-slate-700 transition"
              >
                <div className="flex items-center space-x-2">
                  <span>💼</span>
                  <span>My Wallet</span>
                </div>
              </a>
              <a
                href="#"
                className="block px-4 py-3 hover:bg-slate-700 text-sm border-b border-slate-700 transition"
              >
                <div className="flex items-center space-x-2">
                  <span>⚙️</span>
                  <span>Settings</span>
                </div>
              </a>
              <button
                onClick={() => alert("Logged out!")}
                className="w-full text-left px-4 py-3 hover:bg-red-600/20 text-red-400 hover:text-red-300 text-sm transition"
              >
                <div className="flex items-center space-x-2">
                  <span>🚪</span>
                  <span>Logout</span>
                </div>
              </button>
            </div>
          )}
        </div>

        <button className="hover:bg-slate-700 p-2 rounded transition">
          <Settings className="w-5 h-5" onClick={() => setSettingsOpen(true)} />
          {/* Settings Modal */}
          {settingsOpen && (
            <div className="absolute top-0  right-0 max-h-screen bg-black/50 flex items-center justify-center z-[9999]">
              <div className="bg-slate-800 rounded-lg p-6  w-96 max-h-screen overflow-y-auto border border-slate-700">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">Settings</h2>
                  <button
                    onClick={() => setSettingsOpen(false)}
                    className="text-slate-400 hover:text-white text-2xl"
                  >
                    ×
                  </button>
                </div>

                {/* Layouts */}
                <div className="mb-8">
                  <h3 className="text-slate-300 font-semibold mb-3">Layouts</h3>
                  <div className="flex space-x-3">
                    <button className="px-4 py-2 bg-indigo-600 rounded text-sm hover:bg-indigo-700 transition">
                      Vertical
                    </button>
                    <button className="px-4 py-2 bg-slate-700 text-slate-300 rounded text-sm hover:bg-slate-600 transition">
                      Horizontal
                    </button>
                  </div>
                </div>

                {/* Layouts Mode */}
                <div className="mb-8">
                  <h3 className="text-slate-300 font-semibold mb-3">
                    Layouts Mode
                  </h3>
                  <div className="flex space-x-3">
                    <button className="px-4 py-2 bg-slate-700 text-slate-300 rounded text-sm hover:bg-slate-600 transition">
                      Light
                    </button>
                    <button className="px-4 py-2 bg-indigo-600 rounded text-sm hover:bg-indigo-700 transition">
                      Dark
                    </button>
                  </div>
                </div>

                {/* Layout Width */}
                <div className="mb-8">
                  <h3 className="text-slate-300 font-semibold mb-3">
                    Layout Width
                  </h3>
                  <div className="flex space-x-3">
                    <button className="px-4 py-2 bg-indigo-600 rounded text-sm hover:bg-indigo-700 transition">
                      Fluid
                    </button>
                    <button className="px-4 py-2 bg-slate-700 text-slate-300 rounded text-sm hover:bg-slate-600 transition">
                      Boxed
                    </button>
                    <button className="px-4 py-2 bg-slate-700 text-slate-300 rounded text-sm hover:bg-slate-600 transition">
                      Scrollable
                    </button>
                  </div>
                </div>

                {/* Topbar Theme */}
                <div className="mb-8">
                  <h3 className="text-slate-300 font-semibold mb-3">
                    Topbar Theme
                  </h3>
                  <div className="flex space-x-3">
                    <button className="px-4 py-2 bg-indigo-600 rounded text-sm hover:bg-indigo-700 transition">
                      Light
                    </button>
                    <button className="px-4 py-2 bg-slate-700 text-slate-300 rounded text-sm hover:bg-slate-600 transition">
                      Dark
                    </button>
                  </div>
                </div>

                {/* Left Sidebar Type */}
                <div className="mb-8">
                  <h3 className="text-slate-300 font-semibold mb-3">
                    Left Sidebar Type
                  </h3>
                  <div className="flex space-x-3">
                    <button className="px-4 py-2 bg-indigo-600 rounded text-sm hover:bg-indigo-700 transition">
                      Default
                    </button>
                    <button className="px-4 py-2 bg-slate-700 text-slate-300 rounded text-sm hover:bg-slate-600 transition">
                      Compact
                    </button>
                    <button className="px-4 py-2 bg-slate-700 text-slate-300 rounded text-sm hover:bg-slate-600 transition">
                      Icon
                    </button>
                  </div>
                </div>

                {/* Left Sidebar Color Options */}
                <div className="mb-8">
                  <h3 className="text-slate-300 font-semibold mb-3">
                    Left Sidebar Color Options
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {[
                      "bg-slate-900",
                      "bg-white",
                      "bg-indigo-500",
                      "bg-teal-500",
                      "bg-pink-500",
                      "bg-orange-500",
                      "bg-blue-500",
                    ].map((color, index) => (
                      <button
                        key={index}
                        onClick={() => setSidebarColor(color)}
                        className={`w-8 h-8 rounded-full border-2 transition ${
                          sidebarColor === color
                            ? "border-indigo-400"
                            : "border-transparent hover:border-slate-400"
                        } ${color}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
