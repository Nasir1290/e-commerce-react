import React from "react";

export default function NotFound() {
  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex w-full flex-col items-center justify-center h-full text-center p-4">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          No products found
        </h2>
        <p className="text-gray-500 mb-4">
          We couldn’t find any products that match your filters.
        </p>
        <p className="text-gray-500">Try adjusting your filter options:</p>
        <ul className="text-gray-500 list-disc list-inside mt-2">
          <li>Change the category</li>
          <li>Adjust the price range</li>
          <li>Select different colors</li>
        </ul>
        <button
          className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
          onClick={() => window.location.reload()} // Optional: Scrolls back to the top of the page
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
}
