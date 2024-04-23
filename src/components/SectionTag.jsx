import React from "react";
import { SectionIcon } from "../components";

const SectionTag = ({ icon, text, color }) => {
    return (
        <div
            className={`flex items-center gap-2 text-[0.62rem] font-extrabold text-${color} col-start-1 col-end-3 `}
        >
            <SectionIcon icon={icon} bgColor={color} /> {text}
        </div>
    );
};

export default SectionTag;
