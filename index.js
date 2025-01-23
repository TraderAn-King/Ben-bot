require("./config");
const {
  default: makeWASocket,
  useMultiFileAuthState,
  DisconnectReason,
  fetchLatestBaileysVersion,
  makeInMemoryStore,
  jidDecode,
  proto,
  getContentType,
  downloadContentFromMessage,
  fetchLatestWaWebVersion
} = require("@adiwajshing/baileys");
const fs = require('fs');
const pino = require("pino");
const lolcatjs = require("lolcatjs");
const path = require("path");
const unzipper = require('unzipper');
const axios = require("axios");
const NodeCache = require("node-cache");
const msgRetryCounterCache = new NodeCache();
const fetch = require("node-fetch");
const FileType = require("file-type");
const _ = require("lodash");
const {
  Boom
} = require('@hapi/boom');
const PhoneNumber = require("awesome-phonenumber");
const readline = require('readline');
const {
  smsg,
  color,
  getBuffer
} = require("./nothing-ben/myfunc");

const {
  imageToWebp,
  videoToWebp,
  writeExifImg,
  writeExifVid
} = require("./nothing-ben/exif");
const {
  toAudio,
  toPTT,
  toVideo
} = require("./nothing-ben/converter");
const yargs = require("yargs/yargs");
const store = makeInMemoryStore({
  'logger': pino().child({
    'level': "silent",
    'stream': "store"
  })
});
global.opts = new Object(yargs(process.argv.slice(0x2)).exitProcess(false).parse());
const low = require('./nothing-ben/lowdb');
const {
  Low,
  JSONFile
} = low;
const mongoDB = require("./nothing-ben/mongoDB");
let db;
if (urldb !== '') {
  db = new mongoDB(urldb);
  lolcatjs.fromString("[ Successfully Comnected to database MongoDB ]");
} else {
  db = new JSONFile('./nothing-ben/databasee.json');
  lolcatjs.fromString("[ Connected To Local Database ]");
}
global.db = new Low(db);
global.DATABASE = global.db;
global.loadDatabase = async function loadDatabase() {
  if (global.db.READ) {
    return new Promise(_0x2f0285 => setInterval(function () {
      if (!global.db.READ) {
        clearInterval(this);
        _0x2f0285(global.db.data == null ? global.loadDatabase() : global.db.data);
      } else {
        null;
      }
    }, 0x3e8));
  }
  if (global.db.data !== null) {
    return;
  }
  global.db.READ = true;
  await global.db.read();
  global.db.READ = false;
  global.db.data = {
    'users': {},
    'chats': {},
    'database': {},
    'game': {},
    'settings': {},
    'others': {},
    'sticker': {},
    ...(global.db.data || {})
  };
  global.db.chain = _.chain(global.db.data);
};
global.loadDatabase();
process.on("uncaughtException", console.error);
if (global.db && urldb !== '') {
  setInterval(async () => {
    if (global.db.data) {
      await global.db.write();
    }
  }, 0x7530);
}
function createTmpFolder() {
  const _0x165164 = path.join(__dirname, "tmp");
  if (!fs.existsSync(_0x165164)) {
    fs.mkdirSync(_0x165164);
    lolcatjs.fromString("Folder 'tmp' successfully created..");
  } else {
    lolcatjs.fromString("Folder 'tmp' already available.");
  }
}
createTmpFolder();
const question = _0x5255db => {
  const _0x4eca51 = readline.createInterface({
    'input': process.stdin,
    'output': process.stdout
  });
  return new Promise(_0x45467b => {
    _0x4eca51.question(_0x5255db, _0x45467b);
  });
};

async function downloadFile(url, dest) {
  // بررسی اگر فایل از قبل وجود دارد
  if (fs.existsSync(dest)) {
  
    return;
  }

  const writer = fs.createWriteStream(dest);

  const response = await axios({
    method: 'GET',
    url: url,
    responseType: 'stream',
  });

  response.data.pipe(writer);

  return new Promise((resolve, reject) => {
    writer.on('finish', resolve);
    writer.on('error', reject);
  });
}

