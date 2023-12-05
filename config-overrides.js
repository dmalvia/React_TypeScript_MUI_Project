const { addBabelPlugins, override } = require("customize-cra");
module.exports = override(
  ...addBabelPlugins("@mightymeld/runtime/babel-plugin-mightymeld")
);
