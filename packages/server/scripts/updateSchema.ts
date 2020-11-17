import fs from "fs";
import { graphql } from "graphql";
import { getIntrospectionQuery, printSchema } from "graphql/utilities";
import path from "path";

import { schema } from "../src/graphql/schema";

(async () => {
  const result = await graphql(schema, getIntrospectionQuery());
  if (result.errors) {
    console.error(
      "ERROR introspecting schema: ",
      JSON.stringify(result.errors, null, 2),
    );
  } else {
    fs.writeFileSync(
      path.join(__dirname, "../schema/schema.json"),
      JSON.stringify(result, null, 2),
    );
    fs.writeFileSync(
      path.join(__dirname, "../../web/schema/schema.json"),
      JSON.stringify(result, null, 2),
    );

    process.exit(0);
  }
})();

fs.writeFileSync(
  path.join(__dirname, "../schema/schema.graphql"),
  printSchema(schema),
);
fs.writeFileSync(
  path.join(__dirname, "../../web/schema/schema.graphql"),
  printSchema(schema),
);
