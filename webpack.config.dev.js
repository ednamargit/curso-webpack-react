const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const CopyPlugin = require('copy-webpack-plugin'); 
// const CssMinimizerPlugin = require('css-minimizer-webpack-plugin'); 
// const TerserPlugin = require('terser-webpack-plugin'); 
// const DotEnv = require('dotenv-webpack'); 
// const { CleanWebpackPlugin } = require('clean-webpack-plugin'); 

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'), 
    filename: '[name].[contenthash].js',
    assetModuleFilename: 'assets/images/[hash][ext][query]'
  }, 
  resolve: {
    extensions: ['.js', '.jsx'],
    // alias: {
    //   '@utils': path.resolve(__dirname, 'src/utils/'),
    //   '@templates': path.resolve(__dirname, 'src/templates/'),
    //   '@styles': path.resolve(__dirname, 'src/styles/'),
    //   '@images': path.resolve(__dirname, 'src/assets/images/'),
    // }
  },
  mode: 'development', 
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        } 
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ],
      },
      // {
      //   test: /\.png/,
      //   type: 'asset/resource'
      // },
      // {
      //   test: /\.(woff|woff2)$/,
      //   use: {
      //     loader: 'url-loader',
      //     options: {
      //       limit: 10000,
      //       mimetype: "application/font-woff",
      //       name: "[name].[contenthash].[ext]",
      //       outputPath: "./assets/fonts/", 
      //       publicPath: "./assets/fonts/",
      //       esModule: false,
      //     }, 
      //   }
      // }
    ]
  }, 
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port:3007
  },
  plugins: [
    new HtmlWebPackPlugin({
      inject: true,
      template: './public/index.html',
      filename: './index.html'
    }), 
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
  ],
}