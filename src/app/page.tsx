"use client";
import { useEffect } from "react";
// import useMeasure from "react-use-measure";
import useMeasure from "@/hooks/useMeasure";

export default function Home() {
  const [ref, bounds] = useMeasure();

  useEffect(() => {
    console.log("[page: line8] bounds: ", bounds);
  }, [bounds]);

  return (
    <main
      className={`container mx-auto flex w-screen h-screen items-center justify-between`}
    >
      <div className={"w-full"}>
        <textarea className={"bg-blue-500/20 resize border-4"} ref={ref} />
        <p>Height :{bounds.height}</p>
      </div>
    </main>
  );
}
