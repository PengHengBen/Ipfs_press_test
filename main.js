const cp = require('child_process');

for(var i=1; i<6; i++){
    //开启五个子进程
    var n = cp.fork('./schudule/scheduleJob.js');
    n.send(i);
    n.on('message', function (m) {
        console.log('PARENT got message:', m);
    });
}
