const body = {
  "appToken": process.env.ACTIVE_APPTOKEN,
  "request": {
      "applicationName": process.env.ACTIVE_APPNAME,
      "userName": process.env.ACTIVE_USERNAME,
      "password": process.env.ACTIVE_PASSWORD,
      "seasonIds": []
  }
}

exports.body = body