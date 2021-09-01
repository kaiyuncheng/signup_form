import React, { useState } from "react";
import clsx from "clsx";
import { Icon } from "../components";

export function TextField({ id, label, type, errorMsg, error }) {
  const [value, setValue] = useState("");

  return (
    <div className="flex flex-col space-y-2">
      <div className="relative flex items-center w-full">
        <label
          className={clsx(
            value !== "" && "opacity-0",
            "absolute px-6 text-sm font-medium",
            error && "text-red"
          )}
          htmlFor={id}
        >
          {label}
        </label>

        <input
          className={clsx(
            "w-full py-3 px-6 rounded",
            "border-opacity-30",
            "focus:outline-none focus:border-none focus:ring",
            error
              ? "border-2 border-red focus:ring-red"
              : "border  border-blue-dark  focus:ring-blue"
          )}
          type={type}
          name={id}
          id={id}
          onChange={(e) => setValue(e.target.value)}
        />

        {error && (
          <Icon.Error className="text-red absolute right-0 py-3 mr-3 h-full w-6" />
        )}
      </div>

      {error && (
        <span className="text-right w-full text-red text-sm">{errorMsg}</span>
      )}
    </div>
  );
}
