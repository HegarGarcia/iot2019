const coap = require("coap");

["prueba", "custom"].forEach(endpoint => {
  const req = coap.request(`coap://localhost/${endpoint}`);
  req.on("response", res => console.log(res.payload.toString()));
  req.end();
});
