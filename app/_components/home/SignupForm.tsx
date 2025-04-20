"use client";

import { FormEvent, useState } from "react";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle your submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full px-24">
      {/* Full Name */}
      <div className="flex flex-col w-full">
        <label htmlFor="fullName" className="text-xl font-staatliches mb-2">
          Full Name
        </label>
        <input
          type="text"
          name="fullName"
          id="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Enter your full name"
          className="w-full min-h-[50px] px-4 py-2 rounded-md border border-brown text-gray-200 text-md font-light  focus:outline-none"
        />
      </div>

      {/* Email */}
      <div className="flex flex-col w-full">
        <label htmlFor="email" className="text-xl font-staatliches mb-2">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email adress"
          className="w-full min-h-[50px] px-4 py-2 rounded-md border border-brown text-gray-200 text-md font-light focus:outline-none"
        />
      </div>

      {/* Date & Time */}
      <div className="flex flex-col sm:flex-row gap-6 w-full">
        <div className="flex flex-col w-full">
          <label htmlFor="date" className="text-xl font-staatliches mb-2">
            Date
          </label>
          <input
            type="date"
            name="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full min-h-[50px] px-4 py-2 rounded-md border border-brown text-gray-200 text-md font-medium focus:outline-none"
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="time" className="text-xl font-staatliches mb-2">
            Time
          </label>
          <input
            type="time"
            name="time"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            placeholder="Select time"
            className="w-full min-h-[50px] px-4 py-2 rounded-md border border-brown text-md font-light focus:outline-none"
          />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-1/2 mx-auto text-xl sm:text-base py-5 sm:py-3 font-semibold bg-black text-white rounded-full hover:scale-105 transition-transform duration-300"
      >
        Schedule Appointment
      </button>
    </form>
  );
};

export default SignupForm;
