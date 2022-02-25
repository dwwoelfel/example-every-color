const { builder } = require("@netlify/functions");
const NetlifyGraph = require("./netlifyGraph");

async function handler(event) {
  console.log("event", event);

  const [, ...packageNameParts] = event.path.split("/");

  const name = packageNameParts.join("/");

  const time = new Date().toString();
  console.log(`Time: ${time}`);

  const resp = await NetlifyGraph.fetchNpmPackage({ name });

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(resp),
  };
}

exports.handler = builder(handler);
