// /index.js

const server = require('server');
const { get, socket } = server.router;
const { render } = server.reply;

server([
  get('/', ctx => render('index.html'))
  
  // Join/leave the room
  get('/', ctx => render('index.html')),
  socket('connect', updateCounter),
  socket('disconnect', updateCounter)
  socket('message', sendMessage)
]);
