import React, { useState, useEffect } from "react";
import login1 from "../assets/login1.png";
import {
  SidebarItem,
  StatsCard,
  CityRow,
  ActivityItem,
  SocialCard,
  TransactionRow,
} from "../components/DahsboardHelperEle";
import Sidebar from "../components/Sidebar";
import MobileSidebar from "../components/MobileSidebar";
import Navbar from "../components/Navbar";
import EmailSentChart from "../components/EmailSentChart";

import {
  DollarSign,
  Map,
  TrendingUp,
  ShoppingBag,
  Tag,
  ArrowRight,
} from "lucide-react";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("year");
  const [isNarrow, setIsNarrow] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Auto-collapse sidebar and adapt layout for narrower screens (<= 1200px)
  useEffect(() => {
    function handleResize() {
      const narrow = window.innerWidth <= 1200;
      setIsNarrow(narrow);
      // auto collapse sidebar when narrow
      setSidebarCollapsed(narrow);
      // close mobile menu on resize to desktop
      if (!narrow) setMobileMenuOpen(false);
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      const mobile = window.innerWidth < 768; // md breakpoint
      setIsMobile(mobile);

      // On mobile, sidebar starts hidden
      if (mobile) {
        setSidebarCollapsed(true);
      }
      // if switching to desktop, ensure mobile menu closed
      if (!mobile) setMobileMenuOpen(false);
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Hamburger behavior: on md and above toggle collapse, on smaller screens open mobile drawer
  const handleHamburger = () => {
    const isMdOrAbove = window.innerWidth >= 768; // md breakpoint
    if (isMdOrAbove) {
      setSidebarCollapsed((s) => !s);
    } else {
      setMobileMenuOpen((v) => !v);
    }
  };

  const closeSidebar = () => {
    // close mobile drawer if open
    if (isMobile) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="flex h-screen bg-slate-900 text-white overflow-hidden">
      {/* Sidebar */}
      {/* On desktop (md+) show Sidebar; on small screens show MobileSidebar drawer */}
      {!isMobile ? (
        <Sidebar
          collapsed={sidebarCollapsed}
          isMobile={false}
          onClose={closeSidebar}
          className="-z-100 overflow-hidden"
        />
      ) : (
        <>
          <MobileSidebar
            isOpen={mobileMenuOpen}
            onClose={() => setMobileMenuOpen(false)}
          />
          {mobileMenuOpen && (
            <div
              className="fixed  z-40 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
          )}
        </>
      )}
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation */}
        <Navbar onToggleSidebar={handleHamburger} />

        {/* Page Header */}
        <div className=" px-6 py-4  bg-[#222736]">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold">Dashboard</h1>
            <div className="text-sm text-slate-400">
              <span className="hover:text-indigo-400 cursor-pointer">
                Dashboards
              </span>
              <span className="mx-2">/</span>
              <span>Dashboard</span>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto bg-[#222736] w-full">
          {/* Grid Layout */}
          <div className="grid xl:grid-cols-12 grid-cols-1 w-full gap-6 mb-6 p-6">
            {/* Left Column - Welcome & Profile Cards */}
            <div className="xl:col-span-4 w-full space-y-6">
              {/* Combined Welcome & Profile Card */}
              <div className="bg-[#34406B] rounded-lg  relative overflow-hidden">
                {/* Welcome Section */}
                <div className="p-6 w-full ">
                  <div className="flex  justify-between relative z-10">
                    <div>
                      <h2 className="text-[#556EE6] text-2xl font-semibold mb-2">
                        Welcome Back !
                      </h2>
                      <p className="text-[#556EE6] text-sm">Skote Dashboard</p>
                    </div>
                    <div className="w-48 h-20 flex items-center justify-center">
                      <img
                        src={login1}
                        alt="Welcome illustration"
                        className=" object-contain translate-y-2"
                      />
                    </div>
                  </div>
                </div>

                {/* Profile Section */}
                <div className="bg-slate-800 rounded-t-lg p-2 py-6  border-t border-slate-700">
                  <div className="flex justify-around">
                    {/* Profile Info with Avatar */}
                    <div className=" mt-3 flex flex-col items-center space-x-4">
                      <img
                        src="https://i.pravatar.cc/150?img=12"
                        alt="Henry Price"
                        className="w-20 h-20 rounded-full border-4 border-slate-700 -mt-16"
                      />
                      <div className=" flex flex-col space-y-2 mb-1">
                        <h3 className="text-xl font-semibold">Henry Price</h3>
                        <p className="text-slate-400 text-sm">UI/UX Designer</p>
                      </div>
                    </div>

                    {/* Stats and Button */}
                    <div className="flex space-x-5 ">
                      <div className="flex flex-col space-y-2">
                        <div className="text-xl font-semibold">125</div>
                        <div className="text-slate-400 text-sm">Projects</div>
                        <button className="bg-indigo-600 hover:bg-indigo-700 px-2 py-1 rounded flex items-center space-x-2 transition">
                          <span className="text-sm">View Profile</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <div className="text-xl font-semibold">$1245</div>
                      <div className="text-slate-400 text-sm">Revenue</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Monthly Earning Card */}
              <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <h3 className="text-lg font-semibold mb-6">Monthly Earning</h3>

                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-slate-400 text-sm mb-2">This month</p>
                    <div className="text-3xl font-bold mb-3">$34,252</div>
                    <div className="flex items-center space-x-2 text-[#B5ACBA] text-sm mb-6">
                      <TrendingUp className="w-4 h-4" />
                      <span className="text-green-400">12% </span> From previous
                      period
                    </div>
                    <button className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded text-sm flex items-center space-x-2 transition">
                      <span>View More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Circular Progress */}
                  <div className="relative">
                    <svg className="w-40 h-40 -rotate-210">
                      <circle
                        cx="80"
                        cy="80"
                        r="60"
                        stroke="currentColor"
                        strokeWidth="20"
                        fill="none"
                        className="text-slate-300"
                        strokeDasharray={2 * Math.PI * 60}
                        strokeDashoffset={2 * Math.PI * 60 * 0.3} // hide 30%
                        strokeLinecap="squre"
                      />

                      <circle
                        cx="80"
                        cy="80"
                        r="60"
                        stroke="currentColor"
                        strokeWidth="20"
                        fill="none"
                        className="text-indigo-500"
                        // strokeDasharray="2 3"
                        strokeDasharray={2 * Math.PI * 60}
                        strokeDashoffset={
                          2 * Math.PI * 60 * (0.3 + (1 - 0.67) * 0.7)
                        } // progress inside 70%
                        strokeLinecap="squre"
                      />
                    </svg>
                    <div className="absolute top-[55px] inset-0 flex flex-col items-center justify-center">
                      <div className="text-2xl font-bold">67%</div>
                      <div className="text-xs text-slate-400">Series A</div>
                    </div>
                  </div>
                </div>

                <p className="text-[#B5ACBA] text-md mt-6">
                  We craft digital, graphic and dimensional thinking.
                </p>
              </div>
            </div>

            {/* Right Column - Stats & Chart */}
            <div className="xl:col-span-8 w-full space-y-6 ">
              {/* Stats Cards */}
              <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                <StatsCard
                  title="Orders"
                  value="1,235"
                  icon={<ShoppingBag />}
                  bgColor="bg-indigo-600"
                />
                <StatsCard
                  title="Revenue"
                  value="$35,723"
                  icon={<DollarSign />}
                  bgColor="bg-indigo-600"
                />
                <StatsCard
                  title="Average Price"
                  value="$16.2"
                  icon={<Tag />}
                  bgColor="bg-indigo-600"
                />
              </div>

              {/* Email Sent Chart */}
              <EmailSentChart />
            </div>
          </div>
          <div
            className={`grid ${
              isNarrow ? "grid-cols-1" : "md:grid-cols-3 grid-cols-1"
            } gap-6 mb-6 px-6`}
          >
            {/* Social Source */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <h3 className="text-lg font-semibold mb-6">Social Source</h3>

              <div className="flex flex-col items-center mb-6">
                <div className="w-20 h-20 bg-indigo-600/20 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-10 h-10 text-indigo-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2">
                  Facebook - 125 sales
                </h4>
                <p className="text-sm text-slate-400 text-center mb-4">
                  Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien
                  ut libero venenatis faucibus tincidunt.
                </p>
                <button className="text-indigo-400 hover:text-indigo-300 text-sm flex items-center space-x-1">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                <SocialCard
                  platform="Facebook"
                  sales="125"
                  color="bg-indigo-600"
                />
                <SocialCard
                  platform="Twitter"
                  sales="112"
                  color="bg-blue-400"
                />
                <SocialCard
                  platform="Instagram"
                  sales="104"
                  color="bg-pink-600"
                />
              </div>
            </div>

            {/* Activity */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <h3 className="text-lg font-semibold mb-6">Activity</h3>

              <div className="space-y-6">
                <ActivityItem
                  date="22 Nov"
                  text='Responded to need "Volunteer Activities"'
                />
                <ActivityItem
                  date="17 Nov"
                  text="Everyone realizes why a new common language would be desirable..."
                  hasReadMore
                />
                <ActivityItem
                  date="15 Nov"
                  text='Joined the group "Boardsmanship Forum"'
                />
                <ActivityItem
                  date="22 Nov"
                  text='Responded to need "In-Kind Opportunity"'
                />
              </div>

              <button className="mt-6 bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded text-sm flex items-center space-x-2 mx-auto transition">
                <span>View More</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Top Cities Selling Product */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <h3 className="text-lg font-semibold mb-6">
                Top Cities Selling Product
              </h3>

              <div className="flex flex-col items-center mb-6">
                <div className="w-20 h-20 bg-indigo-600/20 rounded-full flex items-center justify-center mb-4">
                  <Map className="w-10 h-10 text-indigo-500" />
                </div>
                <div className="text-3xl font-bold">1,456</div>
                <div className="text-sm text-slate-400">San Francisco</div>
              </div>

              <div className="space-y-4">
                <CityRow
                  city="San Francisco"
                  value="1,456"
                  color="bg-indigo-500"
                  percentage="100"
                />
                <CityRow
                  city="Los Angeles"
                  value="1,123"
                  color="bg-teal-500"
                  percentage="75"
                />
                <CityRow
                  city="San Diego"
                  value="1,026"
                  color="bg-yellow-500"
                  percentage="65"
                />
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 mb-6 ">
              <h3 className="text-lg font-semibold mb-6">Latest Transaction</h3>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-sm font-medium text-slate-400">
                        <input
                          type="checkbox"
                          className="rounded border-slate-600"
                        />
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-slate-400">
                        Order ID
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-slate-400">
                        Billing Name
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-slate-400">
                        Date
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-slate-400">
                        Total
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-slate-400">
                        Payment Status
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-slate-400">
                        Payment Method
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-slate-400">
                        View Details
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <TransactionRow
                      orderId="#SK2545"
                      name="Jacob Hunter"
                      date="04 Oct, 2019"
                      total="$392"
                      status="Paid"
                      statusColor="green"
                      method="Paypal"
                    />
                    <TransactionRow
                      orderId="#SK2544"
                      name="Ronald Taylor"
                      date="04 Oct, 2019"
                      total="$404"
                      status="Refund"
                      statusColor="yellow"
                      method="Visa"
                    />
                    <TransactionRow
                      orderId="#SK2543"
                      name="Barry Dick"
                      date="05 Oct, 2019"
                      total="$412"
                      status="Paid"
                      statusColor="green"
                      method="Mastercard"
                    />
                    <TransactionRow
                      orderId="#SK2542"
                      name="Juan Mitchell"
                      date="06 Oct, 2019"
                      total="$384"
                      status="Paid"
                      statusColor="green"
                      method="Paypal"
                    />
                    <TransactionRow
                      orderId="#SK2541"
                      name="Jamal Burnett"
                      date="07 Oct, 2019"
                      total="$380"
                      status="Chargeback"
                      statusColor="red"
                      method="Visa"
                    />
                    <TransactionRow
                      orderId="#SK2540"
                      name="Neal Matthews"
                      date="07 Oct, 2019"
                      total="$400"
                      status="Paid"
                      statusColor="green"
                      method="Mastercard"
                    />
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="relative bottom-0 right-0 w-full flex bg-[#262B3C] items-center justify-between text-sm text-slate-400 py-4">
            <div>2025 © Skote.</div>
            <div>Design & Develop by Themesbrand</div>
          </div>
        </div>
      </div>
    </div>
  );
}
