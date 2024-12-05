const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
//const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// CHANGE APP TITLE BELOW. DIDN'T BOTHER WITH ISSUES IMPORTING A VARIABLE
const makeHTMLTemplate = ({ htmlWebpackPlugin }) => `
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      ${htmlWebpackPlugin.tags?.headTags}
      <title>App Title</title>
    </head>
    <body>
      <div id="root"></div>
      ${htmlWebpackPlugin.tags?.bodyTags}
    </body>
  </html>
`

const makeHTMLPlugin = () =>
  new HtmlWebpackPlugin({
    templateContent: makeHTMLTemplate,
    filename: 'index.html',
    inject: false, // Disable automatic injection to use our custom template logic
    publicPath: '',
  })


// Webpack Configuration
module.exports = {
  entry: './src/pages/Entry.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    //filename: 'bundle.js',
    clean: true, // Clean old build files
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'], // Add .ts and .tsx extensions
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
        /*
        use: {
          loader: 'ts-loader',
        }
        */
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'], // 'style-loader': Injects styles into the DOM, 'css-loader': Resolves CSS imports, 'sass-loader': Compiles SCSS to CSS
        //use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    makeHTMLPlugin(),
    /*
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    */
  ],
  devServer: {
    static: './dist', // Serve files from "dist"
    port: 3000,
    hot: true, // Enable hot module replacement
    open: true, // Supposed to automatically open the browser
    historyApiFallback: true, // Redirect all 404s to 'index.html'
  },
}
