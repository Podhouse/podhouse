import { User } from "../models/";
import { generateToken } from "../utils/auth";

const findOrCreate = async (
  email: string,
  id?: any,
  provider?: any,
  profile?: any,
) => {
  let user;

  try {
    if (email) {
      user = await User.findOne({ email });
    }

    if (!user) {
      user = new User({
        email,
        password: null,
        notifications: {
          weekly: false,
          news: false,
        },
      });
      await user.save();
    }
    const token = generateToken(user);
    return { token };
  } catch (e) {
    return Promise.reject(new Error(e));
  }
};

export default findOrCreate;
