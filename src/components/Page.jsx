import React, { useState } from "react";
import DoctorForm from "./DoctorForm";
import HospitalForm from "./HospitalForm";
import PaymentStep from "./PaymentStep";

const Page = () => {
  const [formType, setFormType] = useState("");
  const [step, setStep] = useState(1);

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => {
    setStep((prev) => {
      if (prev === 1) {
        setFormType("");
        return 1;
      }
      return prev - 1;
    });
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        {!formType && (
          <div>
            <label className="text-lg font-medium">
              Select Individual Type:
            </label>
            <select
              onChange={(e) => setFormType(e.target.value)}
              className="border p-2 rounded"
            >
              <option value="">-- Please Select --</option>
              <option value="Doctor">Doctor</option>
              <option value="Hospital">Hospital</option>
            </select>
          </div>
        )}

        {formType === "Doctor" && step < 3 && (
          <DoctorForm step={step} onNext={handleNext} onBack={handleBack} />
        )}
        {formType === "Hospital" && step < 3 && (
          <HospitalForm step={step} onNext={handleNext} onBack={handleBack} />
        )}
        {step === 3 && <PaymentStep onBack={handleBack} />}
      </div>
    </div>
  );
};

export default Page;
