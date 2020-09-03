import { Request, Response } from "koa";

import { schema } from "./graphql/schema";
import * as loaders from "./loaders";
import { getUser } from "./utils/auth";

const graphql = async (req: Request, res: Response) => {
  const { user } = await getUser(req.header.authorization);

  const AllLoaders = loaders;

  const dataloaders = Object.keys(AllLoaders).reduce(
    (acc, loaderKey) => ({
      ...acc,
      [loaderKey]: AllLoaders[loaderKey].getLoader(),
    }),
    {},
  );

  return {
    graphiql: process.env.NODE_ENV !== "production",
    schema,
    context: {
      req,
      res,
      user,
      dataloaders,
    },
  };
};

export default graphql;
