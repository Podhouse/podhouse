import { Request, Response } from "koa";
import { Options } from "koa-graphql";

import schema from "./graphql/schema";

import * as loaders from "./loaders";

import { Loaders } from "./common/types";

const graphql = async (req: Request, res: Response) => {
  const allLoaders: Loaders = loaders;

  const dataloaders = Object.keys(allLoaders).reduce(
    (acc, loaderKey) => ({
      ...acc,
      [loaderKey]: allLoaders[loaderKey].getLoader(),
    }),
    {},
  );

  const options: Options = {
    schema,
    context: {
      req,
      res,
      dataloaders,
    },
  };

  return options;
};

export default graphql;
