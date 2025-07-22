import React from "react";

const StepNavigation = ({ onBack }) => (
  <div>
    <button type="button" onClick={onBack}   className="w-full bg-gray-300 text-gray-800 p-2 rounded hover:bg-gray-400">
      Back
    </button>
  </div>
);

export default StepNavigation;
