"use client"
import React, { useState, useEffect } from "react"

const chars = "-_~`!@#$%^&*()+=[]{}|;:,.<>?";

export const DecryptText = ({
  text="Tanay Desai is a multi d",
  interval = 40,
}) => {
  const [outputText, setOutputText] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    let timer;

    if (outputText !== text) {
      timer = setInterval(() => {
        if (outputText.length < text.length) {
          setOutputText((prev) => prev + text[prev.length]);
        } else {
          clearInterval(timer);
        }
      }, interval);
    }

    return () => clearInterval(timer);
  }, [text, interval, outputText]);

  const remainder =
    outputText.length < text.length
      ? text
          .slice(outputText.length)
          .split("")
          .map(() => chars[Math.floor(Math.random() * chars.length)])
          .join("")
      : "";

  if (!isMounted) {
    return <span> </span>;
  }

  return (
    <div className="text-gray-500 text-[17px] font-LufgaLight truncate">
      {/* ml-1.5 mt-5  */}
      {outputText}
      {remainder}
    </div>
  );
};
