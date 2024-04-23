import React from "react";
import { TbStar, TbStarFilled } from "react-icons/tb";

const StarRating = ({ rating }) => {
    return (
        <div className="flex items-center gap-1 text-[#f9ae14]">
            {rating &&
                Array(5)
                    .fill()
                    .map((_, index) =>
                        index < rating ? (
                            <TbStarFilled key={index} size={12} />
                        ) : (
                            <TbStar key={index} size={12} />
                        ),
                    )}
        </div>
    );
};

export default StarRating;
