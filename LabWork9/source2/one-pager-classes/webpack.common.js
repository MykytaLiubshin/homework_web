module.exports = {
    entry: "./components/App/index.jsx",
    devtool: 'inline-source-map',
    output: {
      filename: "bundle.[contenthash].js",
    },
    module: {
      rules: [
        {
          test: /\.(ts?|tsx?)$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        },
        {
          test: /\.(png|jpe?g|gif|css)$/,
          use: [
            {
              loader: "file-loader",
              options: {}
            }
          ]
        }
      ]
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js"]
    }
  };
  