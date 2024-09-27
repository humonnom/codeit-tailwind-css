"use client";
import Modal from "@/components/Modal";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Open Modal
      </button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={"Modal Title"}
      >
        <div className="p-8">
          <p className="mt-4">Modal Content</p>
        </div>
      </Modal>
    </main>
  );
}
