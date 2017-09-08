const webpack = require('webpack');
const path = require('path');
const precss = require('precss');
const autoprefixer = require('autoprefixer');

// config
const config = {
  devtool: 'source-map',
  entry: {
    main: path.join(__dirname, '/src/js/main.js'),
    style: path.join(__dirname, '/src/css/index.js')
  },
  output: {
    path: path.join(__dirname, '/public/'),
    publicPath: '/',
    filename: '[name].js'
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint'
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react', 'stage-0', 'es2016', 'es2017']
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css?modules',
        include: /flexboxgrid/
      },
      {
        test: /\.css$/,
        loader: 'style!css!postcss',
        include: /node_modules/,
        exclude: /flexboxgrid/
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass!postcss'
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml'
      }

    ]
  },
  eslint: {
    configFile: './.eslintrc'
  },
  devServer: {
    port: 3000,
    contentBase: './public',
    colors: true,
    historyApiFallback: true,
    inline: true
  },
  postcss: () => [
    autoprefixer({
      browsers: [
        'IE 9', 'IE 10', 'IE 11', 'last 2 versions'
      ]
    }),
    precss
  ]
};

const profile = process.argv[2].substr(2);

console.log('-------------------------');
console.log(profile);
console.log('-------------------------');

const define = {
  'process.env': {
    NODE_ENV: JSON.stringify(profile)
  }
};

config.plugins = [];
config.plugins.push(new webpack.DefinePlugin(define));

if (profile !== 'development' && profile !== 'staging') {
  config.devtool = false;
  config.plugins.push(new webpack.optimize.OccurenceOrderPlugin());
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    comments: false,
    compress: {
      warnings: false
    }
  }));
}

module.exports = config;
