import React from "react";
import { useTooltipState, TooltipReference } from "reakit/Tooltip";

import { StyledTooltip } from "./Tooltip.styles";

interface TooltipProps {
  children: any;
  title: string;
}

const Tooltip: React.FC<TooltipProps> = ({ children, title, ...props }) => {
  const tooltip = useTooltipState();

  return (
    <>
      <TooltipReference {...tooltip} ref={children.ref} {...children.props}>
        {(referenceProps) => React.cloneElement(children, referenceProps)}
      </TooltipReference>
      <StyledTooltip {...tooltip} {...props} style={{ zIndex: 100 }}>
        {title}
      </StyledTooltip>
    </>
  );
};

export default Tooltip;
