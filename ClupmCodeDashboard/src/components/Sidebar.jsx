import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  Home,
  Calendar,
  MessageSquare,
  Folder,
  ShoppingCart,
  DollarSign,
  Mail,
  FileText,
  Briefcase,
  CheckSquare,
  Users,
  BookOpen,
  Clipboard,
  Lock,
  FileQuestion,
  Layers,
  FormInput,
  Table,
  BarChart3,
  CircleDot,
  Map,
  GitBranch,
  UserCircle,
  Send,
  List,
  TrendingUp,
} from "lucide-react";
import login2 from "../assets/login2.svg";

// SidebarItem Component
function SidebarItem({ icon, label, hasSubmenu, badge, collapsed, onClick }) {
  return (
    <div 
      onClick={onClick}
      className="flex items-center justify-between px-3 py-2 hover:bg-slate-700 rounded cursor-pointer text-slate-300 hover:text-white transition-colors group"
    >
      <div className="flex items-center space-x-3">
        <span className="group-hover:text-indigo-400">{icon}</span>
        {!collapsed && <span className="text-sm">{label}</span>}
      </div>
      {!collapsed && (
        <div className="flex items-center space-x-2">
          {badge && (
            <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full font-medium">
              {badge}
            </span>
          )}
          {hasSubmenu && <ChevronDown className="w-4 h-4 text-slate-500" />}
        </div>
      )}
    </div>
  );
}

