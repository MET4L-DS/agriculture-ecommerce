import React from "react";
import { SectionTag } from "./";

const SectionHeader = ({ icon, tagColor, tagText, title, className }) => {
    return (
        <div className={`col-span-full ${className}`}>
            <SectionTag icon={icon} text={tagText} color={tagColor} />
            <div className="flex justify-between py-2">
                <h2 className="flex items-center text-3xl">{title}</h2>
                <div className="flex gap-2 text-xs text-gray-400">
                    {/* <button className=" rounded bg-slate-100 p-3" type="button">
                        <icons.FaArrowLeftLong />
                    </button>
                    <button className=" rounded bg-slate-100 p-3" type="button">
                        <icons.FaArrowRightLong />
                    </button> */}
                </div>
            </div>
        </div>
    );
};

export default SectionHeader;
