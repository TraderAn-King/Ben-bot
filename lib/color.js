function hi() {
}
hi();
const chalk = require("chalk");
const color = (_0x462af9, _0x9192f0) => {
  return !_0x9192f0 ? chalk.green(_0x462af9) : chalk.keyword(_0x9192f0)(_0x462af9);
};
const bgcolor = (_0x1e25d5, _0x10805e) => {
  return !_0x10805e ? chalk.green(_0x1e25d5) : chalk.bgKeyword(_0x10805e)(_0x1e25d5);
};
module.exports = {
  'color': color,
  'bgcolor': bgcolor
};