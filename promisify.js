const promisify = fn => {
  if (typeof fn !== 'function') {
    throw new TypeError('A function is expected as the argument');
  }

  return (...args) => {
    return new Promise((resolve, reject) => {
      fn.call(null, ...args, (err, data) => {
        if (err) reject(err);
        resolve(data);
      });
    });
  };
};

// Check
const fs = require('fs');
const readFileAsync = promisify(fs.readFile);
const accessAsync = promisify(fs.access);

readFileAsync('./README.md', 'utf8')
  .then(data => console.log(data))
  .catch(err => console.log(err));

accessAsync('./no-file', fs.constants.F_OK)
  .catch(err => console.log(err ? 'no access!' : 'can read/write'));

