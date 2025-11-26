import { ChevronDown } from "lucide-react";
export function SidebarItem({ icon, label, hasSubmenu, badge }) {
  return (
    <div className="flex items-center justify-between px-3 py-2 hover:bg-slate-700 rounded cursor-pointer text-slate-300 hover:text-white transition-colors group">
      <div className="flex items-center space-x-3">
        <span className="group-hover:text-indigo-400">{icon}</span>
        <span className="text-sm">{label}</span>
      </div>
      <div className="flex items-center space-x-2">
        {badge && (
          <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full font-medium">
            {badge}
          </span>
        )}
        {hasSubmenu && <ChevronDown className="w-4 h-4 text-slate-500" />}
      </div>
    </div>
  );
}

export  function StatsCard({ title, value, icon, bgColor }) {
  const iconWithClass = {
    ...icon,
    props: { ...icon.props, className: "w-6 h-6" },
  };

  return (
    <div className=" flex justify-between bg-slate-800 rounded-lg px-5 py-6 border border-slate-700 hover:border-indigo-500/50 transition">
      <div className="flex flex-col item-center gap-4">
        <div className="text-slate-400 text-xs mb-1">{title}</div>
        <div className="text-2xl font-bold">{value}</div>
      </div>
      <div className="flex items-start justify-between mb-3">
        <div
          className={`w-14 h-14 ${bgColor} rounded-full flex items-center justify-center`}
        >
          {iconWithClass}
        </div>
      </div>
    </div>
  );
}

export function TransactionRow({
  orderId,
  name,
  date,
  total,
  status,
  statusColor,
  method,
}) {
  const statusColorMap = {
    green: "bg-green-500/20 text-green-400",
    yellow: "bg-yellow-500/20 text-yellow-400",
    red: "bg-red-500/20 text-red-400",
  };

  return (
    <tr className="border-b border-slate-700/50 hover:bg-slate-700/30 transition">
      <td className="py-3 px-4">
        <input
          type="checkbox"
          className="rounded border-slate-600 cursor-pointer"
        />
      </td>
      <td className="py-3 px-4 text-sm font-medium">{orderId}</td>
      <td className="py-3 px-4 text-sm">{name}</td>
      <td className="py-3 px-4 text-sm text-slate-400">{date}</td>
      <td className="py-3 px-4 text-sm font-medium">{total}</td>
      <td className="py-3 px-4 text-sm">
        <span
          className={`px-3 py-1 rounded text-xs font-medium ${statusColorMap[statusColor]}`}
        >
          {status}
        </span>
      </td>
      <td className="py-3 px-4 text-sm">{method}</td>
      <td className="py-3 px-4 text-sm">
        <button className="bg-indigo-600 hover:bg-indigo-700 px-3 py-1 rounded text-xs transition">
          View Details
        </button>
      </td>
    </tr>
  );
}

export function SocialCard({ platform, sales }) {
  const platformIcons = {
    Facebook: (
      <svg
        className="w-6 h-6 text-indigo-500"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    Twitter: (
      <svg
        className="w-6 h-6 text-blue-400"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M23.953 4.57a10 10 0 002.856-3.915 9.964 9.964 0 01-2.866.836 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417a9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
      </svg>
    ),
    Instagram: (
      <svg
        className="w-6 h-6 text-pink-600"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221h-1.194c-.071-1.066-.364-2.079-.841-2.986h2.035a10.002 10.002 0 012 2.986zm-11.8 0h1.194c.071-1.066.364-2.079.841-2.986H5.053a10.002 10.002 0 01-2 2.986z" />
      </svg>
    ),
  };

  return (
    <div className="flex flex-col items-center space-y-2 p-3  rounded">
      {platformIcons[platform]}
      <div className="text-center">
        <div className="text-sm font-semibold">{platform}</div>
        <div className="text-xs text-slate-400">{sales} sales</div>
      </div>
    </div>
  );
}

export function ActivityItem({ date, text, hasReadMore }) {
  return (
    <div className="flex gap-3">
      <div className="flex-shrink-0">
        <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
      </div>
      <div className="flex-1">
        <div className="text-sm font-medium text-indigo-400">{date}</div>
        <p className="text-sm text-slate-400 mt-1">
          {text}
          {hasReadMore && (
            <button className="text-indigo-400 hover:text-indigo-300 ml-1">
              Read More
            </button>
          )}
        </p>
      </div>
    </div>
  );
}

 export function CityRow({ city, value, percentage }) {
  // Colors chosen to match the design: San Francisco (indigo), Los Angeles (teal), San Diego (yellow)
  const barColor =
    city === "San Francisco"
      ? "bg-indigo-500"
      : city === "Los Angeles"
      ? "bg-teal-500"
      : "bg-yellow-400";

  return (
    <div className="py-4">
      <div className="flex items-center">
        {/* Left label column */}
        <div className="w-28 text-sm text-slate-400">{city}</div>

        {/* Bar + value */}
        <div className="flex-1">
          <div className="flex items-center mb-2">
            {/* value near the start of the bar */}
            <div className="text-white font-bold mr-4">{value}</div>
            <div className="flex-1" />
          </div>

          <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
            <div
              className={`h-3 rounded-full transition-all duration-500 ${barColor}`}
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
