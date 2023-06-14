// Had to add this because bug was stopping my proxy from working... 
// https://stackoverflow.com/questions/70374005/invalid-options-object-dev-server-has-been-initialized-using-an-options-object

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  console.log('Proxy middleware has been initialized.');
  app.use(
    '/api',
    createProxyMiddleware({
      //  target: 'http://backend:4000', 
     target: 'http://localhost:4000',
      changeOrigin: true,
      onProxyReq: (proxyReq, req, res) => {
        console.log('Proxy request URL:', req.url);
      },
      onProxyRes: (proxyRes, req, res) => {
        console.log('Proxy response status code:', proxyRes.statusCode);
      },
    })
  );
};