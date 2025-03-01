function hi() {
}
hi();
const cheerio = require("cheerio");
const axios = require("axios");
const FormData = require("form-data");
async function ephoto(_0x549e75, _0x5ed575) {
  let _0x5c51a9 = new FormData();
  let _0x155793 = await axios.get(_0x549e75, {
    'headers': {
      'user-agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
    }
  });
  let _0x302afb = cheerio.load(_0x155793.data);
  let _0x449e9f = _0x302afb("input[name=token]").val();
  let _0x36fa4e = _0x302afb("input[name=build_server]").val();
  let _0xaa0fa3 = _0x302afb('input[name=build_server_id]').val();
  _0x5c51a9.append("text[]", _0x5ed575);
  _0x5c51a9.append("token", _0x449e9f);
  _0x5c51a9.append("build_server", _0x36fa4e);
  _0x5c51a9.append("build_server_id", _0xaa0fa3);
  let _0x265788 = await axios({
    'url': _0x549e75,
    'method': "POST",
    'data': _0x5c51a9,
    'headers': {
      'Accept': "*/*",
      'Accept-Language': 'en-US,en;q=0.9',
      'user-agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
      'cookie': _0x155793.headers['set-cookie']?.["join"]("; "),
      ..._0x5c51a9.getHeaders()
    }
  });
  let _0x11de3e = cheerio.load(_0x265788.data);
  let _0x11cbd8 = JSON.parse(_0x11de3e("input[name=form_value_input]").val());
  _0x11cbd8["text[]"] = _0x11cbd8.text;
  delete _0x11cbd8.text;
  let {
    data: _0x46129b
  } = await axios.post("https://en.ephoto360.com/effect/create-image", new URLSearchParams(_0x11cbd8), {
    'headers': {
      'user-agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
      'cookie': _0x155793.headers['set-cookie'].join("; ")
    }
  });
  return _0x36fa4e + _0x46129b.image;
}
module["export"] = {
  'ephoto': ephoto
};