"use client";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { subscribeFunc } from "../utils/subscribe";

export type subscribedData = {
  email: string;
  firstName: string;
  lastName: string;
};

export default function SubscribeForm() {
  const { register, handleSubmit, reset } = useForm<subscribedData>();
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState<any>("");
  const [loading, setLoading] = useState(false);

  function createSubscription(data: subscribedData) {
    const updatedData = { email: data.email, firstName:data.firstName, lastName:data.lastName, status: "subscribed" };
    subscribeFunc(updatedData, setLoading, setIsSuccess, setMessage);
  }

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isSuccess) {
      timer = setTimeout(() => {
        setIsSuccess(false);
        setMessage("");
        reset();
      }, 5000);
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [isSuccess, reset]);

  return (
    <>
      <form onSubmit={handleSubmit(createSubscription)} className="">
        <div className="flex flex-col md:flex-row gap-3 mb-3 justify-between">
          <div className="border-light border-2 lg:border-[3px] p-1 border-solid rounded-[30px] flex-1 ">
            <input
              type="text"
              placeholder="First Name"
              id="subfirstName"
              className="flex-1 bg-transparent h-[40px] lg:h-[50px] focus:outline-0 rounded-[30px] pl-4 text-light placeholder:text-light"
              {...register("firstName", { required: true })}
            />
          </div>
          <div className="border-light border-2 lg:border-[3px] p-1 border-solid rounded-[30px] flex-1">
            <input
              type="text"
              placeholder="Last Name"
              id="subLastName"
              className="flex-1 bg-transparent h-[40px] lg:h-[50px] focus:outline-0 rounded-[30px] pl-4 text-light placeholder:text-light"
              {...register("lastName", { required: true })}
            />
          </div>
        </div>
        <div className="flex border-light border-2 lg:border-[3px] p-1 border-solid rounded-[30px]">
          <input
            type="email"
            placeholder="Enter your email"
            id="subscribeEmail"
            className="flex-1 bg-transparent h-[40px] lg:h-[50px] focus:outline-0 rounded-[30px] pl-4 text-light placeholder:text-light"
            {...register("email", { required: true })}
          />

          <button
            type="submit"
            className="bg-light text-primary rounded-[30px] px-5 lg:px-10"
          >
            {" "}
            {loading ? (
              <div className="subscribe-loading-button font-demibold"></div>
            ) : isSuccess ? (
              <span className="font-demibold">Subscribed</span>
            ) : (
              <span className="font-demibold">Send</span>
            )}
          </button>
        </div>
      </form>
      {message && (
        <p className="text-light font-primary mt-5">
          {message instanceof Error ? message.message : message}
        </p>
      )}
    </>
  );
}
