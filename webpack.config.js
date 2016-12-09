// Const
const webpack = require('webpack');

// Exporting
module.exports = {
    entry: './index.js',
    output: {
        filename: 'xp-buffer.js',
        path: './dist'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}, output: {comments: false}})
    ]
};
