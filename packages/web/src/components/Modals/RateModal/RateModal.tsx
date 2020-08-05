import React, { useRef } from "react";
import { useRehawk } from "rehawk";

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
  const { onRate } = useRehawk({});

  const ref = useRef<any>();

  useOnClickOutside(ref, () => handleRate());

  return (
    <RateModalContainer ref={ref}>
      <RateModalLinkContainer>
        <RateModalLink onClick={() => onRate(0.5)}>0.5x</RateModalLink>
      </RateModalLinkContainer>

      <RateModalLinkContainer>
        <RateModalLink onClick={() => onRate(1.0)}>1.0x</RateModalLink>
      </RateModalLinkContainer>

      <RateModalLinkContainer>
        <RateModalLink onClick={() => onRate(1.5)}>1.5x</RateModalLink>
      </RateModalLinkContainer>

      <RateModalLinkContainer>
        <RateModalLink onClick={() => onRate(2.0)}>2.0x</RateModalLink>
      </RateModalLinkContainer>

      <RateModalLinkContainer>
        <RateModalLink onClick={() => onRate(3.0)}>3.0x</RateModalLink>
      </RateModalLinkContainer>
    </RateModalContainer>
  );
};

export default RateModal;
