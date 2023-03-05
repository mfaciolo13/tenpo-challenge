module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        require.resolve("babel-plugin-module-resolver"),
        {
          root: ["./app/"],
          alias: {
            assets: "./app/assets",
            components: "./app/components",
            utils: "./app/utils",
          },
        },
      ],
    ],
  };
};