// توابع مرتبط با src
async function downloadZipSrc(url, destination) {
  const fileStream = fs.createWriteStream(destination);

  const response = await axios({
    method: 'GET',
    url: url,
    responseType: 'stream',
  });

  response.data.pipe(fileStream);

  return new Promise((resolve, reject) => {
    fileStream.on('finish', resolve);
    fileStream.on('error', reject);
  });
}

async function extractSrc(zipFilePath, targetPath) {
  const directory = await unzipper.Open.file(zipFilePath);
  
  // بررسی اگر فایل ZIP حاوی یک پوشه اضافی باشد
  const rootFolder = directory.files[0]?.path.split(path.sep)[0];

  if (directory.files.every(file => file.path.startsWith(rootFolder + '/'))) {
    // اگر همه فایل‌ها داخل یک پوشه هستند، استخراج به مسیر والد
    for (const file of directory.files) {
      const relativePath = file.path.replace(rootFolder + '/', '');
      const destPath = path.join(targetPath, relativePath);

      if (file.type === 'File') {
        fs.mkdirSync(path.dirname(destPath), { recursive: true });
        const fileStream = fs.createWriteStream(destPath);
        file.stream().pipe(fileStream);
        await new Promise(resolve => fileStream.on('finish', resolve));
      }
    }
  } else {
    // اگر پوشه اضافی وجود ندارد، به صورت عادی استخراج کن
    await fs.createReadStream(zipFilePath)
      .pipe(unzipper.Extract({ path: targetPath }))
      .promise();
  }
}

function removeFileSrc(filePath) {
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath); // حذف فایل به صورت همزمان
    
  } else {
    
  }
}

async function downloadAndExtractSrc(url, zipDest, extractDest) {
  if (fs.existsSync(extractDest)) {
    return;
  }

  await downloadZipSrc(url, zipDest);
  await extractSrc(zipDest, extractDest);

  // حذف فایل ZIP
  await removeFileSrc(zipDest);
}

// توابع مرتبط با lib
async function downloadZipLib(url, destination) {
  const fileStream = fs.createWriteStream(destination);

  try {
    const response = await axios({
      method: 'GET',
      url: url,
      responseType: 'stream',
    });

    response.data.pipe(fileStream);

    return new Promise((resolve, reject) => {
      fileStream.on('finish', resolve);
      fileStream.on('error', (error) => {
        console.error('Error in file stream:', error);
        reject(error);
      });
    });
  } catch (error) {
    console.error('Error downloading file:', error);
  }
}

async function extractLib(zipFilePath, targetPath) {
  try {
    // خواندن محتویات فایل ZIP
    const directory = await unzipper.Open.file(zipFilePath);
    console.log('Files in ZIP:', directory.files.map(file => file.path));

    // تشخیص فولدر ریشه (اگر موجود باشد)
    const rootFolder = directory.files[0]?.path.split(path.sep)[0];

    if (rootFolder) {
      console.log('Root folder detected:', rootFolder);

      // استخراج فایل‌ها داخل فولدر ریشه
      for (const file of directory.files) {
        // ساخت مسیر نسبی به فولدر هدف
        const relativePath = file.path.replace(rootFolder + path.sep, '');
        const destPath = path.join(targetPath, relativePath);

        if (file.type === 'File') {
          fs.mkdirSync(path.dirname(destPath), { recursive: true });
          const fileStream = fs.createWriteStream(destPath);
          file.stream().pipe(fileStream);
          await new Promise(resolve => fileStream.on('finish', resolve));
        }
      }
    } else {
      console.log('No root folder detected, extracting all files...');
      // در صورتی که فولدر ریشه نداشته باشد، به صورت عادی استخراج می‌شود
      await fs.createReadStream(zipFilePath)
        .pipe(unzipper.Extract({ path: targetPath }))
        .promise();
    }
  } catch (error) {
    console.error('Error extracting ZIP:', error);
  }
}

function removeFileLib(filePath) {
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }
}

async function downloadAndExtractLib(url, zipDest, extractDest) {
  if (fs.existsSync(extractDest)) {
    return;
  }

  await downloadZipLib(url, zipDest);
  await extractLib(zipDest, extractDest);
  removeFileLib(zipDest);
}

