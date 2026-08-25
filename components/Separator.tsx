import React from "react";

const Separator = ({ bg = "white" }: { bg?: "accent" | "white" }) => {
  const strokeColor = bg === "accent" ? "#c89c6c" : "#f4eee4";

  return (
    <div className="relative w-[140px] md:w-[180px] h-[20px] mx-auto flex items-center justify-center my-1">
      <svg
        viewBox="0 0 180 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full opacity-60"
      >
        {/* Left delicate rule */}
        <line x1="0" y1="10" x2="68" y2="10" stroke={strokeColor} strokeWidth="0.75" strokeOpacity="0.4" />
        
        {/* Central refined diamond flourish */}
        <circle cx="77" cy="10" r="1.25" fill={strokeColor} fillOpacity="0.7" />
        <path
          d="M90 4C91.5 7 95 10 98 10C95 10 91.5 13 90 16C88.5 13 85 10 82 10C85 10 88.5 7 90 4Z"
          fill={strokeColor}
          fillOpacity="0.9"
        />
        <circle cx="103" cy="10" r="1.25" fill={strokeColor} fillOpacity="0.7" />
        
        {/* Right delicate rule */}
        <line x1="112" y1="10" x2="180" y2="10" stroke={strokeColor} strokeWidth="0.75" strokeOpacity="0.4" />
      </svg>
    </div>
  );
};

export default Separator;
