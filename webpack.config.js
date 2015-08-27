var path = require('path');

module.exports = {
    entry: './app.js',
    output: {
        path: __dirname,
        filename: './bundle.js'
    },
    module: {
        loaders: [
            { test: path.join(__dirname), loader: 'babel' }
        ]
    }
};