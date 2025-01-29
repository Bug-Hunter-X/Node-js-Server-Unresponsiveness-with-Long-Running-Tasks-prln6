const http = require('http');

const server = http.createServer((req, res) => {
  //Simulate a long-running task
  let counter = 0;
  const interval = setInterval(() => {
    counter++;
    if (counter === 10) {
      clearInterval(interval);
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Task completed');
    }
  }, 1000);
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});