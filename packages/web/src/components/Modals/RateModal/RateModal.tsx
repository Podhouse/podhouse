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

  useOnClickOutside(ref, () => {});

  return (
    <RateModalContainer ref={ref}>
      <RateModalLinkContainer onClick={() => {}}>
        <RateModalLink>0.5x</RateModalLink>
      </RateModalLinkContainer>

      <RateModalLinkContainer onClick={() => {}}>
        <RateModalLink>1.0x</RateModalLink>
      </RateModalLinkContainer>

      <RateModalLinkContainer onClick={() => {}}>
        <RateModalLink>1.5x</RateModalLink>
      </RateModalLinkContainer>

      <RateModalLinkContainer onClick={() => {}}>
        <RateModalLink>2.0x</RateModalLink>
      </RateModalLinkContainer>

      <RateModalLinkContainer onClick={() => {}}>
        <RateModalLink>3.0x</RateModalLink>
      </RateModalLinkContainer>
    </RateModalContainer>
  );
};

export default RateModal;
