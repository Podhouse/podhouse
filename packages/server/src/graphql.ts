import { Request, Response } from "koa";
import { GraphQLError } from "graphql";

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
    formatError: ({ message, locations, stack }: GraphQLError) => {
      console.log(message);
      console.log(locations);
      console.log(stack);

      return {
        message,
        locations,
        stack,
      };
    },
  };
};

export default graphql;
