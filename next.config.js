const path = require('path');

module.exports = {
  // Enable static export
  output: 'export',

  // Disable Image Optimization for static export
  images: {
    unoptimized: true,
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[hash].[ext]',
          outputPath: 'static/media',
        },
      },
    });

    return config;
  },

  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};
