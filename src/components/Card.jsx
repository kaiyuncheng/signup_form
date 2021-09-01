import clsx from "clsx";
import React from "react";

export function Card({ children, className }) {
  return (
    <div
      className={clsx(className, "rounded-lg w-full p-6 text-center shadow")}
    >
      {children}
    </div>
  );
}
