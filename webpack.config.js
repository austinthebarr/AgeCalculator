const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
entry: './src/main.js',
output: {
  filename: 'bundle.js',
  path: path.resolve(__dirname, 'dist')
},
devtool: 'bundle.js',
devServer: {
  contentBase: './dist'
},
plugins: [
  new CleanWebpackPlugin(['dist']),
  new HtmlWebpackPlugin({
    title: 'Galactic Age',
    template: './src/index.html',
    inject: 'body'
  })
],
module: {
  rules: [
    {
      test: /\.js$/,
      exclude:[
        /node_modules/,
        /spec/
      ],
      loader: "eslint-loader"
    },
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    },
    {
        test: /\.js$/,
        exclude: [
          /node_modules/,
          /spec/
        ],
        loader: "babel-loader",
        options: {
          presets: ['es2015']
        }
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,  
        use: [{
            loader: 'url-loader',
            options: { 
                limit: 8000, // Convert images < 8kb to base64 strings
                name: 'images/[hash]-[name].[ext]'
            } 
        }]
    }
  ]
}
};
