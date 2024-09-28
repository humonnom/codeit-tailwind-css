"use client";
import React from "react";
import ProgressBar from "@/components/ProgressBar";

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Progress Bar Demo</h1>
      <ProgressBar percentage={75} />
    </div>
  );
}
