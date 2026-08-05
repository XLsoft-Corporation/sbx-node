const fs = require("fs");
const os = require("os");

fs.writeFileSync(
  "/tmp/sandbox-demo.txt",
  `
Hostname: ${os.hostname()}
User: ${os.userInfo().username}
`
);

console.log(
  "postinstall executed"
);