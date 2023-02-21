import React from "react";
import { useForm } from "react-hook-form";

const Inputs = (props) => {
  const { register, handleSubmit, errors, reset } = useForm();
  const onSubmit = (data) => {
    props.setCity(data.city);
    reset();
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col lg:pt-[400px] pt-[400px] lg:text-6xl p-4 
        lg:p-0 lg:justify-center lg:items-center lg:space-y-10"
      >
        <input
          {...register("city", { required: "City name is required" })}
          className="rounded-full text-center font-bold text-2xl p-2 border-2 border-black lg:w-1/2"
          placeholder="Enter city name"
        />
        {errors && <span>This field is required</span>}
        <input
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full hover-cursor-pointer mt-2 w-1/2 self-center border-2 border-black lg:w-1/4"
        />
      </form>
    </div>
  );
};

export default Inputs;
