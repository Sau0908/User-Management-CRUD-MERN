import React from "react";
import ShimmerUserCard from "./ShimmerUserCard";

const ShimmerLoading = () => {
  return (
    <div className="space-y-6">
      <ShimmerUserCard />
      <ShimmerUserCard />
      <ShimmerUserCard />
      <ShimmerUserCard />
    </div>
  );
};

export default ShimmerLoading;
