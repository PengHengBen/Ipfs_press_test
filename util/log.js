const log4js = require('log4js');
log4js.configure(
{
  appenders:
  {
    console:
    {
        type: 'console'
    },
    Duration:
    {
        //上传耗时计算日志
        type: 'dateFile',
        filename: 'logs/Duration.log',
        pattern: ".yyyy-MM-dd.log",
        compress: true,
        daysToKeep: 2,
    },
    Status:
    {
        //上传状态
        type: 'dateFile',
        filename: 'logs/Status.log',
        pattern: ".yyyy-MM-dd.log",
        compress: true,
        daysToKeep: 2,
    },
    Hash:
    {
        //上传成功后获取哈希值
        type: 'dateFile',
        filename: 'logs/Hash.log',
        pattern: ".yyyy-MM-dd.log",
        compress: true,
        daysToKeep: 2,
    },
    Count:
    {
        //进程上传数量计算
        type: 'dateFile',
        filename: 'logs/Count.log',
        pattern: ".yyyy-MM-dd.log",
        compress: true,
        daysToKeep: 2,
    }
  },
  categories:
  {
      default:
      {
          appenders: ['console'],
          level: 'debug',
      },
      Duration:
      {
        appenders: ['console','Duration'],
        level: 'debug', // 指定等级
      },
      Status:
      {
          // 指定为上面定义的appender，如果不指定，无法写入
        appenders: ['console','Status'],
        level: 'debug', // 指定等级
      },
      Hash:
      {
        appenders: ['console','Hash'],
        level: 'debug', 
      },
      Count:
      {
        appenders: ['console','Count'],
        level: 'debug', 
      }
  },
  
  // for pm2...
  pm2: true,
}
);


function getLogger(type)
{
    return log4js.getLogger(type);
}

module.exports = { getLogger };