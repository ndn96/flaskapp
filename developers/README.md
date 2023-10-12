Tất nhiên! Dưới đây là hướng dẫn từng bước về cách sử dụng Webpack để nén các tệp HTML, CSS và JS với nhiều điểm vào, cùng với nội dung tệp `.babelrc`:

**Bước 1: Tạo một dự án mới và cài đặt Webpack và Babel**

Nếu bạn chưa có, hãy tạo một thư mục dự án mới và khởi tạo nó bằng npm:

```bash
npm init -y
```

Tiếp theo, cài đặt Webpack và các trình nạp và plugin cần thiết, bao gồm Babel:

```bash
npm install webpack webpack-cli html-webpack-plugin mini-css-extract-plugin terser-webpack-plugin babel-loader @babel/core @babel/preset-env --save-dev
```

**Bước 2: Tạo cấu trúc thư mục cho dự án**

Tạo cấu trúc thư mục cho dự án của bạn như sau:

```
project-root/
  |- src/
  |   |- js/
  |   |   |- entry1.js
  |   |   |- entry2.js
  |   |- css/
  |   |   |- style1.css
  |   |   |- style2.css
  |   |- html/
  |   |   |- index.html
  |   |   |- other.html
  |- dist/
```

**Bước 3: Tạo các tệp HTML**

Trong thư mục `src/html`, tạo các tệp HTML cho các điểm vào (ví dụ, `index.html` và `other.html`).

**Bước 4: Tạo các tệp JavaScript**

Trong thư mục `src/js`, tạo các tệp JavaScript cho các điểm vào (ví dụ, `entry1.js` và `entry2.js`).

**Bước 5: Tạo các tệp CSS**

Trong thư mục `src/css`, tạo các tệp CSS cho các kiểu dáng (ví dụ, `style1.css` và `style2.css`).

**Bước 6: Cấu hình Webpack**

Tạo một tệp `webpack.config.js` trong thư mục gốc của dự án với cấu hình sau:

```javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: {
    entry1: './src/js/entry1.js',
    entry2: './src/js/entry2.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader', // Sử dụng Babel để biên dịch
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/html/index.html',
      filename: 'index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
      chunks: ['entry1'],
    }),
    new HtmlWebpackPlugin({
      template: './src/html/other.html',
      filename: 'other.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
      chunks: ['entry2'],
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  optimization: {
    minimizer: [new TerserWebpackPlugin()],
  },
};
```

**Bước 7: Tạo tệp `.babelrc`**

Tạo tệp `.babelrc` trong thư mục gốc của dự án với nội dung sau:

```json
{
  "presets": ["@babel/preset-env"]
}
```

Cấu hình Babel này sử dụng `@babel/preset-env` để biên dịch JavaScript.

**Bước 8: Chạy Webpack**

Bây giờ, bạn có thể chạy Webpack để xây dựng dự án của mình:

```bash
npx webpack --mode production
```

Webpack sẽ xử lý các tệp HTML, CSS và JS của bạn, nén chúng và tạo các tệp đầu ra tối ưu trong thư mục `dist`, bao gồm các tệp HTML, CSS và JS đã được nén cho mỗi điểm vào.

Vậy là bạn đã thành công trong việc thiết lập Webpack để nén các tệp HTML, CSS và JS với nhiều điểm vào, cùng với tệp `.babelrc` để biên dịch JavaScript.