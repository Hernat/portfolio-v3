"use client";

import CountUp from "react-countup";

const Badge = ({
    containerStyles,
    icon,
    endCountNum,
    endCountText,
    badgeText,
}) => {
    return (
        <div className={`badge ${containerStyles}`}>
            <div className="text-3xl  rounded-lg bg-gradient-to-t from-amber-900 via-yellow-400 to-orange-600  bg-opacity-50">
                {icon}
            </div>
            <div className="flex items-center gap-x-2">
                <div className="text-4xl leading-none font-bold bg-clip-text text-transparent bg-gradient-to-t from-amber-900 via-yellow-400 to-orange-600 h-full bg-opacity-50">
                    <CountUp end={endCountNum} delay={1} duration={4} />
                    {endCountText}
                </div>
                <div className="max-w-[70px] text-secondary leading-none text-[15px] font-medium text-black">
                    {badgeText}
                </div>
            </div>
        </div>
    );
};

export default Badge;
