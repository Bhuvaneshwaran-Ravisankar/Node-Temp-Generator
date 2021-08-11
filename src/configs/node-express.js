const baseConfig = {
  builds: [
    {
      src: "src/index.js",
      use: "@temp/node-server",
    },
  ],
  routes: [{ src: "/.*", dest: "src/index.js" }],
};

function nodeExpress(config) {
  let merged = { ...baseConfig, ...config };
  return merged;
}

module.exports = nodeExpress;
