function hi() {
}
hi();
const axios = require("axios");
const BodyForm = require('form-data');
const fs = require('fs');
const TelegraPH = async _0x1a5b9d => new Promise(async (_0x3a7723, _0xbd293f) => {
  if (!fs.existsSync(_0x1a5b9d)) {
    return _0xbd293f(new Error("File not Found"));
  }
  try {
    const _0x5c4821 = new BodyForm();
    _0x5c4821.append("file", fs.createReadStream(_0x1a5b9d));
    const _0x3ee802 = await axios({
      'url': "https://telegra.ph/upload",
      'method': "POST",
      'headers': {
        ..._0x5c4821.getHeaders()
      },
      'data': _0x5c4821
    });
    return _0x3a7723('https://telegra.ph' + _0x3ee802.data[0x0].src);
  } catch (_0x2fbc6a) {
    return _0xbd293f(new Error(String(_0x2fbc6a)));
  }
});
module.exports = {
  'TelegraPH': TelegraPH
};