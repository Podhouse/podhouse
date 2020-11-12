import { Request, Response } from "koa";

import { schema } from "./graphql/schema";
import { getUser } from "./utils/auth";
import { getDataloaders } from "./modules/Loader/LoaderRegister";

const graphql = async (req: Request, res: Response) => {
  const { user } = await getUser(req.header.authorization);

  const dataloaders = getDataloaders();

  return {
    graphiql: process.env.NODE_ENV !== "production",
    schema,
    context: {
      user,
      req,
      dataloaders,
    },
    formatError: (error: GraphQLError) => {
      console.log(error.message);
      console.log(error.locations);
      console.log(error.stack);

      return {
        message: error.message,
        locations: error.locations,
        stack: error.stack,
      };
    },
  };
};

export default graphql;
