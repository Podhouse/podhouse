import { useEffect, ReactNode } from "react";
import { createPortal } from "react-dom";

interface Props {
  children: ReactNode;
}

const Portal = ({ children }: Props) => {
  const xgruveRoot: HTMLElement | null = document.getElementById("xgruve");

  if (!xgruveRoot) {
    const xgruveRoot: HTMLDivElement = document.createElement("div");
    xgruveRoot.setAttribute("id", "xgruve");
    document.body.appendChild(xgruveRoot);
  }

  const xgruveElement: HTMLDivElement = document.createElement("div");

  useEffect(() => {
    xgruveRoot.appendChild(xgruveElement);
    return () => xgruveRoot.removeChild(xgruveElement);
  });

  return createPortal(children, xgruveElement);
};

export default Portal;
