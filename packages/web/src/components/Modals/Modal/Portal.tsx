import { useEffect, ReactNode } from "react";
import { createPortal } from "react-dom";

interface Props {
  children: ReactNode;
}

const Portal = ({ children }: Props) => {
  const xgruveRoot: HTMLElement = document.getElementById(
    "xgruve"
  ) as HTMLElement;

  if (!xgruveRoot) {
    const xgruveRoot: HTMLDivElement = document.createElement("div");
    xgruveRoot.setAttribute("id", "xgruve");
    document.body.appendChild(xgruveRoot);
  }

  const xgruveElement: HTMLDivElement = document.createElement("div");

  useEffect((): any => {
    xgruveRoot.appendChild(xgruveElement);
    return (): any => xgruveRoot.removeChild(xgruveElement);
  });

  return createPortal(children, xgruveElement);
};

export default Portal;
