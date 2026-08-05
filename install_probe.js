const fs = require("fs");

fs.writeFileSync(
  "/tmp/sandbox-demo.txt",
  "created by postinstall"
);

console.log(
  "postinstall executed"
);