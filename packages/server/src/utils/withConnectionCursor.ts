import { connectionFromMongoCursor } from "@entria/graphql-mongoose-loader";
import { Model, Types } from "mongoose";
import { GraphQLContext } from "src/types";

export type LoaderFn<Context extends GraphQLContext> = (
  ctx: Context,
  id: string | Types.ObjectId,
) => any;

export const withConnectionCursor = <Context extends GraphQLContext>(
  model: Model<any>,
  loader: LoaderFn<Context>,
  condFn: (...p: any[]) => { conditions?: object; sort?: object },
) => (...params: any[]) => {
  const { conditions = {}, sort = {} } = condFn(...params);

  const [context, args] = params;

  const cursor = model.find(conditions).sort(sort);

  return connectionFromMongoCursor({
    cursor,
    context,
    args,
    loader: loader as any,
  });
};
