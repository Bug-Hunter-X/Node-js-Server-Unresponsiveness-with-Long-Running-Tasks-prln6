const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate a long-running task asynchronously
  let counter = 0;
  const timer = setTimeout(() => {
    counter++;
    if (counter === 10) {
      clearTimeout(timer);
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Task completed');
    } else {
      //Recursively call the function to simulate asynchronous operation.
      setTimeout(function() {
          counter++;
          if (counter === 10) {
            clearTimeout(timer);
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Task completed');
          } else {
            setTimeout(arguments.callee, 1000);
          }
      }, 1000);
    }
  }, 1000);
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});