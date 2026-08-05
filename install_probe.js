const fs = require("fs");

fs.writeFileSync(
  "./sandbox-demo.txt",
  "created by postinstall"
);

console.log(
  "postinstall executed"
);