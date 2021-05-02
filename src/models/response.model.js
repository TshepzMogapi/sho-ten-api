class Response {
  constructor(code, success, message, body) {
    this.code = null;
    this.success = false;
    this.message = '';
    this.body = {};
  }
}

module.exports = Response;
