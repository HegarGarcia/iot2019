const coap = require("coap");
const server = coap.createServer();

server.on("request", (req, res) => {
  const endpoint = req.url.split("/")[1];

  switch (endpoint) {
    case "custom":
      res.end("Hello from custom response");
      break;
    default:
      res.end(`Hello ${endpoint}\n`);
      break;
  }
});

server.listen(() => console.log("Server started..."));
