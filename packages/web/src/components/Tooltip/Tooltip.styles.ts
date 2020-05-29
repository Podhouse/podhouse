import { Tooltip } from "reakit/Tooltip";

import { styled } from "../../system/theme";

export const StyledTooltip = styled(Tooltip)`
  width: fit-content;
  height: fit-content;
  padding: 8px;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.4);
  color: ${({ theme }) => theme.colors.white};
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
`;
