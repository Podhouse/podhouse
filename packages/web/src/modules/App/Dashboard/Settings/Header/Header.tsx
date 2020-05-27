import React from "react";
import { useRouter } from "next/router";

import {
  HeaderContainer,
  HeaderAvatar,
  HeaderDetails,
  HeaderName,
  HeaderPlan,
  HeaderButtonContainer,
  HeaderButton,
} from "./Header.styles";

interface HeaderProps {
  avatar: string;
}

const Header: React.FC<HeaderProps> = ({ avatar }) => {
  const router = useRouter();

  const handleAccount = (e) => {
    e.preventDefault();
    router.push("/app/settings/account");
  };

  return (
    <HeaderContainer>
      <HeaderAvatar avatar={avatar} />

      <HeaderDetails>
        <HeaderName>Leonardo Maldonado</HeaderName>
        <HeaderPlan>PREMIUM</HeaderPlan>
      </HeaderDetails>

      <HeaderButtonContainer>
        <HeaderButton onClick={handleAccount}>View account</HeaderButton>
      </HeaderButtonContainer>
    </HeaderContainer>
  );
};

export default Header;
