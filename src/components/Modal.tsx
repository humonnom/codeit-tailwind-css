import { createPortal } from "react-dom";
import React from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  footer?: React.ReactNode;
};

export default function Modal({}: ModalProps) {
  const ModalComp = <dialog></dialog>;

  return createPortal(ModalComp, document.body);
}
