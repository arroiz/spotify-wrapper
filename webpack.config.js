const { join } = require('path');

module.exports = {
  entry: './index',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    path: join(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'spotifyWrapper',
  },
  devtool: 'source-map',
};
