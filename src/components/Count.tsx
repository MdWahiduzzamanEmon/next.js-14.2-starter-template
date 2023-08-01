"use client"; // for client side rendering only
import { decrement, increment } from "@/Redux/Features/Count-slice";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import { cToastify } from "@/Shared";
import React from "react";
import { useDispatch } from "react-redux";

const Count = () => {
  const dispatch = useAppDispatch(); // for dispatching actions
  const countValue = useAppSelector((state) => state.countSlice.count); // for reading values

  const incrementNumber = () =>
    // for dispatching actions to increment
    dispatch(
      increment({
        amount: 1,
      })
    );

  const decrementNumber = () => {
    // for dispatching actions to decrement
    if (countValue <= 0)
      return cToastify({
        type: "error",
        message: "Count can't be less than 0",
      });

    dispatch(
      decrement({
        amount: 1,
      })
    );
  };

  return (
    <section className="flex gap-4">
      <button
        className="px-4 py-2 text-white bg-blue-600 rounded-lg dark:bg-blue-500 dark:hover:bg-blue-400 cursor-pointer
            transition-colors hover:bg-blue-700 hover:dark:bg-blue-400 text-lg
        "
        type="button"
        onClick={incrementNumber}
      >
        +
      </button>
      <span className="px-4 py-2 ">{countValue}</span>
      <button
        className="px-4 py-2 text-white bg-blue-600 rounded-lg dark:bg-blue-500 dark:hover:bg-blue-400 cursor-pointer
            transition-colors hover:bg-blue-700 hover:dark:bg-blue-400 text-lg
        "
        type="button"
        onClick={decrementNumber}
      >
        -
      </button>
    </section>
  );
};

export default Count;
