const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
  response.send({ response: "I am alive"}).status(200);
});

module.exports = router;
