const basicInfo = require("./basicInfo");
const components = require('./components');
const posts =  require('./posts');

module.exports = {
  ...basicInfo,
  ...components,
  ...posts,
};
