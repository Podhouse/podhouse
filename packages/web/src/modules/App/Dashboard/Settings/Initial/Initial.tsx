import React from "react";

import Language from "./Language/Language";
import ChangePassword from "./ChangePassword/ChangePassword";
import Notifications from "./Notifications/Notifications";

const Initial: React.FC = () => (
  <>
    <Language />
    <ChangePassword />
    <Notifications />
  </>
);

export default Initial;
