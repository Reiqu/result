let colors = require('colors');
let error = colors.red;
let warn = colors.yellow;
let info = colors.green;

function resultHandler(res, code, data) {
  res.status(code);
  res.json(data);
}

function result (output, res) {
  if (output === undefined) {
    return
  }
  if (res === undefined) {
    return;
  }
  switch (output.statusCode) {
    case 500: {
      error(output.statusMessage);
      resultHandler(res, output.statusCode, output.data)
      break;
    }
    case 400: {
      warn(output.statusMessage);
      resultHandler(res, output.statusCode, output.data)
      break;
    }
    case 404: {
      warn(output.statusMessage);
      resultHandler(res, output.statusCode, output.data)
      break;
    }
    case 200: {
      info(output.statusMessage);
      resultHandler(res, output.statusCode, output.data)
      break;
    }
  }
}

exports.result = function (output, res) {
  result(output, res);
}
