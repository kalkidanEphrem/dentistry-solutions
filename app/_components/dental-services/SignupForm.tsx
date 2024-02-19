"use client";

import clsx from "clsx";
import { usePathname } from "next/navigation";
import { FormEvent, useState } from "react";

const SignupForm = () => {
  const pathName = usePathname();
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-4xl w-full flex flex-col mt-4 mb-20 gap-4 sm:flex-row sm:py-1 sm:px-2 items-stretch sm:justify-stretch"
    >
      <input
        type="email"
        name="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email adress"
        className="min-h-[70px] rounded-md pl-2 basis-2/3 grow text-primary focus:outline-none invalid:text-red-500 font-medium text-2xl"
      />

      <button
        type="submit"
        className="text-xl sm:text-base py-5 sm:py-3 sm:px-10 rounded-md font-semibold text-center bg-primary text-white hover:cursor-pointer sm:hover:scale-110 duration-300"
      >
        Schedule Appointment
      </button>
    </form>
  );
};

export default SignupForm;
