import React from "react";

// Simple spinning loader, update later
export const Loader = () => {
  return (
    <div className="fixed inset-0 z-[9999] grid place-items-center bg-background text-foreground">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative w-12 h-12 animate-spin">
          <div className="absolute inset-0 rounded-full bg-primary/20 shadow-lg" />

          {/* Loading ring */}
          <div className="absolute inset-0 border-4 border-t-transparent border-indigo-300 rounded-full animate-spin" />
        </div>

        {/* Loading text */}
        <h3 className="font-bold text-lg">Loading...</h3>
      </div>
    </div>
  )
};
