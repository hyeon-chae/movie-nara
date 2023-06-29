module.exports = {
  rules: [{
    test: /\.s[ac]ss$/i,
      use: [
        "style-loader",
        "css-loader",
        {
          loader: "sass-loader",
          options: {
            // Prefer `dart-sass`
            implementation: require("sass"),
          },
        },
      ]
  }],
  // style: {
  //     sass: {
  //       loaderOptions: {
  //         additionalData: `
  //           @import "@/styles/_variable.scss";
  //           @import "@/styles/_mixin.scss";
  //         `
  //       }
  //     }
  //   },

}