'use strict';

const inc = c => {
  if (typeof c === 'object') {
    return c.n++;
  }
};

module.exports = {
  inc
};
