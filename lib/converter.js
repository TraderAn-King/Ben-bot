function hi() {
}
hi();
const fs = require('fs');
const path = require("path");
const {
  spawn
} = require("child_process");
function ffmpeg(_0x390ddc, _0xb87ef4 = [], _0x244090 = '', _0x2e4d82 = '') {
  return new Promise(async (_0x4e8f1b, _0xbd66be) => {
    try {
      let _0x3bc527 = path.join(__dirname, "../tmp", +new Date() + '.' + _0x244090);
      let _0x2f398d = _0x3bc527 + '.' + _0x2e4d82;
      await fs.promises.writeFile(_0x3bc527, _0x390ddc);
      spawn("ffmpeg", ['-y', '-i', _0x3bc527, ..._0xb87ef4, _0x2f398d]).on("error", _0xbd66be).on("close", async _0x2981c5 => {
        try {
          await fs.promises.unlink(_0x3bc527);
          if (_0x2981c5 !== 0x0) {
            return _0xbd66be(_0x2981c5);
          }
          _0x4e8f1b({
            'data': await fs.promises.readFile(_0x2f398d),
            'filename': _0x2f398d,
            'delete'() {
              return fs.promises.unlink(_0x2f398d);
            }
          });
        } catch (_0x14187d) {
          _0xbd66be(_0x14187d);
        }
      });
    } catch (_0x442f03) {
      _0xbd66be(_0x442f03);
    }
  });
}
function toPTT(_0x1edf9c, _0x3b6a50) {
  return ffmpeg(_0x1edf9c, ["-vn", '-c:a', "libopus", '-b:a', "128k", "-vbr", 'on'], _0x3b6a50, "ogg");
}
function toAudio(_0x31ef77, _0x1a7d13) {
  return ffmpeg(_0x31ef77, ["-vn", "-c:a", 'libopus', "-b:a", '128k', '-vbr', 'on', "-compression_level", '10'], _0x1a7d13, "opus");
}
function toVideo(_0x4f19f8, _0x1e3946) {
  return ffmpeg(_0x4f19f8, ['-c:v', "libx264", "-c:a", "aac", "-ab", "128k", '-ar', "44100", "-crf", '32', '-preset', "slow"], _0x1e3946, 'mp4');
}
module.exports = {
  'toAudio': toAudio,
  'toPTT': toPTT,
  'toVideo': toVideo,
  'ffmpeg': ffmpeg
};