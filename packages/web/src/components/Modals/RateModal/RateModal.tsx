import React, { useRef } from "react";

import {
  RateModalContainer,
  RateModalLinkContainer,
  RateModalLink,
} from "./RateModal.styles";

import useOnClickOutside from "src/hooks/useOnClickOutside";

interface RateModalProps {
  handleRate: () => any;
}

const RateModal = ({ handleRate }: RateModalProps) => {
  const ref = useRef<any>();

  useOnClickOutside(ref, () => handleRate());

  return (
    <RateModalContainer ref={ref}>
      <RateModalLinkContainer>
        <RateModalLink>0.5x</RateModalLink>
      </RateModalLinkContainer>

      <RateModalLinkContainer>
        <RateModalLink>1.0x</RateModalLink>
      </RateModalLinkContainer>

      <RateModalLinkContainer>
        <RateModalLink>1.5x</RateModalLink>
      </RateModalLinkContainer>

      <RateModalLinkContainer>
        <RateModalLink>2.0x</RateModalLink>
      </RateModalLinkContainer>

      <RateModalLinkContainer>
        <RateModalLink>3.0x</RateModalLink>
      </RateModalLinkContainer>
    </RateModalContainer>
  );
};

export default RateModal;
