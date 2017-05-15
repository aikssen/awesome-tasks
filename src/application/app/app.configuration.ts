export const config = {
  clientId: process.env.CLIENT_ID,
  discoveryDocs: [process.env.DISCOVER_DOCS],
  scope: [process.env.SCOPE_1, process.env.SCOPE_2].join(' ')
};
