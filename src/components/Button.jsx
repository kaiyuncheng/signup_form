import React from "react";
export function Button({ children }) {
    return (
      <button
        type="submit"
        className="rounded w-full p-4 text-center bg-green text-white font-medium shadow-button"
      >
        {children}
      </button>
    );
  }
  