function hi() {
}
hi();
const mongoose = require("mongoose");
const {
  Schema
} = mongoose;
module.exports = class mongoDB {
  constructor(_0x345f26, _0x4a4018 = {
    'useNewUrlParser': true,
    'useUnifiedTopology': true
  }) {
    this.url = _0x345f26;
    this.data = this._data = this._schema = this._model = {};
    this.db;
    this.options = _0x4a4018;
  }
  async ["read"]() {
    this.db = await mongoose.connect(this.url, {
      ...this.options
    });
    this.connection = mongoose.connection;
    let _0x226135 = this._schema = new Schema({
      'data': {
        'type': Object,
        'required': true,
        'default': {}
      }
    });
    try {
      this._model = mongoose.model('data', _0x226135);
    } catch {
      this._model = mongoose.model("data");
    }
    this._data = await this._model.findOne({});
    if (!this._data) {
      this.data = {};
      await this.write(this.data);
      this._data = await this._model.findOne({});
    } else {
      this.data = this._data.data;
    }
    return this.data;
  }
  async ["write"](_0xde90f) {
    if (!_0xde90f) {
      return _0xde90f;
    }
    if (!this._data) {
      return new this._model({
        'data': _0xde90f
      }).save();
    }
    this._model.findById(this._data._id, (_0x40d814, _0x547317) => {
      if (!_0x40d814) {
        if (!_0x547317.data) {
          _0x547317.data = {};
        }
        _0x547317.data = _0xde90f;
        return _0x547317.save();
      }
    });
  }
};