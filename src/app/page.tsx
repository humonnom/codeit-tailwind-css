"use client";
import DonutChart from "@/components/Chart";
import { Button } from "@nextui-org/react";
import React, { useState } from "react";

export default function Home() {
  const [percentage, setPercentage] = useState(74);

  const handleClick = () => {
    if (percentage + 10 >= 100) {
      setPercentage(100);
    } else if (percentage < 100) {
      setPercentage(percentage + 10);
    }
  };

  return (
    <main className={"container mx-auto"}>
      <div
        className={
          "flex items-center justify-between bg-[#3B82F6] rounded-[12px] p-6 w-[400px] h-[250px] mt-10 mb-5"
        }
      >
        <div className={"text-white h-full flex flex-col justify-start"}>
          <h2 className={"text-lg font-semibold"}>내 진행 상황</h2>
          <span className={"flex gap-x-1.5 items-center"}>
            <span className={"text-3xl font-bold"}>{percentage}</span>%
          </span>
        </div>
        <div className={"mr-5"}>
          <DonutChart _percentage={percentage} radius={66} strokeWidth={32} />
        </div>
      </div>
      <Button
        color={"primary"}
        onClick={handleClick}
        disabled={percentage === 100}
      >
        Increase
      </Button>
    </main>
  );
}
