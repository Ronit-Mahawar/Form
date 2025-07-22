import React, { useState } from "react";
import StepNavigation from "./StepNavigation";

const PaymentStep = ({ onBack }) => {
  const [isSubmitting,setIsSubmitting] =useState(false);
   const handlePayment = async() => {
    setIsSubmitting(true)
    await new Promise((resolve)=>setTimeout(resolve,3000))



    alert("Fake Payment Completed!");
    setIsSubmitting(false)
  };

  return (
    <div className="text-center space-y-4">
      <h2 className="text-2xl font-bold">Boarding Fees</h2>
      <p className="text-gray-600">Please pay ₹200/- for the boarding fees</p>
      <button className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600" onClick={handlePayment}>{isSubmitting?<p>Payment in progress</p>:<>Pay</>}</button>
      <StepNavigation onBack={onBack} />
    </div>
  );
};

export default PaymentStep;
