function hi() {
}
hi();
const FormData = require("form-data");
async function remini(_0x56d22f, _0x223c82) {
  return new Promise(async (_0x26b050, _0x138535) => {
    let _0x4dbc0e = ["enhance", "recolor", "dehaze"];
    if (_0x4dbc0e.includes(_0x223c82)) {
      _0x223c82 = _0x223c82;
    } else {
      _0x223c82 = _0x4dbc0e[0x0];
    }
    let _0x107d35 = new FormData();
    let _0x5a8fed = "https://inferenceengine.vyro.ai/" + _0x223c82;
    _0x107d35.append("model_version", 0x1, {
      'Content-Transfer-Encoding': 'binary',
      'contentType': "multipart/form-data; charset=uttf-8"
    });
    _0x107d35.append("image", Buffer.from(_0x56d22f), {
      'filename': "enhance_image_body.jpg",
      'contentType': "image/jpeg"
    });
    _0x107d35.submit({
      'url': _0x5a8fed,
      'host': "inferenceengine.vyro.ai",
      'path': '/' + _0x223c82,
      'protocol': "https:",
      'headers': {
        'User-Agent': "okhttp/4.9.3",
        'Connection': "Keep-Alive",
        'Accept-Encoding': "gzip"
      }
    }, function (_0xe37745, _0x485196) {
      if (_0xe37745) {
        _0x138535();
      }
      let _0x14d2f9 = [];
      _0x485196.on("data", function (_0x4133c, _0x4fb930) {
        _0x14d2f9.push(_0x4133c);
      }).on("end", () => {
        _0x26b050(Buffer.concat(_0x14d2f9));
      });
      _0x485196.on("error", _0x46f4ff => {
        _0x138535();
      });
    });
  });
}
module.exports.remini = remini;