// Sidebar Component
function Sidebar({ collapsed, isMobile, onClose }) {
  const [hovered, setHovered] = useState(null);
  const [dashboardOpen, setDashboardOpen] = useState(true);
  const [ecommerceOpen, setEcommerceOpen] = useState(false);
  const [cryptoOpen, setCryptoOpen] = useState(false);
  const [emailOpen, setEmailOpen] = useState(false);

  const menu = [
    {
      id: 1,
      icon: <Home className="w-6 h-6" />,
      label: "Dashboards",
      items: ["Default", "Saas", "Crypto", "Blog", "Jobs"],
    },
    {
      id: 2,
      icon: <Calendar className="w-6 h-6" />,
      label: "Calendar",
      items: ["Events", "Meetings", "Tasks"],
    },
    {
      id: 3,
      icon: <MessageSquare className="w-6 h-6" />,
      label: "Chat",
      items: ["Direct Messages", "Channels", "Groups"],
    },
    {
      id: 4,
      icon: <Folder className="w-6 h-6" />,
      label: "File Manager",
      items: ["My Files", "Shared", "Recent", "Trash"],
    },
    {
      id: 5,
      icon: <ShoppingCart className="w-6 h-6" />,
      label: "Ecommerce",
      items: ["Products", "Product Detail", "Orders", "Customers", "Cart", "Checkout", "Shops", "Add Product"],
    },
    {
      id: 6,
      icon: <DollarSign className="w-6 h-6" />,
      label: "Crypto",
      items: ["Wallet", "Buy/Sell", "Exchange", "Settings"],
    },
    {
      id: 7,
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      items: ["Inbox", "Sent", "Draft", "Trash"],
    },
    {
      id: 8,
      icon: <FileText className="w-6 h-6" />,
      label: "Invoices",
      items: ["List", "Create", "Details"],
    },
    {
      id: 9,
      icon: <Briefcase className="w-6 h-6" />,
      label: "Projects",
      items: ["List", "Overview", "Create"],
    },
    {
      id: 10,
      icon: <CheckSquare className="w-6 h-6" />,
      label: "Tasks",
      items: ["List", "Kanban", "Create"],
    },
    {
      id: 11,
      icon: <Users className="w-6 h-6" />,
      label: "Contacts",
      items: ["Grid", "List", "Profile"],
    },
    {
      id: 12,
      icon: <BookOpen className="w-6 h-6" />,
      label: "Blog",
      items: ["List", "Grid", "Details"],
    },
    {
      id: 13,
      icon: <Clipboard className="w-6 h-6" />,
      label: "Jobs",
      items: ["List", "Grid", "Apply", "Details"],
    },
    {
      id: 14,
      icon: <UserCircle className="w-6 h-6" />,
      label: "Profile",
      items: ["Overview", "Settings", "Security"],
    },
    {
      id: 15,
      icon: <Send className="w-6 h-6" />,
      label: "Email Sent",
      items: ["Sent Items", "Drafts"],
    },
    {
      id: 16,
      icon: <List className="w-6 h-6" />,
      label: "Lists",
      items: ["Todo", "Shopping", "Notes"],
    },
    {
      id: 17,
      icon: <TrendingUp className="w-6 h-6" />,
      label: "Analytics",
      items: ["Overview", "Reports", "Insights"],
    },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isMobile && !collapsed && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`
          ${
            isMobile
              ? `fixed top-0 left-0 h-full z-50 transition-transform duration-300 ${
                  collapsed ? "-translate-x-full" : "translate-x-0"
                }`
              : "relative"
          }
          ${collapsed && !isMobile ? "w-20" : "w-64"}
          bg-[#2C3142] transition-all sidebar duration-300 border-r border-slate-700
          ${collapsed && !isMobile ? "overflow-visible" : "overflow-y-auto"}
        `}
      >
        {/* Logo */}
        <div className="flex items-center justify-between h-16 px-5 border-b border-slate-700">
          <div className="flex items-center space-x-2">
            <img src={login2} alt="logo" className="w-8 h-8 " />
            {!collapsed && <span className="font-bold text-xl text-white">SKOTE</span>}
          </div>

          {/* Close button for mobile */}
          {isMobile && !collapsed && (
            <button
              onClick={onClose}
              className="lg:hidden p-2 hover:bg-slate-700 rounded"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          )}
        </div>

        {/* Collapsed Icon Menu with Hover Dropdowns (Desktop) */}
        {collapsed && !isMobile && (
          <div className="flex flex-col items-center py-4 space-y-2">
            {menu.map((m) => (
              <div
                key={m.id}
                className="relative w-full flex justify-center"
                onMouseEnter={() => setHovered(m.id)}
                onMouseLeave={() => setHovered(null)}
              >
                <button className="p-3 hover:bg-slate-700/60 rounded-md transition text-slate-400 hover:text-white">
                  {m.icon}
                </button>

                {/* Hover Dropdown Panel */}
                {hovered === m.id && (
                  <div className="absolute left-full  top-0 bg-[#2C3142] text-white w-64 p-4  shadow-2xl z-[9999] border border-slate-600">
                    <h3 className="font-semibold text-base mb-3 text-white flex items-center">
                      <Home className="w-4 h-4 mr-2" />
                      {m.label}
                    </h3>
                    <ul className="space-y-1">
                      {m.items.map((item, i) => (
                        <li
                          key={i}
                          className="text-sm text-slate-400 hover:text-white hover:bg-slate-700/50 px-3 py-2 rounded cursor-pointer transition"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Expanded Menu (Desktop & Mobile) */}
        {!collapsed && (
          <div className="px-3 mt-6">
            <div className="text-xs text-slate-500 uppercase mb-3 px-3 font-semibold">
              Menu
            </div>
            
            {/* Dashboards with Dropdown */}
            <div className="mb-4">
              <div 
                onClick={() => setDashboardOpen(!dashboardOpen)}
                className="flex items-center justify-between px-3 py-2 bg-slate-700/30 text-white rounded cursor-pointer hover:bg-slate-700/50 transition"
              >
                <div className="flex items-center space-x-3">
                  <Home className="w-5 h-5" />
                  <span className="font-medium">Dashboards</span>
                </div>
                {dashboardOpen ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </div>

              {/* Dashboard Submenu */}
              {dashboardOpen && (
                <div className="ml-4 mt-2 space-y-1">
                  <div className="px-3 py-2 text-sm text-white hover:bg-slate-700/30 rounded cursor-pointer transition">
                    Default
                  </div>
                  <div className="px-3 py-2 text-sm text-slate-400 hover:text-white hover:bg-slate-700/30 rounded cursor-pointer transition">
                    Saas
                  </div>
                  <div className="px-3 py-2 text-sm text-slate-400 hover:text-white hover:bg-slate-700/30 rounded cursor-pointer transition">
                    Crypto
                  </div>
                  <div className="px-3 py-2 text-sm text-slate-400 hover:text-white hover:bg-slate-700/30 rounded cursor-pointer transition">
                    Blog
                  </div>
                  <div className="px-3 py-2 text-sm text-slate-400 hover:text-white hover:bg-slate-700/30 rounded cursor-pointer transition">
                    Jobs
                  </div>
                </div>
              )}
            </div>

            <div className="text-xs text-slate-500 uppercase mb-3 px-3 font-semibold">
              Apps
            </div>
            <div className="space-y-1">
              <SidebarItem
                icon={<Calendar className="w-5 h-5" />}
                label="Calendar"
                collapsed={collapsed}
              />
              <SidebarItem
                icon={<MessageSquare className="w-5 h-5" />}
                label="Chat"
                collapsed={collapsed}
              />
              <SidebarItem
                icon={<Folder className="w-5 h-5" />}
                label="File Manager"
                collapsed={collapsed}
              />
              
              {/* Ecommerce Dropdown */}
              <div className="mb-2">
                <div 
                  onClick={() => setEcommerceOpen(!ecommerceOpen)}
                  className="flex items-center justify-between px-3 py-2 hover:bg-slate-700 rounded cursor-pointer text-slate-300 hover:text-white transition-colors group"
                >
                  <div className="flex items-center space-x-3">
                    <ShoppingCart className="w-5 h-5 group-hover:text-indigo-400" />
                    <span className="text-sm">Ecommerce</span>
                  </div>
                  {ecommerceOpen ? (
                    <ChevronUp className="w-4 h-4 text-slate-500" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-500" />
                  )}
                </div>

                {/* Ecommerce Submenu */}
                {ecommerceOpen && (
                  <div className="ml-8 mt-1 space-y-1">
                    <div className="px-3 py-2 text-sm text-slate-400 hover:text-white hover:bg-slate-700/30 rounded cursor-pointer transition">
                      Products
                    </div>
                    <div className="px-3 py-2 text-sm text-slate-400 hover:text-white hover:bg-slate-700/30 rounded cursor-pointer transition">
                      Product Detail
                    </div>
                    <div className="px-3 py-2 text-sm text-slate-400 hover:text-white hover:bg-slate-700/30 rounded cursor-pointer transition">
                      Orders
                    </div>
                    <div className="px-3 py-2 text-sm text-slate-400 hover:text-white hover:bg-slate-700/30 rounded cursor-pointer transition">
                      Customers
                    </div>
                    <div className="px-3 py-2 text-sm text-slate-400 hover:text-white hover:bg-slate-700/30 rounded cursor-pointer transition">
                      Cart
                    </div>
                    <div className="px-3 py-2 text-sm text-slate-400 hover:text-white hover:bg-slate-700/30 rounded cursor-pointer transition">
                      Checkout
                    </div>
                    <div className="px-3 py-2 text-sm text-slate-400 hover:text-white hover:bg-slate-700/30 rounded cursor-pointer transition">
                      Shops
                    </div>
                    <div className="px-3 py-2 text-sm text-slate-400 hover:text-white hover:bg-slate-700/30 rounded cursor-pointer transition">
                      Add Product
                    </div>
                  </div>
                )}
              </div>

              {/* Crypto Dropdown - Example for you to replicate */}
              <div className="mb-2">
                <div 
                  onClick={() => setCryptoOpen(!cryptoOpen)}
                  className="flex items-center justify-between px-3 py-2 hover:bg-slate-700 rounded cursor-pointer text-slate-300 hover:text-white transition-colors group"
                >
                  <div className="flex items-center space-x-3">
                    <DollarSign className="w-5 h-5 group-hover:text-indigo-400" />
                    <span className="text-sm">Crypto</span>
                  </div>
                  {cryptoOpen ? (
                    <ChevronUp className="w-4 h-4 text-slate-500" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-500" />
                  )}
                </div>

                {/* Crypto Submenu */}
                {cryptoOpen && (
                  <div className="ml-8 mt-1 space-y-1">
                    <div className="px-3 py-2 text-sm text-slate-400 hover:text-white hover:bg-slate-700/30 rounded cursor-pointer transition">
                      Wallet
                    </div>
                    <div className="px-3 py-2 text-sm text-slate-400 hover:text-white hover:bg-slate-700/30 rounded cursor-pointer transition">
                      Buy/Sell
                    </div>
                    <div className="px-3 py-2 text-sm text-slate-400 hover:text-white hover:bg-slate-700/30 rounded cursor-pointer transition">
                      Exchange
                    </div>
                    <div className="px-3 py-2 text-sm text-slate-400 hover:text-white hover:bg-slate-700/30 rounded cursor-pointer transition">
                      Settings
                    </div>
                  </div>
                )}
              </div>

              {/* Email Dropdown - Another example */}
              <div className="mb-2">
                <div 
                  onClick={() => setEmailOpen(!emailOpen)}
                  className="flex items-center justify-between px-3 py-2 hover:bg-slate-700 rounded cursor-pointer text-slate-300 hover:text-white transition-colors group"
                >
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 group-hover:text-indigo-400" />
                    <span className="text-sm">Email</span>
                  </div>
                  {emailOpen ? (
                    <ChevronUp className="w-4 h-4 text-slate-500" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-500" />
                  )}
                </div>

                {/* Email Submenu */}
                {emailOpen && (
                  <div className="ml-8 mt-1 space-y-1">
                    <div className="px-3 py-2 text-sm text-slate-400 hover:text-white hover:bg-slate-700/30 rounded cursor-pointer transition">
                      Inbox
                    </div>
                    <div className="px-3 py-2 text-sm text-slate-400 hover:text-white hover:bg-slate-700/30 rounded cursor-pointer transition">
                      Sent
                    </div>
                    <div className="px-3 py-2 text-sm text-slate-400 hover:text-white hover:bg-slate-700/30 rounded cursor-pointer transition">
                      Draft
                    </div>
                    <div className="px-3 py-2 text-sm text-slate-400 hover:text-white hover:bg-slate-700/30 rounded cursor-pointer transition">
                      Trash
                    </div>
                  </div>
                )}
              </div>

              {/* Keep remaining items with old SidebarItem component */}
              <SidebarItem
                icon={<FileText className="w-5 h-5" />}
                label="Invoices"
                hasSubmenu
                collapsed={collapsed}
              />
              <SidebarItem
                icon={<Briefcase className="w-5 h-5" />}
                label="Projects"
                hasSubmenu
                collapsed={collapsed}
              />
              <SidebarItem
                icon={<CheckSquare className="w-5 h-5" />}
                label="Tasks"
                hasSubmenu
                collapsed={collapsed}
              />
              <SidebarItem
                icon={<Users className="w-5 h-5" />}
                label="Contacts"
                hasSubmenu
                collapsed={collapsed}
              />
              <SidebarItem
                icon={<BookOpen className="w-5 h-5" />}
                label="Blog"
                hasSubmenu
                collapsed={collapsed}
              />
              <SidebarItem
                icon={<Clipboard className="w-5 h-5" />}
                label="Jobs"
                hasSubmenu
                collapsed={collapsed}
              />
            </div>

            <div className="text-xs text-slate-500 uppercase mb-3 mt-6 px-3 font-semibold">
              Pages
            </div>
            <div className="space-y-1">
              <SidebarItem
                icon={<Lock className="w-5 h-5" />}
                label="Authentication"
                hasSubmenu
                collapsed={collapsed}
              />
              <SidebarItem
                icon={<FileQuestion className="w-5 h-5" />}
                label="Utility"
                hasSubmenu
                collapsed={collapsed}
              />
            </div>

            <div className="text-xs text-slate-500 uppercase mb-3 mt-6 px-3 font-semibold">
              Components
            </div>
            <div className="space-y-1">
              <SidebarItem
                icon={<Layers className="w-5 h-5" />}
                label="UI Elements"
                hasSubmenu
                collapsed={collapsed}
              />
              <SidebarItem
                icon={<FormInput className="w-5 h-5" />}
                label="Forms"
                badge="6"
                collapsed={collapsed}
              />
              <SidebarItem
                icon={<Table className="w-5 h-5" />}
                label="Tables"
                hasSubmenu
                collapsed={collapsed}
              />
              <SidebarItem
                icon={<BarChart3 className="w-5 h-5" />}
                label="Charts"
                hasSubmenu
                collapsed={collapsed}
              />
              <SidebarItem
                icon={<CircleDot className="w-5 h-5" />}
                label="Icons"
                hasSubmenu
                collapsed={collapsed}
              />
              <SidebarItem
                icon={<Map className="w-5 h-5" />}
                label="Maps"
                hasSubmenu
                collapsed={collapsed}
              />
              <SidebarItem
                icon={<GitBranch className="w-5 h-5" />}
                label="Multi Level"
                hasSubmenu
                collapsed={collapsed}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Sidebar;
