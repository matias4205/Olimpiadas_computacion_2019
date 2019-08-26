const bycrypt = require('bcryptjs');

module.exports = async ({ password }) => {
    const hashedPassword = await bycrypt.hash(password, 10);
    return hashedPassword;
}