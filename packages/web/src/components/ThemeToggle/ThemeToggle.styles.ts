import styled from "@emotion/styled";

import { StyleProps } from "src/system/styles.types";

export const ToggleContainer = styled.div<StyleProps>`
  #switch {
    cursor: pointer;
    position: relative;
    background: none;
    border: 0;
    width: 30px;
    height: 30px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  #switch .mode {
    position: relative;
    width: 15px;
    height: 15px;
    transition: transform 0.45s ease;
    border-radius: 50%;
    background: ${({ theme }) => theme.primary};
  }

  #switch .mode::before {
    content: "";
    background: none;
    position: absolute;
    width: 5px;
    height: 5px;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    border-radius: 50%;
    background: none;
    z-index: -1;
    opacity: 0;
    transition: box-shadow 0.4s 0s ease;
  }

  #switch .mode::after {
    content: "";
    position: absolute;
    width: 90%;
    height: 90%;
    top: -20%;
    left: 30%;
    border-radius: 50%;
    background: white;
    transition: transform 0.45s ease;
  }

  .container.dark {
    background: none;

    #switch .mode {
      transform: scale(0.5);
      background: white;

      &::before {
        opacity: 1;
        box-shadow: 0 -20px 0 0 white, 0 20px 0 0 white, -20px 0 0 0 white,
          20px 0 0 0 white, 15px 15px 0 0 white, 15px -15px 0 0 white,
          -15px 15px 0 0 white, -15px -15px 0 0 white;
      }

      &::after {
        opacity: 0;
        transition: background 0.45s ease;
        transform: translateX(50%) translateY(-50%);
      }
    }
  }
`;
