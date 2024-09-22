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
      {isOpen && (
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <div className="p-8">
            <h1 className="text-2xl font-bold">Modal Title</h1>
            <p className="mt-4">Modal Content</p>
          </div>
        </Modal>
      )}
    </main>
  );
}
