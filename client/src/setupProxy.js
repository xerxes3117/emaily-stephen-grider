const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    ["/auth/google", "/api/*"],
    createProxyMiddleware({
      target: "http://localhost:5002",
      headers: {
        'x-client-url': 'http://localhost:3004', // Set your client URL here
      },
    })
  );
};