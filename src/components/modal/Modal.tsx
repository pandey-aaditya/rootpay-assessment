import { type ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  children: ReactNode;
}

function Modal({ isOpen, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">{children}</div>
    </div>
  );
}

export default Modal;
