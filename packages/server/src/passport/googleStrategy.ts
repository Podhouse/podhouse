import passport from "passport";
import passportGoogle from "passport-google-oauth";

import UserModel from "../modules/User/UserModel";
import { generateToken } from "../utils/auth";
import findOrCreate from "../utils/findOrCreate";

const GoogleStrategy = passportGoogle.OAuth2Strategy;

const strategy = (app) => {
  const passportConfig = {
    callbackURL: "/auth/google/redirect",
    clientID: process.env.GOOGLE_CLIENTID,
    clientSecret: process.env.GOOGLE_CLIENTSECRET,
  };

  passport.use(
    new passportGoogle.Strategy(passportConfig, async function (
      accessToken,
      refreshToken,
      profile,
      done,
    ) {
      try {
        const { id } = profile;
        const email = profile.emails[0].value;
        const user = await findOrCreate(email);
        done(null, user);
      } catch (e) {
        done(e);
      }
    }),
  );
};

export { strategy };
