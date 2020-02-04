const {agent, middleware:{logger, hello, responder}} = require('ws-localagent');
try{
  const sql = async (ctx) => {
    //mysql stuff
    return promise.resolve();
  }
  const name = 'agent';
  const app = new agent(name);
  app.use(logger);
  app.use(hello, 'SERVER_HELLO_WORLD');
  app.use(sql, 'SERVER_RUN_SQL');
  app.use(responder)

  app.connect('http://localhost:3000');
}catch(e){
  console.log(e);
  exit(0);
}
