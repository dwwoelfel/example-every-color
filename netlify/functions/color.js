const { builder } = require("@netlify/functions");
const NetlifyGraph = require("./netlifyGraph");

async function handler(event) {
  console.log(process.env);
  const [, _prefix, ...packageNameParts] = event.path.split("/");

  const name = packageNameParts.join("/");

  console.log("name", name, _prefix, event.path);

  const time = new Date().toString();
  console.log(`Time: ${time}`);

  const { data, errors } = await NetlifyGraph.fetchNpmPackage({ name });

  console.log({ data, errors });

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    ttl: 3600,
    body: JSON.stringify(errors ? { errors } : { data }, null, 2),
  };
}

exports.handler = builder(handler);
