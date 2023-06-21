const fs = require('fs');
const util = require('util');

const getPaths = require('../utils/getPaths');

const nodePaths = getPaths('./dist/node');
const typesPaths = getPaths('./dist/@types');

typesPaths.forEach((path) => {
  const normalizedPath = path.replace(/^\.\/dist\/@types/, './dist/node').replace(/d\.ts$/, 'cjs');

  if (!nodePaths.includes(normalizedPath) && !/\/types\.d\.ts$/.test(path)) {
    util
      .promisify(fs.rm)(path)
      .then(() => fs.rmdir(path.replace(/\/[^/]*$/gm, ''), () => {}));
  }
});