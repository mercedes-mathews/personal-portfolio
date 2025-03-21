"use client";

import React, { useEffect, useState } from "react";

const MovingBackground: React.FC = () => {
  const [columns, setColumns] = useState<number>(0);

  useEffect(() => {
    const updateColumns = () => {
      setColumns(Math.floor(window.innerWidth / 15)); // Adjust column density
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden bg-[#0D0D0D]">
      {Array.from({ length: columns }).map((_, i) => (
        <div key={i} className="absolute w-5 text-[#FF92A5] text-lg font-mono">
          <div
            className="absolute w-full animate-fall"
            style={{ left: `${i * 15}px`, opacity: 0.2 }}
          >
            {Array.from({ length: 30 }).map((_, j) => (
              <span key={`first-${j}`} className="block">{Math.random() > 0.5 ? "1" : "0"}</span>
            ))}
          </div>
          <div
            className="absolute w-full animate-fall"
            style={{ left: `${i * 15}px`, top: "-100vh", opacity: 0.2 }}
          >
            {Array.from({ length: 30 }).map((_, j) => (
              <span key={`second-${j}`} className="block">{Math.random() > 0.5 ? "1" : "0"}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovingBackground;
