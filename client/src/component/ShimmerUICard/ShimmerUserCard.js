import React from "react";

const ShimmerUserCard = () => {
  return (
    <div className="animate-pulse">
      <div className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col space-y-4">
        <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex-shrink-0 w-16 h-16 bg-gray-700 rounded-full"></div>
          <div className="flex-1 space-y-2">
            <div className="h-6 bg-gray-700 rounded w-3/4"></div>
            <div className="h-4 bg-gray-700 rounded w-1/2"></div>
            <div className="h-4 bg-gray-700 rounded w-1/3"></div>
            <div className="h-4 bg-gray-700 rounded w-2/3"></div>
          </div>
        </div>
        <div className="flex justify-between items-center border-t border-gray-600 pt-4">
          <div className="space-y-2">
            <div className="h-4 bg-gray-700 rounded w-24"></div>
            <div className="h-4 bg-gray-700 rounded w-24"></div>
          </div>
          <div className="flex-shrink-0 flex space-x-2">
            <div className="h-8 w-16 bg-gray-700 rounded"></div>
            <div className="h-8 w-16 bg-gray-700 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerUserCard;
