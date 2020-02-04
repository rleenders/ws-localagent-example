/* eslint-disable import/no-extraneous-dependencies*/
const express = require('express');
const app = express();
const port = 3000;
const Handler = require('ws-localagent.server');

const responseCallbacks = {};
const server = app.listen(port, () => {
  console.log(`server is running on PORT: ${port}`);
});

handler = new Handler(server);


app.get('/:id/hello',
  handler.buildWSRequestMiddleware('SERVER_HELLO_WORLD'),
  handler.sendWSRequestMiddleware,
  (req, res, next) => {
    res.send(res.ws);
  }
);

app.post('/:id/sql',
  handler.buildWSRequestMiddleware('SERVER_RUN_SQL'),
  handler.sendWSRequestMiddleware,
  (req, res, next) => {
    return res.send(res.ws);
  }
);
