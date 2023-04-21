

module.exports = (base) => {
  let loader = base.module.rules.find(l => l.test.toString() === "/\\.(png|jpe?g|gif|webp)(\\?.*)?$/");

  Object.assign(loader, {
    use: [
      {
        loader: 'image-webpack-loader',
        options: {
          mozjpeg: {
            progressive: true,
          },
          optipng: {
            enabled: false
          },
          pngquant: {
            quality: [0.65, 0.9],
            speed: 4
          },
          gifsicle: {
            interlaced: false
          },
          webp: {
            quality: 75
          }
        }
      }
    ]
  })
}