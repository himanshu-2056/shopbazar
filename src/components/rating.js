import React from "react";
import classNames from "classnames";

const StarRating = ({ rating, maxRating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  const fullStarClass = "text-yellow-500";
  const halfStarClass = "text-yellow-200";
  const emptyStarClass = "text-black";

  const starClasses = (index) =>
    classNames({
      [fullStarClass]: index < fullStars,
      [halfStarClass]: index === fullStars && hasHalfStar,
      [emptyStarClass]: index >= fullStars + (hasHalfStar ? 1 : 0),
    });

  return (
    <div className="flex">
      {[...Array(maxRating)].map((_, i) => (
        <svg
          key={i}
          className={`w-6 h-6 fill-current ${starClasses(i)}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M12 17.27l-5.76 3.31 1.1-6.42L3.5 9.64l6.43-.93L12 3l2.07 5.71 6.43.93-4.84 4.52 1.1 6.42z" />
        </svg>
      ))}
    </div>
  );
};

export default StarRating;
