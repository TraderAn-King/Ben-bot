function hi() {
}
hi();
const axios = require('axios');
const quote = async (_0x162e29, _0x37bf79, _0x23bcdc) => {
  const _0x5c8864 = {
    'type': "quote",
    'format': 'png',
    'backgroundColor': '#FFFFFF',
    'width': 0x200,
    'height': 0x300,
    'scale': 0x2,
    'messages': [{
      'entities': [],
      'avatar': true,
      'from': {
        'id': 0x1,
        'name': _0x37bf79,
        'photo': {
          'url': _0x23bcdc
        }
      },
      'text': _0x162e29,
      'replyMessage': {}
    }]
  };
  const _0x2392f1 = await axios.post("https://bot.lyo.su/quote/generate", _0x5c8864, {
    'headers': {
      'Content-Type': "application/json"
    }
  });
  const _0x47dffc = Buffer.from(_0x2392f1.data.result.image, "base64");
  return {
    'result': _0x47dffc
  };
};
module.exports = {
  'quote': quote
};