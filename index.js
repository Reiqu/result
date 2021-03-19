function resultHandler(res, code, data) {
  res.status(code);
  res.json(data);
}

export default function result (output, res) {
  switch (output.statusCode) {
    case 500: {
      console.error(output.statusMessage);
      resultHandler(res, output.statusCode, output.data)
      break;
    }
    case 400: {
      console.warn(output.statusMessage);
      resultHandler(res, output.statusCode, output.data)
      break;
    }
    case 404: {
      console.warn(output.statusMessage);
      resultHandler(res, output.statusCode, output.data)
      break;
    }
    case 200: {
      console.log(output.statusMessage);
      resultHandler(res, output.statusCode, output.data)
      break;
    }
  }
}