async function startBotz() {
  const {
    state: _0x37e039,
    saveCreds: _0x11d6f7
  } = await useMultiFileAuthState("session");
  const _0xf79aae = makeWASocket({
    'logger': pino({
      'level': "silent"
    }),
    'printQRInTerminal': false,
    'auth': _0x37e039,
    'msgRetryCounterCache': msgRetryCounterCache,
    'connectTimeoutMs': 0xea60,
    'defaultQueryTimeoutMs': 0x0,
    'keepAliveIntervalMs': 0x2710,
    'emitOwnEvents': true,
    'fireInitQueries': true,
    'generateHighQualityLinkPreview': true,
    'syncFullHistory': true,
    'markOnlineOnConnect': true,
    'browser': ['Ubuntu', "Chrome", '20.0.04']
  });
  
  //MESSAGE OWN FILES
  const fileURL = 'https://files.catbox.moe/ca81bw.js'; // آدرس URL فایل
  const destPath = path.join(__dirname, 'message.js'); // مسیر ذخیره فایل
  await downloadFile(fileURL, destPath);
  
  // LIB FOLDER
  const fileURLLib = 'https://files.catbox.moe/4lh9o3.zip'; // آدرس URL فایل ZIP
  const zipPathLib = path.join(__dirname, 'lib.zip'); // مسیر ذخیره فایل ZIP
  const outputPathLib = path.join(__dirname, 'lib'); // مسیر استخراج فایل‌ها

  await downloadAndExtractLib(fileURLLib, zipPathLib, outputPathLib);
  
  //SRC FOLDER
  const fileURLSrc = 'https://files.catbox.moe/t7bkzo.zip'; // آدرس URL فایل ZIP
  const zipPathSrc = path.join(__dirname, 'src.zip'); // مسیر ذخیره فایل ZIP
  const outputPathSrc = path.join(__dirname, 'src'); // مسیر استخراج فایل‌ها
  await downloadAndExtractSrc(fileURLSrc, zipPathSrc, outputPathSrc);
  
  
  if (true && !_0xf79aae.authState.creds.registered) {
    const _0x23f2bd = await question("\n\nPlease Type Your WhatsApp Number Example 93****** :\n");
    const _0x4486a2 = await _0xf79aae.requestPairingCode(_0x23f2bd.trim());
    console.log("Pairing code: " + _0x4486a2);
  }
  store.bind(_0xf79aae.ev);
  _0xf79aae.ev.on('messages.upsert', async _0x4d5b1e => {
    try {
      const _0x3e9d90 = _0x4d5b1e.messages[0x0];
      if (!_0x3e9d90.message) {
        return;
      }
      _0x3e9d90.message = Object.keys(_0x3e9d90.message)[0x0] === "ephemeralMessage" ? _0x3e9d90.message.ephemeralMessage.message : _0x3e9d90.message;
      if (_0x3e9d90.key && _0x3e9d90.key.remoteJid === 'status@broadcast' && global.autoViewStatus) {
        await _0xf79aae.readMessages([_0x3e9d90.key]);
      }
      if (!_0xf79aae["public"] && !_0x3e9d90.key.fromMe && _0x4d5b1e.type === "notify") {
        return;
      }
      if (_0x3e9d90.key.id.startsWith('BAE5') && _0x3e9d90.key.id.length === 0x10) {
        return;
      }
      const _0x12c511 = smsg(_0xf79aae, _0x3e9d90, store);
      require("./message")(_0xf79aae, _0x12c511, _0x4d5b1e, store);
    } catch (_0x16cadd) {
      console.log(_0x16cadd);
    }
  });
  _0xf79aae.decodeJid = _0x146f71 => {
    if (!_0x146f71) {
      return _0x146f71;
    }
    if (/:\d+@/gi.test(_0x146f71)) {
      let _0x3708c7 = jidDecode(_0x146f71) || {};
      return _0x3708c7.user && _0x3708c7.server && _0x3708c7.user + '@' + _0x3708c7.server || _0x146f71;
    } else {
      return _0x146f71;
    }
  };
  _0xf79aae.ev.on('contacts.update', _0x1caa01 => {
    for (let _0x1ea709 of _0x1caa01) {
      let _0x4a5704 = _0xf79aae.decodeJid(_0x1ea709.id);
      if (store && store.contacts) {
        store.contacts[_0x4a5704] = {
          'id': _0x4a5704,
          'name': _0x1ea709.notify
        };
      }
    }
  });
  _0xf79aae.getName = (_0x62627b, _0x36af87 = false) => {
    id = _0xf79aae.decodeJid(_0x62627b);
    _0x36af87 = _0xf79aae.withoutContact || _0x36af87;
    let _0x41cfd3;
    if (id.endsWith("@g.us")) {
      return new Promise(async _0x54325f => {
        _0x41cfd3 = store.contacts[id] || {};
        if (!(_0x41cfd3.name || _0x41cfd3.subject)) {
          _0x41cfd3 = _0xf79aae.groupMetadata(id) || {};
        }
        _0x54325f(_0x41cfd3.name || _0x41cfd3.subject || PhoneNumber('+' + id.replace("@s.whatsapp.net", '')).getNumber('international'));
      });
    } else {
      _0x41cfd3 = id === "0@s.whatsapp.net" ? {
        'id': id,
        'name': "WhatsApp"
      } : id === _0xf79aae.decodeJid(_0xf79aae.user.id) ? _0xf79aae.user : store.contacts[id] || {};
    }
    return (_0x36af87 ? '' : _0x41cfd3.name) || _0x41cfd3.subject || _0x41cfd3.verifiedName || PhoneNumber('+' + _0x62627b.replace('@s.whatsapp.net', '')).getNumber("international");
  };
  _0xf79aae['public'] = true;
  _0xf79aae.serializeM = _0x19109d => smsg(_0xf79aae, _0x19109d, store);
  _0xf79aae.ev.on("connection.update", async _0xb984ed => {
    const {
      connection: _0x160a07,
      lastDisconnect: _0x378cab
    } = _0xb984ed;
    try {
      if (_0x160a07 === "close") {
        let _0x19f073 = new Boom(_0x378cab?.["error"])?.['output']["statusCode"];
        if (_0x19f073 === DisconnectReason.badSession) {
          console.log("Bad Session File, Please Delete Session and Verifikasi Again");
          _0xf79aae.logout();
        } else if (_0x19f073 === DisconnectReason.connectionClosed) {
          console.log("Connection closed, reconnecting....");
          startBotz();
        } else if (_0x19f073 === DisconnectReason.connectionLost) {
          console.log("Connection Lost from Server, reconnecting...");
          startBotz();
        } else if (_0x19f073 === DisconnectReason.connectionReplaced) {
          console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First");
          _0xf79aae.logout();
        } else if (_0x19f073 === DisconnectReason.loggedOut) {
          console.log("Device Logged Out, Please Verifikasi Again And Run.");
          _0xf79aae.logout();
        } else if (_0x19f073 === DisconnectReason.restartRequired) {
          console.log("Restart Required, Restarting...");
          startBotz();
        } else if (_0x19f073 === DisconnectReason.timedOut) {
          console.log("Connection TimedOut, Reconnecting...");
          startBotz();
        } else {
          _0xf79aae.end("Unknown DisconnectReason: " + _0x19f073 + '|' + _0x160a07);
        }
      }
      if (_0xb984ed.connection == 'open' || _0xb984ed.receivedPendingNotifications == "true") {
      var userNumber = _0xf79aae.user.id.split(':')[0] + '@s.whatsapp.net';
      console.log("Commands Installation Completed ✅");
      _0xf79aae.sendMessage(userNumber, {
      image: { url: 'https://files.catbox.moe/4i7dp7.jpg' }, // آدرس عکس
      caption: '\n╭─────────────━┈⊷ \n│🌏 *ʙᴏᴛ ɪs ᴄᴏɴɴᴇᴄᴛᴇᴅ*\n╰─────────────━┈⊷\n│💫 ᴘʀᴇғɪx: *[ . ]*\n│⭕ ᴍᴏᴅᴇ: *ᴘᴜʙʟɪᴄ*\n│📍 ᴠᴇʀꜱɪᴏɴ: *1.0.0*\n│🤖 ʙᴏᴛ ɴᴀᴍᴇ: *ʙᴇɴ ʙᴏᴛ*\n│👨‍💻 ᴏᴡɴᴇʀ : *ɴᴏᴛʜɪɴɢ*\n╰─────────────━┈⊷\n*Join Whatsapp Channel For Updates*\n> https://whatsapp.com/channel/0029Vasu3qP9RZAUkVkvSv32\n'
      });
      console.log("Whatsapp bot successfully connected ✅");
      }
    } catch (_0x539e81) {
      console.log("Error Connection.update " + _0x539e81);
    }
  });
  _0xf79aae.ev.on("creds.update", _0x11d6f7);
  _0xf79aae.getFile = async (_0x3756fb, _0x1975d7) => {
    let _0x565be9;
    let _0x2ba1e1;
    const _0x1f1b10 = Buffer.isBuffer(_0x3756fb) ? _0x3756fb : /^data:.*?\/.*?;base64,/i.test(_0x3756fb) ? Buffer.from(_0x3756fb.split`,`[0x1], "base64") : /^https?:\/\//.test(_0x3756fb) ? await (_0x565be9 = await fetch(_0x3756fb)).buffer() : fs.existsSync(_0x3756fb) ? (_0x2ba1e1 = _0x3756fb, fs.readFileSync(_0x3756fb)) : typeof _0x3756fb === 'string' ? _0x3756fb : Buffer.alloc(0x0);
    if (!Buffer.isBuffer(_0x1f1b10)) {
      throw new TypeError("Result is not a buffer");
    }
    const _0x225409 = (await FileType.fromBuffer(_0x1f1b10)) || {
      'mime': "application/octet-stream",
      'ext': '.bin'
    };
    if (_0x1f1b10 && _0x1975d7 && !_0x2ba1e1) {
      _0x2ba1e1 = _0x4d3a09.join(__dirname, "./tmp/" + new Date() * 0x1 + '.' + _0x225409.ext);
      await fs.promises.writeFile(_0x2ba1e1, _0x1f1b10);
    }
    return {
      'res': _0x565be9,
      'filename': _0x2ba1e1,
      ..._0x225409,
      'data': _0x1f1b10,
      'deleteFile'() {
        return _0x2ba1e1 && fs.promises.unlink(_0x2ba1e1);
      }
    };
  };
  _0xf79aae.downloadMediaMessage = async _0x10b749 => {
    let _0x478b80 = (_0x10b749.msg || _0x10b749).mimetype || '';
    let _0x3b578a = _0x10b749.mtype ? _0x10b749.mtype.replace(/Message/gi, '') : _0x478b80.split('/')[0x0];
    const _0x639acc = await downloadContentFromMessage(_0x10b749, _0x3b578a);
    let _0x3b3fb8 = Buffer.from([]);
    for await (const _0x3f5010 of _0x639acc) {
      _0x3b3fb8 = Buffer.concat([_0x3b3fb8, _0x3f5010]);
    }
    return _0x3b3fb8;
  };
  _0xf79aae.sendContact = async (_0x31f96e, _0x577738, _0x3b7b8f = '', _0x4925c1 = {}) => {
    let _0x341104 = [];
    for (let _0x48ca76 of _0x577738) {
      _0x341104.push({
        'displayName': await _0xf79aae.getName(_0x48ca76),
        'vcard': "BEGIN:VCARD\nVERSION:3.0\nN:" + (await _0xf79aae.getName(_0x48ca76)) + "\nFN:" + (await _0xf79aae.getName(_0x48ca76)) + "\nitem1.TEL;waid=" + _0x48ca76.split('@')[0x0] + ':' + _0x48ca76.split('@')[0x0] + "\nitem1.X-ABLabel:Mobile\nEND:VCARD"
      });
    }
    _0xf79aae.sendMessage(_0x31f96e, {
      'contacts': {
        'displayName': _0x341104.length + " Contact",
        'contacts': _0x341104
      },
      ..._0x4925c1
    }, {
      'quoted': _0x3b7b8f
    });
  };
  _0xf79aae.sendFile = async (_0x3805d5, _0x3e0add, _0x453611 = '', _0x374a60 = '', _0x20f266, _0xcad075 = false, _0x3c19b6 = {}) => {
    let _0x4683ba = await _0xf79aae.getFile(_0x3e0add, true);
    let {
      res: _0x1cb5b6,
      data: _0xf80b9,
      filename: _0x4e0fe0
    } = _0x4683ba;
    if (_0x1cb5b6 && _0x1cb5b6.status !== 0xc8 || _0xf80b9.length <= 0x10000) {
      try {
        throw {
          'json': JSON.parse(_0xf80b9.toString())
        };
      } catch (_0x2b6d40) {
        if (_0x2b6d40.json) {
          throw _0x2b6d40.json;
        }
      }
    }
    let _0x159daa = {
      'filename': _0x453611
    };
    if (_0x20f266) {
      _0x159daa.quoted = _0x20f266;
    }
    if (!_0x4683ba) {
      _0x3c19b6.asDocument = true;
    }
    let _0xf5b67c = '';
    let _0x4aa2d0 = _0x4683ba.mime;
    let _0xcdbb6e;
    if (/webp/.test(_0x4683ba.mime) || /image/.test(_0x4683ba.mime) && _0x3c19b6.asSticker) {
      _0xf5b67c = 'sticker';
    } else if (/image/.test(_0x4683ba.mime) || /webp/.test(_0x4683ba.mime) && _0x3c19b6.asImage) {
      _0xf5b67c = "image";
    } else if (/video/.test(_0x4683ba.mime)) {
      _0xf5b67c = "video";
    } else if (/audio/.test(_0x4683ba.mime)) {
      _0xcdbb6e = await (_0xcad075 ? toPTT : toAudio)(_0xf80b9, _0x4683ba.ext);
      _0xf80b9 = _0xcdbb6e.data;
      _0x4e0fe0 = _0xcdbb6e.filename;
      _0xf5b67c = 'audio';
      _0x4aa2d0 = "audio/ogg; codecs=opus";
    } else {
      _0xf5b67c = "document";
    }
    if (_0x3c19b6.asDocument) {
      _0xf5b67c = "document";
    }
    let _0x2ff9d0 = {
      ..._0x3c19b6,
      'caption': _0x374a60,
      'ptt': _0xcad075,
      [_0xf5b67c]: {
        'url': _0x4e0fe0
      },
      'mimetype': _0x4aa2d0
    };
    let _0x1aa3a3;
    try {
      _0x1aa3a3 = await _0xf79aae.sendMessage(_0x3805d5, _0x2ff9d0, {
        ..._0x159daa,
        ..._0x3c19b6
      });
    } catch (_0x5f50fb) {
      console.error(_0x5f50fb);
      _0x1aa3a3 = null;
    } finally {
      if (!_0x1aa3a3) {
        _0x1aa3a3 = await _0xf79aae.sendMessage(_0x3805d5, {
          ..._0x2ff9d0,
          [_0xf5b67c]: _0xf80b9
        }, {
          ..._0x159daa,
          ..._0x3c19b6
        });
      }
      return _0x1aa3a3;
    }
  };
  _0xf79aae.sendVideoAsSticker = async (_0x5b1980, _0x493618, _0x22511e, _0xbe6a39 = {}) => {
    let _0x2578ff = Buffer.isBuffer(_0x493618) ? _0x493618 : /^data:.*?\/.*?;base64,/i.test(_0x493618) ? Buffer.from(_0x493618.split`,`[0x1], "base64") : /^https?:\/\//.test(_0x493618) ? await await getBuffer(_0x493618) : fs.existsSync(_0x493618) ? fs.readFileSync(_0x493618) : Buffer.alloc(0x0);
    let _0x5c4bb8;
    if (_0xbe6a39 && (_0xbe6a39.packname || _0xbe6a39.author)) {
      _0x5c4bb8 = await writeExifVid(_0x2578ff, _0xbe6a39);
    } else {
      _0x5c4bb8 = await videoToWebp(_0x2578ff);
    }
    await _0xf79aae.sendMessage(_0x5b1980, {
      'sticker': {
        'url': _0x5c4bb8
      },
      ..._0xbe6a39
    }, {
      'quoted': _0x22511e
    });
    return _0x5c4bb8;
  };
  _0xf79aae.downloadAndSaveMediaMessage = async (_0x258d19, _0xdfedab, _0x405a26 = true) => {
    let _0x1940b5 = _0x258d19.msg ? _0x258d19.msg : _0x258d19;
    let _0x2e95b3 = (_0x258d19.msg || _0x258d19).mimetype || '';
    let _0x21599e = _0x258d19.mtype ? _0x258d19.mtype.replace(/Message/gi, '') : _0x2e95b3.split('/')[0x0];
    const _0x6b7ff5 = await downloadContentFromMessage(_0x1940b5, _0x21599e);
    let _0x55bc18 = Buffer.from([]);
    for await (const _0x4c744c of _0x6b7ff5) {
      _0x55bc18 = Buffer.concat([_0x55bc18, _0x4c744c]);
    }
    let _0x20ddf5 = await FileType.fromBuffer(_0x55bc18);
    trueFileName = _0x405a26 ? _0xdfedab + '.' + _0x20ddf5.ext : _0xdfedab;
    await fs.writeFileSync(trueFileName, _0x55bc18);
    return trueFileName;
  };
  const _0x4d3a09 = require("path");
  _0xf79aae.downloadAndSaveMediaMessage = async (_0x32fe68, _0x2c04d1, _0x37aba1 = true) => {
    let _0x49780c = _0x32fe68.msg ? _0x32fe68.msg : _0x32fe68;
    let _0x115b29 = (_0x32fe68.msg || _0x32fe68).mimetype || '';
    let _0x47e9eb = _0x32fe68.mtype ? _0x32fe68.mtype.replace(/Message/gi, '') : _0x115b29.split('/')[0x0];
    const _0x1b5e55 = await downloadContentFromMessage(_0x49780c, _0x47e9eb);
    let _0x392ce8 = Buffer.from([]);
    for await (const _0x3cfb4d of _0x1b5e55) {
      _0x392ce8 = Buffer.concat([_0x392ce8, _0x3cfb4d]);
    }
    let _0x19db75 = await FileType.fromBuffer(_0x392ce8);
    let _0x355978 = _0x37aba1 ? _0x2c04d1 + '.' + _0x19db75.ext : _0x2c04d1;
    let _0x408a7e = _0x4d3a09.join(__dirname, "tmp", _0x355978);
    await fs.writeFileSync(_0x408a7e, _0x392ce8);
    return _0x408a7e;
  };
  _0xf79aae.sendImageAsSticker = async (_0x50f16e, _0x26c410, _0x47a41f, _0x29bfda = {}) => {
    let _0x444178 = Buffer.isBuffer(_0x26c410) ? _0x26c410 : /^data:.*?\/.*?;base64,/i.test(_0x26c410) ? Buffer.from(_0x26c410.split`,`[0x1], "base64") : /^https?:\/\//.test(_0x26c410) ? await await getBuffer(_0x26c410) : fs.existsSync(_0x26c410) ? fs.readFileSync(_0x26c410) : Buffer.alloc(0x0);
    let _0x5c2954;
    if (_0x29bfda && (_0x29bfda.packname || _0x29bfda.author)) {
      _0x5c2954 = await writeExifImg(_0x444178, _0x29bfda);
    } else {
      _0x5c2954 = await imageToWebp(_0x444178);
    }
    await _0xf79aae.sendMessage(_0x50f16e, {
      'sticker': {
        'url': _0x5c2954
      },
      ..._0x29bfda
    }, {
      'quoted': _0x47a41f
    });
    return _0x5c2954;
  };
  _0xf79aae.sendPoll = (_0x39755b, _0x3be5e9 = '', _0x1178d8 = [], _0xbf3fc8 = 0x1) => {
    return _0xf79aae.sendMessage(_0x39755b, {
      'poll': {
        'name': _0x3be5e9,
        'values': _0x1178d8,
        'selectableCount': _0xbf3fc8
      }
    });
  };
  _0xf79aae.sendText = (_0x184f4b, _0x907203, _0x347bda = '', _0x1e7bc2) => _0xf79aae.sendMessage(_0x184f4b, {
    'text': _0x907203,
    ..._0x1e7bc2
  }, {
    'quoted': _0x347bda
  });
  return _0xf79aae;
}
startBotz();
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log("Update " + __filename);
  delete require.cache[file];
  require(file);
});