function hi() {
}
hi();
const fs = require('fs');
const {
  tmpdir
} = require('os');
const Crypto = require("crypto");
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ff = require("fluent-ffmpeg");
const webp = require("node-webpmux");
const path = require('path');
ff.setFfmpegPath(ffmpegPath);
async function imageToWebp(_0x388a9d) {
  const _0x4d9acd = path.join(tmpdir(), Crypto.randomBytes(0x6).readUIntLE(0x0, 0x6).toString(0x24) + '.webp');
  const _0xf96831 = path.join(tmpdir(), Crypto.randomBytes(0x6).readUIntLE(0x0, 0x6).toString(0x24) + '.jpg');
  fs.writeFileSync(_0xf96831, _0x388a9d);
  await new Promise((_0xcef619, _0xb29db3) => {
    ff(_0xf96831).on("error", _0xb29db3).on("end", () => _0xcef619(true)).addOutputOptions(["-vcodec", "libwebp", "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"]).toFormat("webp").save(_0x4d9acd);
  });
  const _0xbbece6 = fs.readFileSync(_0x4d9acd);
  fs.unlinkSync(_0x4d9acd);
  fs.unlinkSync(_0xf96831);
  return _0xbbece6;
}
async function videoToWebp(_0x142280) {
  const _0x182d74 = path.join(tmpdir(), Crypto.randomBytes(0x6).readUIntLE(0x0, 0x6).toString(0x24) + ".webp");
  const _0x41193b = path.join(tmpdir(), Crypto.randomBytes(0x6).readUIntLE(0x0, 0x6).toString(0x24) + ".mp4");
  fs.writeFileSync(_0x41193b, _0x142280);
  await new Promise((_0x29a7da, _0x42d731) => {
    ff(_0x41193b).on("error", _0x42d731).on("end", () => _0x29a7da(true)).addOutputOptions(["-vcodec", "libwebp", "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse", "-loop", '0', "-ss", '00:00:00', '-t', '00:00:05', "-preset", "default", "-an", "-vsync", '0']).toFormat("webp").save(_0x182d74);
  });
  const _0x46576d = fs.readFileSync(_0x182d74);
  fs.unlinkSync(_0x182d74);
  fs.unlinkSync(_0x41193b);
  return _0x46576d;
}
async function writeExifImg(_0x2ce8e3, _0x1a17cd) {
  let _0x30f55f = await imageToWebp(_0x2ce8e3);
  const _0x3d7bef = path.join(tmpdir(), Crypto.randomBytes(0x6).readUIntLE(0x0, 0x6).toString(0x24) + ".webp");
  const _0x1af20d = path.join(tmpdir(), Crypto.randomBytes(0x6).readUIntLE(0x0, 0x6).toString(0x24) + ".webp");
  fs.writeFileSync(_0x3d7bef, _0x30f55f);
  if (_0x1a17cd.packname || _0x1a17cd.author) {
    const _0x1a7f33 = new webp.Image();
    const _0x36a709 = {
      'sticker-pack-id': "https://github.com/DikaArdnt/Hisoka-Morou",
      'sticker-pack-name': _0x1a17cd.packname,
      'sticker-pack-publisher': _0x1a17cd.author,
      'emojis': _0x1a17cd.categories ? _0x1a17cd.categories : ['']
    };
    const _0x2a3636 = Buffer.from([0x49, 0x49, 0x2a, 0x0, 0x8, 0x0, 0x0, 0x0, 0x1, 0x0, 0x41, 0x57, 0x7, 0x0, 0x0, 0x0, 0x0, 0x0, 0x16, 0x0, 0x0, 0x0]);
    const _0x18089b = Buffer.from(JSON.stringify(_0x36a709), "utf-8");
    const _0xa11edd = Buffer.concat([_0x2a3636, _0x18089b]);
    _0xa11edd.writeUIntLE(_0x18089b.length, 0xe, 0x4);
    await _0x1a7f33.load(_0x3d7bef);
    fs.unlinkSync(_0x3d7bef);
    _0x1a7f33.exif = _0xa11edd;
    await _0x1a7f33.save(_0x1af20d);
    return _0x1af20d;
  }
}
async function writeExifVid(_0x44a81c, _0x24e3ce) {
  let _0x3d65b1 = await videoToWebp(_0x44a81c);
  const _0xf25fd7 = path.join(tmpdir(), Crypto.randomBytes(0x6).readUIntLE(0x0, 0x6).toString(0x24) + ".webp");
  const _0xa21949 = path.join(tmpdir(), Crypto.randomBytes(0x6).readUIntLE(0x0, 0x6).toString(0x24) + '.webp');
  fs.writeFileSync(_0xf25fd7, _0x3d65b1);
  if (_0x24e3ce.packname || _0x24e3ce.author) {
    const _0x3661b1 = new webp.Image();
    const _0x1d5711 = {
      'sticker-pack-id': "https://github.com/DikaArdnt/Hisoka-Morou",
      'sticker-pack-name': _0x24e3ce.packname,
      'sticker-pack-publisher': _0x24e3ce.author,
      'emojis': _0x24e3ce.categories ? _0x24e3ce.categories : ['']
    };
    const _0x445fdd = Buffer.from([0x49, 0x49, 0x2a, 0x0, 0x8, 0x0, 0x0, 0x0, 0x1, 0x0, 0x41, 0x57, 0x7, 0x0, 0x0, 0x0, 0x0, 0x0, 0x16, 0x0, 0x0, 0x0]);
    const _0x44395d = Buffer.from(JSON.stringify(_0x1d5711), 'utf-8');
    const _0x57cd84 = Buffer.concat([_0x445fdd, _0x44395d]);
    _0x57cd84.writeUIntLE(_0x44395d.length, 0xe, 0x4);
    await _0x3661b1.load(_0xf25fd7);
    fs.unlinkSync(_0xf25fd7);
    _0x3661b1.exif = _0x57cd84;
    await _0x3661b1.save(_0xa21949);
    return _0xa21949;
  }
}
async function writeExif(_0x1f3565, _0x3ad8de) {
  let _0x12820e = /webp/.test(_0x1f3565.mimetype) ? _0x1f3565.data : /image/.test(_0x1f3565.mimetype) ? await imageToWebp(_0x1f3565.data) : /video/.test(_0x1f3565.mimetype) ? await videoToWebp(_0x1f3565.data) : '';
  const _0x420a26 = path.join(tmpdir(), Crypto.randomBytes(0x6).readUIntLE(0x0, 0x6).toString(0x24) + ".webp");
  const _0x6a26ec = path.join(tmpdir(), Crypto.randomBytes(0x6).readUIntLE(0x0, 0x6).toString(0x24) + '.webp');
  fs.writeFileSync(_0x420a26, _0x12820e);
  if (_0x3ad8de.packname || _0x3ad8de.author) {
    const _0x241345 = new webp.Image();
    const _0x33d65c = {
      'sticker-pack-id': "https://github.com/DikaArdnt/Hisoka-Morou",
      'sticker-pack-name': _0x3ad8de.packname,
      'sticker-pack-publisher': _0x3ad8de.author,
      'emojis': _0x3ad8de.categories ? _0x3ad8de.categories : ['']
    };
    const _0x8c022c = Buffer.from([0x49, 0x49, 0x2a, 0x0, 0x8, 0x0, 0x0, 0x0, 0x1, 0x0, 0x41, 0x57, 0x7, 0x0, 0x0, 0x0, 0x0, 0x0, 0x16, 0x0, 0x0, 0x0]);
    const _0x1a2968 = Buffer.from(JSON.stringify(_0x33d65c), 'utf-8');
    const _0x5f4b5b = Buffer.concat([_0x8c022c, _0x1a2968]);
    _0x5f4b5b.writeUIntLE(_0x1a2968.length, 0xe, 0x4);
    await _0x241345.load(_0x420a26);
    fs.unlinkSync(_0x420a26);
    _0x241345.exif = _0x5f4b5b;
    await _0x241345.save(_0x6a26ec);
    return _0x6a26ec;
  }
}
async function exifAvatar(_0x28552e, _0xc377b2, _0x24c67a, _0x31aa43 = [''], _0x49d7f8 = {}) {
  const {
    default: {
      Image: _0x185ee3
    }
  } = await import('node-webpmux');
  const _0x3f8723 = new _0x185ee3();
  const _0x2fa72b = {
    'sticker-pack-id': 'parel-kntll',
    'sticker-pack-name': _0xc377b2,
    'sticker-pack-publisher': _0x24c67a,
    'emojis': _0x31aa43,
    'is-avatar-sticker': 0x1,
    ..._0x49d7f8
  };
  let _0x1e4a26 = Buffer.from([0x49, 0x49, 0x2a, 0x0, 0x8, 0x0, 0x0, 0x0, 0x1, 0x0, 0x41, 0x57, 0x7, 0x0, 0x0, 0x0, 0x0, 0x0, 0x16, 0x0, 0x0, 0x0]);
  let _0x5e77ad = Buffer.from(JSON.stringify(_0x2fa72b), "utf8");
  let _0x3e2f91 = Buffer.concat([_0x1e4a26, _0x5e77ad]);
  _0x3e2f91.writeUIntLE(_0x5e77ad.length, 0xe, 0x4);
  await _0x3f8723.load(_0x28552e);
  _0x3f8723.exif = _0x3e2f91;
  return await _0x3f8723.save(null);
}
async function addExif(_0x666141, _0x161c19, _0x306d7c, _0x121b5c = [''], _0x2455d8 = {}) {
  const _0x22e61b = new webp.Image();
  const _0x5f1a08 = Crypto.randomBytes(0x20).toString("hex");
  const _0x11691a = {
    'sticker-pack-id': _0x5f1a08,
    'sticker-pack-name': _0x161c19,
    'sticker-pack-publisher': _0x306d7c,
    'emojis': _0x121b5c,
    ..._0x2455d8
  };
  let _0x5c297f = Buffer.from([0x49, 0x49, 0x2a, 0x0, 0x8, 0x0, 0x0, 0x0, 0x1, 0x0, 0x41, 0x57, 0x7, 0x0, 0x0, 0x0, 0x0, 0x0, 0x16, 0x0, 0x0, 0x0]);
  let _0x19b17c = Buffer.from(JSON.stringify(_0x11691a), 'utf8');
  let _0x3f0db1 = Buffer.concat([_0x5c297f, _0x19b17c]);
  _0x3f0db1.writeUIntLE(_0x19b17c.length, 0xe, 0x4);
  await _0x22e61b.load(_0x666141);
  _0x22e61b.exif = _0x3f0db1;
  return await _0x22e61b.save(null);
}
module.exports = {
  'imageToWebp': imageToWebp,
  'videoToWebp': videoToWebp,
  'writeExifImg': writeExifImg,
  'writeExifVid': writeExifVid,
  'writeExif': writeExif,
  'exifAvatar': exifAvatar,
  'addExif': addExif
};