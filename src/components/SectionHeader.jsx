import React from "react";
import { SectionTag } from "./";

const SectionHeader = ({ icon, tagColor, tagText, title, className }) => {
    return (
        <div className={`col-span-full ${className}`}>
            <SectionTag icon={icon} text={tagText} color={tagColor} />
            <div className="flex py-2">
                <h2 className="flex items-center text-3xl">{title}</h2>
            </div>
        </div>
    );
};

export default SectionHeader;
