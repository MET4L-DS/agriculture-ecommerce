import React from "react";

const SectionIcon = ({
    icon: Icon,
    color = "white",
    bgColor = "customPink",
    size = 11,
}) => {
    if (!Icon) {
        console.error("Icon prop is missing or is falsy");
        return null;
    }

    return (
        <div className={`inline-flex rounded-full p-1  bg-${bgColor}`}>
            <Icon color={color} size={size} />
        </div>
    );
};

export default SectionIcon;
