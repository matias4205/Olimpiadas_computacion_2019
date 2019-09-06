const a = require('../utils/readingsJoinQueryBuilder');
const b = require('../utils/truncateDateMinutes');
const util = require('util')

// alternative shortcut
console.log(util.inspect(a('5d6d46489227940717363960', new Date()), false, null, true /* enable colors */))