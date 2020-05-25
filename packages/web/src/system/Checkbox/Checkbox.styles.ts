import { css } from "styled-components";

import { styled } from "../theme";

interface LabelProps {
  disabled?: boolean;
}

export const CheckboxContainer = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const StyledCheckbox = styled.input`
  --active: #000000;
  --active-inner: #ffffff;
  --focus: 2px rgba(52, 93, 238, 0.3);
  --border: #000000;
  --border-hover: #000000;
  --background: #ffffff;
  --disabled: #eaeaea;
  --disabled-inner: #eaeaea;

  -webkit-appearance: none;
  -moz-appearance: none;
  width: 16px;
  height: 16px;
  outline: none;
  display: inline-block;
  vertical-align: top;
  position: relative;
  margin: 0;
  cursor: pointer;
  border-radius: 3px;
  border: 1px solid var(--bc, var(--border));
  background: var(--b, var(--background));
  transition: #ffffff 0.3s, border-color 0.3s, box-shadow 0.2s;

  &:after {
    content: "";
    display: block;
    position: absolute;
    transition: transform var(--d-t, 0.3s) var(--d-t-e, ease),
      opacity var(--d-o, 0.2s);
    width: 5px;
    height: 9px;
    border: ${({ theme }) => `2px solid ${theme.colors.white}`};
    border-top: 0;
    border-left: 0;
    left: 5px;
    top: 2px;
    transform: rotate(var(--r, 20deg));
  }

  &:checked {
    background: ${({ theme }) => theme.colors.black};
    --d-o: 0.3s;
    --d-t: 0.6s;
    --d-t-e: cubic-bezier(0.2, 0.85, 0.32, 1.2);
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.lighestGray};
    border: ${({ theme }) => `1px solid ${theme.colors.midGray}`};
    cursor: not-allowed;
    opacity: 0.9;

    &:checked {
      background: ${({ theme }) => theme.colors.lighestGray};
      border: ${({ theme }) => `1px solid ${theme.colors.midGray}`};
    }

    & + label {
      cursor: not-allowed;
    }
  }

  &:hover {
    &:not(:checked) {
      &:not(:disabled) {
        --bc: var(--border-hover);
      }
    }
  }

  &:focus {
    box-shadow: 0 0 0 var(--focus);
  }

  &:after {
    opacity: var(--o, 0);
  }

  &:checked {
    --r: 43deg;
    --o: 1;
  }
`;

export const StyledLabel = styled.label<LabelProps>`
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme }) => theme.colors.strongestGray};
  margin-left: 5px;

  ${({ disabled }) =>
    disabled &&
    css`
      color: #eaeaea;
      cursor: not-allowed;
    `};
`;
