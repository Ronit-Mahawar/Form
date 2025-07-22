import React from "react";
import { useForm } from "react-hook-form";
import StepNavigation from "./StepNavigation";

const DoctorForm = ({ step, onNext, onBack }) => {
  console.log(step);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data) {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log(data);
    onNext();
  }

  return (
    <form
      action=""
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4"
    >
      <h2 className="text-xl font-bold mb-4">
        Doctor Registration - Step {step}
      </h2>

      {step === 1 && (
        <>
          <div className="flex flex-col gap-1">
            <label className="font-medium" htmlFor="">
              Name
            </label>
            <input
              className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              placeholder="enter your name"
              {...register("name", {
                required: {
                  value: true,
                  message: "cant be empty",
                },
              })}
            />
            {errors.name ? (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            ) : null}
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-medium" htmlFor="">
              Phone Number{" "}
            </label>
            <input
              className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="Number"
              placeholder="enter your name"
              {...register("phoneNumber", {
                required: {
                  value: true,
                  message: "cant be empty",
                },
                minLength: { value: 10, message: "Minimum 10 digits" },
              })}
            />
            {errors.phoneNumber ? (
              <p className="text-red-500 text-sm">
                {errors.phoneNumber.message}
              </p>
            ) : null}
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-medium" htmlFor="">
              Email
            </label>
            <input
              className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="email"
              placeholder="enter your name"
              {...register("email", {
                required: {
                  value: true,
                  message: "cant be empty",
                },
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email format",
                },
              })}
            />
            {errors.email ? (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            ) : null}
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <div className="flex flex-col gap-1">
            <label className="font-medium" htmlFor="">
              Experience
            </label>
            <input
              className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Experience"
              {...register("experience", {
                required: "Experience is required",
              })}
            />
            {errors.experience && (
              <p className="text-red-500 text-sm">
                {errors.experience.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-medium" htmlFor="">
              Speciality
            </label>
            <input
              className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Speciality"
              {...register("speciality", {
                required: "Speciality is required",
              })}
            />
            {errors.speciality && (
              <p className="text-red-500 text-sm">
                {errors.speciality.message}
              </p>
            )}
          </div>
        </>
      )}

      <div>
        <StepNavigation onBack={onBack} />
        <button
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          type="submit"
        >
          {isSubmitting ? <p>Submitting</p> : <>Next</>}
        </button>
      </div>
    </form>
  );
};

export default DoctorForm;
