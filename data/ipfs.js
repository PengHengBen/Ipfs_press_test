const s = require('./Object.js');
const log4js = require('../util/log.js');
const logger = log4js.getLogger('Hash');//上传成功后获取哈希值
const ipfsAPI = require('ipfs-api');

const ip = '49.235.38.46';//ipfs地址
const port = '3925';//ipfs api端口
const ipfs = ipfsAPI(ip,port,{protocol: 'http'});

function Upload(){
    ipfs.object.put(Buffer.from(s.simulatedData()))//上传模拟数据
        .then( rsp => {
            ipfs.pin.add(rsp._json.multihash);
            logger.info(rsp._json.multihash);
        })
        .catch(err => logger.error(err));
}

module.exports = { Upload };