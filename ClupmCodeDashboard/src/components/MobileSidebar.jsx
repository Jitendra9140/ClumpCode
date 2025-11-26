import React, { useState, useEffect } from "react";
import Portal from "./Portal";
import {
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
} from "lucide-react";

function MobileSidebar({
  isOpen = false,
  onClose = () => {},
  textColor = "text-slate-400",
}) {
  // controlled component: `isOpen` and `onClose` provided by parent (Dashboard)
  // textColor: theme class for text color, e.g. "text-slate-400", "text-white", "text-indigo-400"
  const [hovered, setHovered] = useState(null);
  const [anchorRect, setAnchorRect] = useState(null);

  // when sidebar is open, prevent body scroll to avoid double scrollbars
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="h-screen flex bg-slate-900">
      <div
        className={`fixed top-15 left-0 h-full w-16 bg-[#1D283C] z-50 transform transition-transform duration-300 border-r border-slate-700 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div
          className="overflow-y-auto h-full"
          style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}
        >
          <div className="flex flex-col items-center py-4 space-y-2">
            {[
              {
                id: 1,
                icon: Home,
                label: "Dashboards",
                items: ["Default", "Saas", "Crypto", "Blog", "Jobs"],
              },
              {
                id: 2,
                icon: Calendar,
                label: "Calendar",
                items: ["Events", "Meetings", "Tasks"],
              },
              {
                id: 3,
                icon: MessageSquare,
                label: "Chat",
                items: ["Direct Messages", "Channels", "Groups"],
              },
              {
                id: 4,
                icon: Folder,
                label: "File Manager",
                items: ["My Files", "Shared", "Recent", "Trash"],
              },
              {
                id: 5,
                icon: ShoppingCart,
                label: "Ecommerce",
                items: [
                  "Products",
                  "Product Detail",
                  "Orders",
                  "Customers",
                  "Cart",
                  "Checkout",
                  "Shops",
                  "Add Product",
                ],
              },
              {
                id: 6,
                icon: DollarSign,
                label: "Crypto",
                items: ["Wallet", "Buy/Sell", "Exchange", "Settings"],
              },
              {
                id: 7,
                icon: Mail,
                label: "Email",
                items: ["Inbox", "Sent", "Draft", "Trash"],
              },
              {
                id: 8,
                icon: FileText,
                label: "Invoices",
                items: ["List", "Create", "Details"],
              },
              {
                id: 9,
                icon: Briefcase,
                label: "Projects",
                items: ["List", "Overview", "Create"],
              },
              {
                id: 10,
                icon: CheckSquare,
                label: "Tasks",
                items: ["List", "Kanban", "Create"],
              },
              {
                id: 11,
                icon: Users,
                label: "Contacts",
                items: ["Grid", "List", "Profile"],
              },
              {
                id: 12,
                icon: BookOpen,
                label: "Blog",
                items: ["List", "Grid", "Details"],
              },
              {
                id: 13,
                icon: Clipboard,
                label: "Jobs",
                items: ["List", "Grid", "Apply", "Details"],
              },
              {
                id: 14,
                icon: Lock,
                label: "Authentication",
                items: ["Login", "Register", "Forgot Password", "Lock Screen"],
              },
              {
                id: 15,
                icon: FileQuestion,
                label: "Utility",
                items: [
                  "Starter Page",
                  "Maintenance",
                  "Coming Soon",
                  "Timeline",
                  "FAQs",
                ],
              },
              {
                id: 16,
                icon: Layers,
                label: "UI Elements",
                items: [
                  "Alerts",
                  "Buttons",
                  "Cards",
                  "Carousel",
                  "Dropdowns",
                  "Grid",
                  "Images",
                  "Modals",
                ],
              },
              {
                id: 17,
                icon: FormInput,
                label: "Forms",
                badge: "6",
                items: [
                  "Elements",
                  "Validation",
                  "Advanced",
                  "Editors",
                  "File Upload",
                  "Wizard",
                ],
              },
              {
                id: 18,
                icon: Table,
                label: "Tables",
                items: ["Basic", "Advanced", "Data Tables"],
              },
              {
                id: 19,
                icon: BarChart3,
                label: "Charts",
                items: ["Apex", "Chartjs", "E-charts", "Sparkline"],
              },
              {
                id: 20,
                icon: CircleDot,
                label: "Icons",
                items: [
                  "Boxicons",
                  "Material Design",
                  "Dripicons",
                  "Font Awesome",
                ],
              },
              {
                id: 21,
                icon: Map,
                label: "Maps",
                items: ["Google Maps", "Vector Maps", "Leaflet Maps"],
              },
              {
                id: 22,
                icon: GitBranch,
                label: "Multi Level",
                items: ["Level 1.1", "Level 1.2", "Level 1.3"],
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="relative w-full flex justify-center"
                  onMouseEnter={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    setAnchorRect(rect);
                    setHovered(item.id);
                  }}
                  onMouseLeave={() => {
                    setHovered(null);
                    setAnchorRect(null);
                  }}
                >
                  <button
                    className={`p-3 hover:bg-slate-700/60 rounded-md transition ${textColor} hover:text-white relative`}
                  >
                    <Icon className="w-6 h-6" />
                    {item.badge && (
                      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full font-medium">
                        {item.badge}
                      </span>
                    )}
                  </button>
                  {hovered === item.id && anchorRect && isOpen && (
                    <Portal>
                      <div
                        style={{
                          position: "fixed",
                          top: anchorRect.top + window.scrollY + "px",
                          left: anchorRect.right + 8 + window.scrollX + "px",
                          width: 260,
                        }}
                        className="bg-[#2C3142] text-white p-4  shadow-2xl z-[99999] border border-slate-600"
                      >
                        <h3 className="font-semibold text-base mb-3 text-white flex items-center">
                          <Icon className="w-4 h-4 mr-2 text-indigo-400" />
                          {item.label}
                        </h3>
                        <ul className="space-y-1">
                          {item.items.map((sub, i) => (
                            <li
                              key={i}
                              className={`text-sm ${textColor} hover:text-white hover:bg-slate-700/50 px-3 py-2 rounded cursor-pointer transition`}
                            >
                              {sub}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Portal>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileSidebar;
