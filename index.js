const http = require("http");

const server = http.createServer(
  (req, res) => {
    res.end("Hello Claude Code");
  }
);

server.listen(
  3000,
  () => {
    console.log("running");
  }
);