import React from "react";
import { useForm } from "react-hook-form";
import StepNavigation from "./StepNavigation";

const HospitalForm = ({ step, onNext, onBack }) => {
  const {
    register,
    handleSubmit,
    formState: { errors,isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Hospital Form Data:", data);
    onNext();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <h2 className="text-xl font-bold mb-4">Hospital Registration - Step {step}</h2>
        
      {step === 1 && (
          <>
          <div className="flex flex-col gap-1">
          <label className="font-medium" htmlFor="">Hospital Name</label>
          <input className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Hospital Name" {...register("name", { required: "Hospital Name required" })} />
          <p className="text-red-500 text-sm">{errors.name?.message}</p>
          </div>
          <div className="flex flex-col gap-1">
          <label className="font-medium" htmlFor="">Address</label>
          <input className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Address" {...register("address", { required: "Address required" })} />
          <p className="text-red-500 text-sm">{errors.address?.message}</p>

          </div>

          <div className="flex flex-col gap-1">
            <label className="font-medium" htmlFor="">Hospital Number</label>

          <input className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Hospital Number" {...register("contact", { required: "Number required" })} />
          <p className="text-red-500 text-sm">{errors.contact?.message}</p>
          </div>



        </>
      )}

      {step === 2 && (
        <>
          <div className="flex flex-col gap-1">
            <label className="font-medium" htmlFor="">Bed Size</label>
          <input className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Bed Size" {...register("beds", { required: "Bed Size required" })} />
          <p className="text-red-500 text-sm">{errors.beds?.message}</p>

          </div>
          <div className="flex flex-col gap-1">
            <label className="font-medium" htmlFor="">Departments</label>
            <input className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Departments" {...register("departments", { required: "Departments required" })} />
          <p className="text-red-500 text-sm">{errors.departments?.message}</p>

          </div>
          <div className="flex flex-col gap-1">
            <label className="font-medium" htmlFor="">Number of Doctors</label>
          <input className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Number of Doctors" {...register("doctors", { required: "Doctors count required" })} />
          <p className="text-red-500 text-sm">{errors.doctors?.message}</p>

          </div>


          


        </>
      )}

       <div>
      <StepNavigation onBack={onBack} />
      <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600" type="submit">{isSubmitting?<p>Submitting</p>:<>Next</>}</button>
       </div>
    </form>
  );
};

export default HospitalForm;
