import React from 'react'

const Input = () => {
  return (
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

    </>
  )
}

export default Input