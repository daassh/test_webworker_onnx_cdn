const withTM = require("next-transpile-modules")(["worker-loader"]);

module.exports = withTM({
  productionBrowserSourceMaps: false,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
// 配置 worker-loader
config.module.rules.push({
  test: /\.worker\.js$/,
  //include: path.resolve(__dirname, 'src', 'workers'),
  use: [
    {
      loader: 'worker-loader',
      options: {
        filename: 'static/[hash].worker.js',
        publicPath: '/_next/',
      },
    },
  ],
});

return config;
},
});