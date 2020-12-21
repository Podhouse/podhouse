import React, { useRef } from "react";

import {
  RateModalContainer,
  RateModalLinkContainer,
  RateModalLink,
} from "./RateModal.styles";

import { usePlayerContext } from "src/machines/Player/PlayerContext";

import useOnClickOutside from "src/hooks/useOnClickOutside";

interface RateModalProps {
  handleRate: () => any;
}

const RateModal = ({ handleRate }: RateModalProps) => {
  const { rate, onRate } = usePlayerContext();

  const ref = useRef<any>();

  useOnClickOutside(ref, () => handleRate());

  return (
    <RateModalContainer ref={ref}>
      <RateModalLinkContainer
        onClick={() => onRate(0.5)}
        active={rate === 0.5 ? true : false}
      >
        <RateModalLink>0.5x</RateModalLink>
      </RateModalLinkContainer>

      <RateModalLinkContainer
        onClick={() => onRate(1.0)}
        active={rate === 1.0 ? true : false}
      >
        <RateModalLink>1.0x</RateModalLink>
      </RateModalLinkContainer>

      <RateModalLinkContainer
        onClick={() => onRate(1.5)}
        active={rate === 1.5 ? true : false}
      >
        <RateModalLink>1.5x</RateModalLink>
      </RateModalLinkContainer>

      <RateModalLinkContainer
        onClick={() => onRate(2.0)}
        active={rate === 2.0 ? true : false}
      >
        <RateModalLink>2.0x</RateModalLink>
      </RateModalLinkContainer>

      <RateModalLinkContainer
        onClick={() => onRate(3.0)}
        active={rate === 3.0 ? true : false}
      >
        <RateModalLink>3.0x</RateModalLink>
      </RateModalLinkContainer>
    </RateModalContainer>
  );
};

export default RateModal;
