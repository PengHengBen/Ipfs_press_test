const ipfs = require('../data/ipfs.js');
const schedule = require("node-schedule");
const log4js = require('../util/log.js');
const logger = log4js.getLogger('Status');//上传状态
const logger1 = log4js.getLogger('Count');//进程上传数量计算
const logger2 = log4js.getLogger('Duration'); //上传耗时计算日志

let rule = new schedule.RecurrenceRule();
var times = [];
for(var i=1; i<60; i++){
    times.push(i);
}
rule.second = times;
var c = 1;

function duration(){
  //获取当前时间
  return Date.now();
}


process.on('message',function(m){
    console.log('CHILD got message:' + m)
    schedule.scheduleJob(rule, function(){
      //定时任务每秒上传一次
      var t1 = duration();
      ipfs.Upload();
      var t2 = duration();
      logger2.info('json upload interval time:: %f ms',(t2-t1));
      logger.info("process %d upload json success!",m);
      logger1.info("process:: %d Numbers of upload:: %d",m,c);
      c++;
    })
    process.send(m + ' start job...');
})

