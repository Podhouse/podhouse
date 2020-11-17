import UserModel from "./UserModel";

import { registerLoader } from "../Loader/LoaderRegister";

import { createLoader } from "../../common/";

const { Wrapper: User, getLoader, clearCache, load, loadAll } = createLoader({
  model: UserModel,
  loaderName: "UserLoader",
});

export { getLoader, clearCache, load, loadAll };
export default User;

registerLoader("UserLoader", getLoader);
