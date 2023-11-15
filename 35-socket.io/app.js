const express = require('express');
const app = express();
const http = require('http');
const socketIO = require('socket.io');

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const home = require('./routes');

app.use('/', home);

const nickStore = {};

const server = http.createServer(app); // express 앱으로 http 서버를 생성
const io = socketIO(server); // socket.io를 http 서버에 연결

function updateList() {
  io.emit('updateNicks', nickStore);
}
// emit() from server
// socket.emit -> 해당 클라이언트에게만 전달
// io.emit -> 전역으로 전달
io.on('connection', function (socket) {
  console.log('소켓이 연결되었습니다');

  socket.on('setNick', (nick) => {
    if (Object.values(nickStore).indexOf(nick) > -1) {
      socket.emit('error', `현재 ${nick}은 이미 사용하는 닉네임 값입니다`);
    } else {
      nickStore[socket.id] = nick;
      console.log('접속 유저 목록', nickStore);
      io.emit('notice', `${nick}님이 입장하셨습니다`);
      socket.emit('success', nick);
      updateList();
    }
  });

  socket.on('message', (data) => {
    console.log('메세지', data);
    socket.broadcast.emit('sMessage', data);
  });

  socket.on('disconnect', () => {
    console.log('접속 끊김');
    io.emit('notice', `${nickStore[socket.id]}님이 퇴장하셨습니다`);
    delete nickStore[socket.id];
    updateList();
  });

  socket.on('hello', (msg) => {
    console.log(msg);
  });

  socket.on('study', (msg) => {
    console.log(msg);
  });

  socket.on('bye', (msg) => {
    console.log(msg);
  });

  socket.on('msg', (data) => {
    socket.broadcast.emit('sMsg', data);
  });
});
server.listen('3000', () => {
  console.log('3000port is running');
});
