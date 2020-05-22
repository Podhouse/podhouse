import React from "react";

import Portal from "./Portal";

interface ModalProps {
  close: () => any;
  render: (children: React.Component) => any;
  closeOnEsc?: boolean;
  closeOnOutside?: boolean;
  afterOpen?: boolean;
  afterClose?: boolean;
  children?: any;
}

const Modal: React.FC<ModalProps> = ({ children, render }) => (
  <Portal>{render(children) || children}</Portal>
);

export default Modal;
