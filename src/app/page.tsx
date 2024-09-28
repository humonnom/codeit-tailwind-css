"use client";
import { useEffect, useState } from "react";
import usePrevious from "@/hooks/usePrevious";
import { Button } from "@nextui-org/react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const previous = usePrevious(isOpen);

  return (
    <main
      className={`container mx-auto flex flex-col w-screen h-screen items-center justify-center gap-y-4`}
    >
      <Button
        color="primary"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        Toggle
      </Button>
      <p>* isOpen: {isOpen ? "true" : "false"}</p>
      <p>
        * Previous:{" "}
        {previous === undefined ? "undefined" : previous ? "true" : "false"}
      </p>
    </main>
  );
}
