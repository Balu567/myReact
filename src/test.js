const SSH = require("simple-ssh");

const parser = require("node-csv-parse");

function ssh(host, user, password) {
  console.log("inside the system");
  var ssh = new SSH({
    host: host,
    user: user,
    pass: password,
  });
  // execute the df -h command to find out disk utilization
  ssh
    .exec("/home/baluabcdefg/jobs/script.sh", {
      out: function (stdout) {
        console.log(stdout);
        //parse(stdout);
      },
    })
    .start();
}
ssh("192.168.10.129", "baluabcdefg", "baluabcdefg");
