const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    main: './src/pages/index.js' // указали первое место, куда заглянет webpack, — файл index.js в папке src  
  },
  output: {
    path: path.resolve(__dirname, 'dist'), // переписали точку выхода, используя утилиту path 
    filename: 'main.js', // указали в какой файл будет собираться весь js и дали ему имя
      publicPath: '',
  },
  mode: 'development', // добавили режим разработчика
  devServer: {
    static: path.resolve(__dirname, './dist'), // путь, куда "смотрит" режим разработчика
    compress: true, // это ускорит загрузку в режиме разработки
    port: 8080, // порт, чтобы открывать сайт по адресу localhost:8080, но можно поменять порт

    open: true // сайт будет открываться сам при запуске npm run dev
  },
  module: {
    rules: [{ // rules — это массив правил
      test: /\.js$/, // регулярное выражение, которое ищет все js файлы
      use: 'babel-loader', // при обработке этих файлов нужно использовать babel-loader
      exclude: '/node_modules/' // исключает папку node_modules, файлы в ней обрабатывать не нужно
    },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name].[hash][ext]',
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name].[hash][ext]',
        }
      },
      {
        test: /\.css$/,
        // при обработке этих файлов нужно использовать
        // MiniCssExtractPlugin.loader и css-loader
        use: [MiniCssExtractPlugin.loader, {
          loader: 'css-loader',
          options: { importLoaders: 1 }
        },
        // Добавьте postcss-loader
          'postcss-loader'
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CleanWebpackPlugin(), // использовали плагин
    new MiniCssExtractPlugin(),
  ]
}
