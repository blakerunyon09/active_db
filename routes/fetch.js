const router = require('express').Router()
const axios = require('axios').default;

router.get('/', (req, res) => {

  body = {
    "appToken": "Px7U0We8xt9MKovt8kzYioy2KyfGvbv9Expp4GMagwUBcPVpvoI04nKxTSnC+A8j",
    "request": {
        "applicationName": "Avid4AdventureNew",
        "userName": "blake@avid4.com",
        "password": "Gigglys5",
        "seasonIds": []
    }
  }

  axios.post( 'https://awapi.active.com/rest/camps-season-info', body )
  .then(function (response) {
    res.send(response.data);
  })
  .catch(function (error) {
    res.send({error: error.data});
  }); 
  // axios.post(req.headers.endpoint,
  //   JSON.parse(req.headers.body)
  // ,{
  //   headers: {
  //     ...req.headers.headers
  //   }
  // })
  // .then(function (response) {
  //   res.send(response.data);
  // })
  // .catch(function (error) {
  //   res.send({error: error.data});
  // }); 

})

module.exports = router