function hi() {
}
hi();
const fs = require('fs');
exports.isLimit = function (_0x243744, _0x24e9fa, _0x4da4d2, _0x28c8dd, _0x1f5239) {
  if (_0x4da4d2) {
    return false;
  }
  if (_0x24e9fa) {
    return false;
  }
  let _0x2a89f1 = false;
  for (let _0x351fdf of _0x1f5239) {
    if (_0x351fdf.id === _0x243744) {
      let _0x53e474 = _0x351fdf.limit;
      return _0x53e474 >= _0x28c8dd ? (_0x2a89f1 = true, true) : (_0x2a89f1 = true, false);
    }
  }
  if (_0x2a89f1 === false) {
    const _0x3fa9a9 = {
      'id': _0x243744,
      'limit': 0x0
    };
    _0x1f5239.push(_0x3fa9a9);
    fs.writeFileSync("./user/limit.json", JSON.stringify(_0x1f5239, null, 0x2));
    return false;
  }
};
exports.limitAdd = function (_0x217633, _0x52b11a) {
  let _0x3786fe = false;
  Object.keys(_0x52b11a).forEach(_0x38ff22 => {
    if (_0x52b11a[_0x38ff22].id === _0x217633) {
      _0x3786fe = _0x38ff22;
    }
  });
  if (_0x3786fe !== false) {
    _0x52b11a[_0x3786fe].limit += 0x1;
    fs.writeFileSync("./user/limit.json", JSON.stringify(_0x52b11a, null, 0x2));
  }
};
exports.getLimit = function (_0xcbf9d2, _0x2c7eeb, _0x5285de) {
  if (_0x5285de && typeof _0x5285de === 'object' && Object.keys(_0x5285de).length > 0x0) {
    let _0x2ad8fc = false;
    Object.keys(_0x5285de).forEach(_0x847a61 => {
      if (_0x5285de[_0x847a61].id === _0xcbf9d2) {
        _0x2ad8fc = _0x847a61;
      }
    });
    return _0x2ad8fc !== false ? _0x2c7eeb - _0x5285de[_0x2ad8fc].limit : _0x2c7eeb;
  } else {
    return _0x2c7eeb;
  }
};
exports.giveLimit = function (_0x1fb3b3, _0x2dab6a, _0x2b7cf7) {
  let _0xa9208c = false;
  Object.keys(_0x2b7cf7).forEach(_0x55c2df => {
    if (_0x2b7cf7[_0x55c2df].id === _0x1fb3b3) {
      _0xa9208c = _0x55c2df;
    }
  });
  if (_0xa9208c !== false) {
    _0x2b7cf7[_0xa9208c].limit -= _0x2dab6a;
    fs.writeFileSync("./user/limit.json", JSON.stringify(_0x2b7cf7, null, 0x2));
  } else {
    const _0x5e9b42 = _0x2dab6a - _0x2dab6a - _0x2dab6a;
    const _0x1fec4d = {
      'id': _0x1fb3b3,
      'limit': _0x5e9b42
    };
    _0x2b7cf7.push(_0x1fec4d);
    fs.writeFileSync("./user/limit.json", JSON.stringify(_0x2b7cf7, null, 0x2));
  }
};
exports.addBalance = function (_0x780491, _0x6bb507, _0x1a1fb5) {
  let _0x124be9 = false;
  Object.keys(_0x1a1fb5).forEach(_0x385610 => {
    if (_0x1a1fb5[_0x385610].id === _0x780491) {
      _0x124be9 = _0x385610;
    }
  });
  if (_0x124be9 !== false) {
    _0x1a1fb5[_0x124be9].balance += _0x6bb507;
    fs.writeFileSync("./user/balance.json", JSON.stringify(_0x1a1fb5, null, 0x2));
  } else {
    const _0x3631cd = {
      'id': _0x780491,
      'balance': _0x6bb507
    };
    _0x1a1fb5.push(_0x3631cd);
    fs.writeFileSync("./user/balance.json", JSON.stringify(_0x1a1fb5, null, 0x2));
  }
};
exports.kurangBalance = function (_0x519ad7, _0x192345, _0x4b1288) {
  let _0xa62c03 = false;
  Object.keys(_0x4b1288).forEach(_0x3baaa0 => {
    if (_0x4b1288[_0x3baaa0].id === _0x519ad7) {
      _0xa62c03 = _0x3baaa0;
    }
  });
  if (_0xa62c03 !== false) {
    _0x4b1288[_0xa62c03].balance -= _0x192345;
    fs.writeFileSync("./user/balance.json", JSON.stringify(_0x4b1288, null, 0x2));
  }
};
exports.getBalance = function (_0x2ecd4a, _0x5f410e) {
  let _0x24f37b = false;
  Object.keys(_0x5f410e).forEach(_0x1afe1e => {
    if (_0x5f410e[_0x1afe1e].id === _0x2ecd4a) {
      _0x24f37b = _0x1afe1e;
    }
  });
  return _0x24f37b !== false ? _0x5f410e[_0x24f37b].balance : 0x0;
};
exports.isGame = function (_0x1a50b4, _0x4776db, _0x282480, _0x168b9c) {
  if (_0x4776db) {
    return false;
  }
  let _0x16ffc1 = false;
  for (let _0x35f6f3 of _0x168b9c) {
    if (_0x35f6f3.id === _0x1a50b4) {
      let _0xaf1995 = _0x35f6f3.glimit;
      return _0xaf1995 >= _0x282480 ? (_0x16ffc1 = true, true) : (_0x16ffc1 = true, false);
    }
  }
  if (_0x16ffc1 === false) {
    let _0x30b59a = {
      'id': _0x1a50b4,
      'glimit': 0x0
    };
    _0x168b9c.push(_0x30b59a);
    fs.writeFileSync("./user/glimit.json", JSON.stringify(_0x168b9c, null, 0x2));
    return false;
  }
};
exports.gameAdd = function (_0x259264, _0x27c58f) {
  var _0x175d08 = false;
  Object.keys(_0x27c58f).forEach(_0x39db4c => {
    if (_0x27c58f[_0x39db4c].id == _0x259264) {
      _0x175d08 = _0x39db4c;
    }
  });
  if (_0x175d08 !== false) {
    _0x27c58f[_0x175d08].glimit += 0x1;
    fs.writeFileSync("./user/glimit.json", JSON.stringify(_0x27c58f, null, 0x2));
  }
};
exports.givegame = function (_0x17c09c, _0x34224a, _0x2b0749) {
  let _0x39f1ac = false;
  Object.keys(_0x2b0749).forEach(_0xee00a0 => {
    if (_0x2b0749[_0xee00a0].id === _0x17c09c) {
      _0x39f1ac = _0xee00a0;
    }
  });
  if (_0x39f1ac !== false) {
    _0x2b0749[_0x39f1ac].glimit -= _0x34224a;
    fs.writeFileSync("./user/glimit.json", JSON.stringify(_0x2b0749, null, 0x2));
  } else {
    const _0x54000c = _0x34224a - _0x34224a - _0x34224a;
    const _0x408502 = {
      'id': _0x17c09c,
      'glimit': _0x54000c
    };
    _0x2b0749.push(_0x408502);
    fs.writeFileSync('./user/glimit.json', JSON.stringify(_0x2b0749, null, 0x2));
  }
};
exports.cekGLimit = function (_0x38d6b1, _0x562542, _0xda8d9b) {
  let _0x1a8b66 = false;
  Object.keys(_0xda8d9b).forEach(_0x4cd6cc => {
    if (_0xda8d9b[_0x4cd6cc].id === _0x38d6b1) {
      _0x1a8b66 = _0x4cd6cc;
    }
  });
  return _0x1a8b66 !== false ? _0x562542 - _0xda8d9b[_0x1a8b66].glimit : _0x562542;
};
exports.createHit = function (_0x553cb8, _0x4f1cb1) {
  const _0x54f708 = {
    'id': _0x553cb8,
    'hit': 0x0
  };
  _0x4f1cb1.push(_0x54f708);
  fs.writeFileSync("./user/userhit.json", JSON.stringify(_0x4f1cb1, null, 0x2));
  '';
};
exports.AddHit = function (_0x2dd8d2, _0x50ac08) {
  var _0x31f2ac = false;
  Object.keys(_0x50ac08).forEach(_0x29d6e2 => {
    if (_0x50ac08[_0x29d6e2].id == _0x2dd8d2) {
      _0x31f2ac = _0x29d6e2;
    }
  });
  if (_0x31f2ac !== false) {
    _0x50ac08[_0x31f2ac].hit += 0x1;
    fs.writeFileSync("./user/userhit.json", JSON.stringify(_0x50ac08, null, 0x2));
  }
};
exports.gethitUser = function (_0x32c65e, _0x56301b) {
  let _0x405cd1 = false;
  Object.keys(_0x56301b).forEach(_0x2a1799 => {
    if (_0x56301b[_0x2a1799].id === _0x32c65e) {
      _0x405cd1 = _0x2a1799;
    }
  });
  if (_0x405cd1 !== false) {
    return _0x56301b[_0x405cd1].hit;
  }
};