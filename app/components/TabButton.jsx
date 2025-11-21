"use client";

const TabButton = ({ children, selectTab, active }) => {
  const baseClasses =
    "px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200";
  const activeClasses = "bg-primary-500 text-white shadow";
  const inactiveClasses = "text-gray-300 hover:bg-white/10";

  return (
    <button
      type="button"
      onClick={selectTab}
      className={`${baseClasses} ${active ? activeClasses : inactiveClasses}`}
    >
      {children}
    </button>
  );
};

export default TabButton;
