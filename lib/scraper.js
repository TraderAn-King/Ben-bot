function hi() {
}
hi();
let FormData = require("form-data");
var axios = require('axios');
var cheerio = require("cheerio");
async function remini(_0x58bc60, _0x85bb2c) {
  return new Promise(async (_0x167b9f, _0xad236d) => {
    let _0x37143f = ["enhance", "recolor", "dehaze"];
    if (_0x37143f.includes(_0x85bb2c)) {
      _0x85bb2c = _0x85bb2c;
    } else {
      _0x85bb2c = _0x37143f[0x0];
    }
    let _0x3c772f = new FormData();
    let _0x3fe797 = "https://inferenceengine.vyro.ai/" + _0x85bb2c;
    _0x3c772f.append("model_version", 0x1, {
      'Content-Transfer-Encoding': 'binary',
      'contentType': "multipart/form-data; charset=uttf-8"
    });
    _0x3c772f.append("image", Buffer.from(_0x58bc60), {
      'filename': "enhance_image_body.jpg",
      'contentType': "image/jpeg"
    });
    _0x3c772f.submit({
      'url': _0x3fe797,
      'host': "inferenceengine.vyro.ai",
      'path': '/' + _0x85bb2c,
      'protocol': "https:",
      'headers': {
        'User-Agent': "okhttp/4.9.3",
        'Connection': "Keep-Alive",
        'Accept-Encoding': "gzip"
      }
    }, function (_0x4617f7, _0x594179) {
      if (_0x4617f7) {
        _0xad236d();
      }
      let _0x1986e1 = [];
      _0x594179.on("data", function (_0x2e0580, _0x3fce0c) {
        _0x1986e1.push(_0x2e0580);
      }).on("end", () => {
        _0x167b9f(Buffer.concat(_0x1986e1));
      });
      _0x594179.on("error", _0x3cda77 => {
        _0xad236d();
      });
    });
  });
}
async function jarak(_0x314366, _0xac8683) {
  var _0x40efb2 = (await axios("https://www.google.com/search?q=" + encodeURIComponent("jarak " + _0x314366 + " ke " + _0xac8683) + "&hl=id")).data;
  var _0xa3cf0d = cheerio.load(_0x40efb2);
  var _0x129543 = {};
  var _0x41d071 = _0x40efb2.split("var s='")?.[0x1]?.["split"]("'")?.[0x0];
  _0x129543.img = /^data:.*?\/.*?;base64,/i.test(_0x41d071) ? Buffer.from(_0x41d071.split`,`[0x1], "base64") : '';
  _0x129543.desc = _0xa3cf0d("div.BNeawe.deIvCb.AP7Wnd").text()?.['trim']();
  return _0x129543;
}
async function webp2mp4File(_0x57d697) {
  const _0xe09f30 = new FormData();
  _0xe09f30.append("new-image-url", '');
  _0xe09f30.append('new-image', fs.createReadStream(_0x57d697));
  try {
    const {
      data: _0xa33f04
    } = await axios.post("https://s6.ezgif.com/webp-to-mp4", _0xe09f30, {
      'headers': {
        'Content-Type': "multipart/form-data; boundary=" + _0xe09f30._boundary
      }
    });
    const _0x4810cf = new BodyForm();
    const _0x247a4f = cheerio.load(_0xa33f04);
    const _0x4e48fe = _0x247a4f("input[name=\"file\"]").attr("value");
    _0x4810cf.append("file", _0x4e48fe);
    _0x4810cf.append("convert", "Convert WebP to MP4!");
    const {
      data: _0x4c0f16
    } = await axios.post('https://ezgif.com/webp-to-mp4/' + _0x4e48fe, _0x4810cf, {
      'headers': {
        'Content-Type': "multipart/form-data; boundary=" + _0x4810cf._boundary
      }
    });
    const _0x188e49 = cheerio.load(_0x4c0f16);
    const _0x4dba12 = 'https:' + _0x188e49("div#output > p.outfile > video > source").attr('src');
    return {
      'status': true,
      'message': "Created By Zetsuboxygen",
      'result': _0x4dba12
    };
  } catch (_0x3d6a3a) {
    throw _0x3d6a3a;
  }
}
function pinterest(_0x30d562) {
  return new Promise(async (_0x541ec0, _0x4ae29d) => {
    axios.get('https://id.pinterest.com/search/pins/?autologin=true&q=' + _0x30d562, {
      'headers': {
        'cookie': "_auth=1; _b=\"AVna7S1p7l1C5I9u0+nR3YzijpvXOPc6d09SyCzO+DcwpersQH36SmGiYfymBKhZcGg=\"; _pinterest_sess=TWc9PSZHamJOZ0JobUFiSEpSN3Z4a2NsMk9wZ3gxL1NSc2k2NkFLaUw5bVY5cXR5alZHR0gxY2h2MVZDZlNQalNpUUJFRVR5L3NlYy9JZkthekp3bHo5bXFuaFZzVHJFMnkrR3lTbm56U3YvQXBBTW96VUgzVUhuK1Z4VURGKzczUi9hNHdDeTJ5Y2pBTmxhc2owZ2hkSGlDemtUSnYvVXh5dDNkaDN3TjZCTk8ycTdHRHVsOFg2b2NQWCtpOWxqeDNjNkk3cS85MkhhSklSb0hwTnZvZVFyZmJEUllwbG9UVnpCYVNTRzZxOXNJcmduOVc4aURtM3NtRFo3STlmWjJvSjlWTU5ITzg0VUg1NGhOTEZzME9SNFNhVWJRWjRJK3pGMFA4Q3UvcHBnWHdaYXZpa2FUNkx6Z3RNQjEzTFJEOHZoaHRvazc1c1UrYlRuUmdKcDg3ZEY4cjNtZlBLRTRBZjNYK0lPTXZJTzQ5dU8ybDdVS015bWJKT0tjTWYyRlBzclpiamdsNmtpeUZnRjlwVGJXUmdOMXdTUkFHRWloVjBMR0JlTE5YcmhxVHdoNzFHbDZ0YmFHZ1VLQXU1QnpkM1FqUTNMTnhYb3VKeDVGbnhNSkdkNXFSMXQybjRGL3pyZXRLR0ZTc0xHZ0JvbTJCNnAzQzE0cW1WTndIK0trY05HV1gxS09NRktadnFCSDR2YzBoWmRiUGZiWXFQNjcwWmZhaDZQRm1UbzNxc21pV1p5WDlabm1UWGQzanc1SGlrZXB1bDVDWXQvUis3elN2SVFDbm1DSVE5Z0d4YW1sa2hsSkZJb1h0MTFpck5BdDR0d0lZOW1Pa2RDVzNySWpXWmUwOUFhQmFSVUpaOFQ3WlhOQldNMkExeDIvMjZHeXdnNjdMYWdiQUhUSEFBUlhUVTdBMThRRmh1ekJMYWZ2YTJkNlg0cmFCdnU2WEpwcXlPOVZYcGNhNkZDd051S3lGZmo0eHV0ZE42NW8xRm5aRWpoQnNKNnNlSGFad1MzOHNkdWtER0xQTFN5Z3lmRERsZnZWWE5CZEJneVRlMDd2VmNPMjloK0g5eCswZUVJTS9CRkFweHc5RUh6K1JocGN6clc1JmZtL3JhRE1sc0NMTFlpMVErRGtPcllvTGdldz0=; _ir=0"
      }
    }).then(({
      data: _0x3d0987
    }) => {
      const _0x13e844 = cheerio.load(_0x3d0987);
      const _0x579851 = [];
      const _0x46c3c6 = [];
      _0x13e844("div > a").get().map(_0x53c623 => {
        const _0x14b930 = _0x13e844(_0x53c623).find("img").attr("src");
        _0x579851.push(_0x14b930);
      });
      _0x579851.forEach(_0x3548e9 => {
        if (_0x3548e9 == undefined) {
          return;
        }
        _0x46c3c6.push(_0x3548e9.replace(/236/g, '736'));
      });
      _0x46c3c6.shift();
      _0x541ec0(_0x46c3c6);
    });
  });
}
function quotesAnime() {
  return new Promise((_0x41176e, _0x561c0a) => {
    const _0x20aaa9 = Math.floor(Math.random() * 0xb8);
    axios.get("https://otakotaku.com/quote/feed/" + _0x20aaa9).then(({
      data: _0x269589
    }) => {
      const _0x56b1c6 = cheerio.load(_0x269589);
      const _0x3167e9 = [];
      _0x56b1c6("div.kotodama-list").each(function (_0xf48207, _0x28d8ac) {
        _0x3167e9.push({
          'link': _0x56b1c6(_0x28d8ac).find('a').attr("href"),
          'gambar': _0x56b1c6(_0x28d8ac).find("img").attr("data-src"),
          'karakter': _0x56b1c6(_0x28d8ac).find('div.char-name').text().trim(),
          'anime': _0x56b1c6(_0x28d8ac).find("div.anime-title").text().trim(),
          'episode': _0x56b1c6(_0x28d8ac).find("div.meta").text(),
          'up_at': _0x56b1c6(_0x28d8ac).find('small.meta').text(),
          'quotes': _0x56b1c6(_0x28d8ac).find("div.quote").text().trim()
        });
      });
      _0x41176e(_0x3167e9);
    })["catch"](_0x561c0a);
  });
}
function PlayStore(_0x5a3ee4) {
  return new Promise(async (_0x137f3b, _0x439502) => {
    try {
      const {
        data: _0x43a7d7,
        status: _0x2b9a52
      } = await axios.get('https://play.google.com/store/search?q=' + _0x5a3ee4 + "&c=apps");
      const _0x810afe = [];
      const _0x5348f0 = cheerio.load(_0x43a7d7);
      _0x5348f0(".ULeU3b > .VfPpkd-WsjYwc.VfPpkd-WsjYwc-OWXEXe-INsAgc.KC1dQ.Usd1Ac.AaN0Dd.Y8RQXd > .VfPpkd-aGsRMb > .VfPpkd-EScbFb-JIbuQc.TAQqTe > a").each((_0x38bee6, _0x21bc4c) => {
        const _0x1db8d8 = _0x5348f0(_0x21bc4c).attr('href');
        const _0x21a0ca = _0x5348f0(_0x21bc4c).find(".j2FCNc > .cXFu1 > .ubGTjb > .DdYX5").text();
        const _0x1ea2eb = _0x5348f0(_0x21bc4c).find(".j2FCNc > .cXFu1 > .ubGTjb > .wMUdtb").text();
        const _0xf9501b = _0x5348f0(_0x21bc4c).find(".j2FCNc > img").attr('src');
        const _0x103226 = _0x5348f0(_0x21bc4c).find(".j2FCNc > .cXFu1 > .ubGTjb > div").attr("aria-label");
        const _0xdd3665 = _0x5348f0(_0x21bc4c).find(".j2FCNc > .cXFu1 > .ubGTjb > div > span.w2kbF").text();
        const _0x584fe3 = "https://play.google.com" + _0x1db8d8;
        _0x810afe.push({
          'link': _0x584fe3,
          'nama': _0x21a0ca ? _0x21a0ca : "No name",
          'developer': _0x1ea2eb ? _0x1ea2eb : "No Developer",
          'img': _0xf9501b ? _0xf9501b : "https://i.ibb.co/G7CrCwN/404.png",
          'rate': _0x103226 ? _0x103226 : "No Rate",
          'rate2': _0xdd3665 ? _0xdd3665 : "No Rate",
          'link_dev': "https://play.google.com/store/apps/developer?id=" + _0x1ea2eb.split(" ").join('+')
        });
      });
      if (_0x810afe.every(_0x101ebd => _0x101ebd === undefined)) {
        return _0x137f3b({
          'message': "Tidak ada result!"
        });
      }
      _0x137f3b(_0x810afe);
    } catch (_0x489200) {
      console.error(_0x489200);
    }
  });
}
function BukaLapak(_0x34e8ae) {
  return new Promise(async (_0x25afa7, _0x25807a) => {
    try {
      const {
        data: _0x2f7515
      } = await axios.get("https://www.bukalapak.com/products?from=omnisearch&from_keyword_history=false&search[keywords]=" + _0x34e8ae + '&search_source=omnisearch_keyword&source=navbar', {
        'headers': {
          'user-agent': "Mozilla/ 5.0(Windows NT 10.0; Win64; x64; rv: 108.0) Gecko / 20100101 Firefox / 108.0"
        }
      });
      const _0x45f783 = cheerio.load(_0x2f7515);
      const _0x5a6726 = [];
      _0x45f783('div.bl-flex-item.mb-8').each((_0xdd1538, _0x384be7) => {
        const _0x571a8f = _0x45f783(_0x384be7).find("observer-tracker > div > div");
        const _0x3eab83 = _0x45f783(_0x571a8f).find("div > a > img").attr("src");
        if (typeof _0x3eab83 === "undefined") {
          return;
        }
        const _0x9bfea4 = _0x45f783(_0x571a8f).find(".bl-thumbnail--slider > div > a").attr('href');
        const _0x191820 = _0x45f783(_0x571a8f).find(".bl-product-card__description-name > p > a").text().trim();
        const _0x5c4630 = _0x45f783(_0x571a8f).find("div.bl-product-card__description-price > p").text().trim();
        const _0x3d16d5 = _0x45f783(_0x571a8f).find("div.bl-product-card__description-rating > p").text().trim();
        const _0x51b1bc = _0x45f783(_0x571a8f).find("div.bl-product-card__description-rating-and-sold > p").text().trim();
        const _0x7b7782 = _0x45f783(_0x571a8f).find("div.bl-product-card__description-store > span:nth-child(1)").text().trim();
        const _0x77be1b = _0x45f783(_0x571a8f).find("div.bl-product-card__description-store > span > a").text().trim();
        const _0x2cb75d = _0x45f783(_0x571a8f).find("div.bl-product-card__description-store > span > a").attr("href");
        const _0x1f6712 = {
          'title': _0x191820,
          'rating': _0x3d16d5 ? _0x3d16d5 : "No rating yet",
          'terjual': _0x51b1bc ? _0x51b1bc : "Not yet bought",
          'harga': _0x5c4630,
          'image': _0x3eab83,
          'link': _0x9bfea4,
          'store': {
            'lokasi': _0x7b7782,
            'nama': _0x77be1b,
            'link': _0x2cb75d
          }
        };
        _0x5a6726.push(_0x1f6712);
      });
      if (_0x5a6726.every(_0x258ff1 => _0x258ff1 === undefined)) {
        return _0x25afa7({
          'message': "Tidak ada result!"
        });
      }
      _0x25afa7(_0x5a6726);
    } catch (_0x39255e) {
      console.error(_0x39255e);
    }
  });
}
const clean = _0x3b149f => (_0x3b149f = _0x3b149f.replace(/(<br?\s?\/>)/gi, " \n")).replace(/(<([^>] )>)/gi, '');
async function shortener(_0x1bb99a) {
  return _0x1bb99a;
}
async function tiktok(_0x8bccd4) {
  return new Promise(async (_0x3827f0, _0x475559) => {
    try {
      let _0x15d052 = await axios("https://lovetik.com/api/ajax/search", {
        'method': 'post',
        'data': new URLSearchParams(Object.entries({
          'query': _0x8bccd4
        }))
      });
      const _0x1bb330 = {
        "title": clean(_0x15d052.data.desc),
        author: clean(_0x15d052.data.author),
        "nowm": await _0x1bb99a,
        watermark: await _0x1bb99a,
        "audio": await _0x1bb99a,
        "thumbnail": await _0x1bb99a
      };
      _0x3827f0(_0x1bb330);
    } catch (_0x3eefa1) {
      _0x475559(_0x3eefa1);
    }
  });
}
const ssweb = (_0x4f7c70, _0x4568d0 = "desktop") => {
  return new Promise((_0xb5f171, _0x161977) => {
    const _0x373cd9 = {
      'url': _0x4f7c70,
      'device': _0x4568d0,
      'cacheLimit': 0x0
    };
    axios({
      'url': "https://www.screenshotmachine.com/capture.php",
      'method': "POST",
      'data': new URLSearchParams(Object.entries(_0x373cd9)),
      'headers': {
        'content-type': "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(_0x188778 => {
      const _0x11bb61 = _0x188778.headers["set-cookie"];
      if (_0x188778.data.status == "success") {
        axios.get("https://www.screenshotmachine.com/" + _0x188778.data.link, {
          'headers': {
            'cookie': _0x11bb61.join('')
          },
          'responseType': "arraybuffer"
        }).then(({
          data: _0x1cf978
        }) => {
          result = {
            'status': 0xc8,
            'result': _0x1cf978
          };
          _0xb5f171(result);
        });
      } else {
        _0x161977({
          'status': 0x194,
          'statuses': "Link Error",
          'message': _0x188778.data
        });
      }
    })['catch'](_0x161977);
  });
};
async function stickersearch(_0x8d041a) {
  return new Promise(_0xcb4108 => {
    axios.get("https://getstickerpack.com/stickers?query=" + _0x8d041a).then(({
      data: _0x482399
    }) => {
      const _0x55dc41 = cheerio.load(_0x482399);
      const _0x264d85 = [];
      _0x55dc41("#stickerPacks > div > div:nth-child(3) > div > a").each(function (_0x5779e1, _0x514040) {
        _0x264d85.push(_0x55dc41(_0x514040).attr('href'));
      });
      let _0x1af1d4 = _0x264d85[Math.floor(Math.random() * _0x264d85.length)];
      axios.get(_0x1af1d4).then(({
        data: _0x31bd78
      }) => {
        const _0x4962c7 = cheerio.load(_0x31bd78);
        const _0x307ec8 = [];
        _0x4962c7("#stickerPack > div > div.row > div > img").each(function (_0x55d58d, _0x3f03b8) {
          _0x307ec8.push(_0x4962c7(_0x3f03b8).attr("src").split('&d=')[0x0]);
        });
        _0xcb4108({
          'title': _0x4962c7("#intro > div > div > h1").text(),
          'author': _0x4962c7("#intro > div > div > h5 > a").text(),
          'author_link': _0x4962c7("#intro > div > div > h5 > a").attr("href"),
          'sticker': _0x307ec8
        });
      });
    });
  });
}
function lirik(_0x5ac2b3) {
  return new Promise(async (_0x2e119d, _0x1c15a9) => {
    axios.get("https://www.musixmatch.com/search/" + _0x5ac2b3).then(async ({
      data: _0x26d404
    }) => {
      const _0x407a60 = cheerio.load(_0x26d404);
      const _0x12bf7c = {};
      const _0x496f37 = "https://www.musixmatch.com" + _0x407a60("div.media-card-body > div > h2").find('a').attr('href');
      await axios.get(_0x496f37).then(({
        data: _0x506940
      }) => {
        const _0x5150ff = cheerio.load(_0x506940);
        _0x12bf7c.thumb = "https:" + _0x5150ff("div.col-sm-1.col-md-2.col-ml-3.col-lg-3.static-position > div > div > div").find("img").attr("src");
        _0x5150ff("div.col-sm-10.col-md-8.col-ml-6.col-lg-6 > div.mxm-lyrics").each(function (_0x42f232, _0x15fa0a) {
          _0x12bf7c.lirik = _0x5150ff(_0x15fa0a).find("span > p > span").text() + "\n" + _0x5150ff(_0x15fa0a).find("span > div > p > span").text();
        });
      });
      _0x2e119d(_0x12bf7c);
    })["catch"](_0x1c15a9);
  });
}
module.exports = {
  'remini': remini,
  'jarak': jarak,
  'ssweb': ssweb,
  'tiktok': tiktok,
  'PlayStore': PlayStore,
  'BukaLapak': BukaLapak,
  'pinterest': pinterest,
  'stickersearch': stickersearch,
  'lirik': lirik,
  'webp2mp4File': webp2mp4File
};