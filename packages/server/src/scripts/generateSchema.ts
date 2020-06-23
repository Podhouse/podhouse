import fs from "fs";
import path from "path";

import schema from "../graphql/schema";

import { graphql } from "graphql";
import { printSchema } from "graphql/utilities";

// Save JSON of full schema introspection for Babel Relay Plugin to use
(async () => {
  const result = await graphql(schema);
  if (result.errors) {
    console.error(
      "ERROR introspecting schema: ",
      JSON.stringify(result.errors, null, 2),
    ); //eslint-disable-line no-console
  } else {
    fs.writeFileSync(
      path.join(__dirname, "../data/schema.json"),
      JSON.stringify(result, null, 2),
    );
    fs.writeFileSync(
      path.join(__dirname, "../../console/data/schema.json"),
      JSON.stringify(result, null, 2),
    );

    process.exit(0);
  }
})();

// Save user readable type system shorthand of schema
fs.writeFileSync(
  path.join(__dirname, "../data/schema.graphql"),
  printSchema(schema),
);
fs.writeFileSync(
  path.join(__dirname, "../../console/data/schema.graphql"),
  printSchema(schema),
);
