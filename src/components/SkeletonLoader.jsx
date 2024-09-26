// SkeletonLoader.js
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"; // Import the CSS

const SkeletonLoader = ({ count = 1, height = "100%", width = "100%" }) => {
  return (
    <div style={{ width, height, display: "flex", flexDirection: "column" }}>
      {Array.from({ length: count }).map((_, index) => (
        <Skeleton
          key={index}
          style={{ margin: "5px 0", width: "100%", height }}
        />
      ))}
    </div>
  );
};

export default SkeletonLoader;
