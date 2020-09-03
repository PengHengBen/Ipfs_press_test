const stringRandom = require('string-random');

function simulatedData(){
    var data = {
        "_id": "ObjectId(9288549f3202210006a55f1d)",
        "receipt": {
            "receiver": "cmccbossumcp",
            "act_digest": stringRandom(65).toLowerCase(),//随机字符串
            "global_sequence": 41528893,
            "recv_sequence": 8126846,
            "auth_sequence": [
                ["cmbyonguashd", 3594278]
            ],
            "code_sequence": 2,
            "abi_sequence": 2
        },
        "act": {
            "account": "cmccbossumcp",
            "name": "umcporder",
            "authorization": [{
                "actor": "cmbyonguashd",
                "permission": "default"
            }],
            "data": {
                "account": "cmbyonguashd",
                "order": {
                    "Transido": "5311072618020666015",
                    "UserPartyID": "BOSS1000",
                    "HpartyID": "UMCP1000",
                    "BusType": "UMCP",
                    "msgTransactionID": "531BIP2B32520200726180206744666",
                    "oprTime": "20200726180203",
                    "actionID": 5,
                    "Brand": 1,
                    "feeUser_ID": "18254896440",
                    "destUser_ID": "18254896440",
                    "oldUser_ID": 0,
                    "actionReasonID": 2,
                    "accessMode": 1,
                    "Inherit": "",
                    "servType": "210001",
                    "effTime": 0,
                    "expireTime": 0,
                    "SPID": "",
                    "SPServID": "",
                    "feeType": 2,
                    "servParamInfo1": "",
                    "servParamInfo2": "",
                    "servParamInfo3": "",
                    "servParamInfo4": "",
                    "servParamInfo5": ""
                }
            },
            "hex_data": "901a369a4dea8f449ffa6c2568b8b44908424f53533130303008554d43503130303004554d43501f353331424950324233323532303230303732363138303230363734343636366bb11b595f1200000501389d134004000000389d1340040000000000000000000000020000000000000001000632313030303100000000000000000000000000000000000002000000000000000000000000"
        },
        "context_free": false,
        "elapsed": 139,
        "console": "",
        "trx_id": stringRandom(65).toLowerCase(),//随机字符串
        "block_num": 33032619,
        "block_time": "2020-07-26T10:02:07.500",
        "producer_block_id": "01f809ab44e997d77441384f008a2dc57ebd5f14ab8e366176bb6f067ce461aa",
        "account_ram_deltas": [],
        "except": null,
        "trx_status": "executed",
        "createdAt": "ISODate(2020-07-26T10:02:07.527Z)"
    };
    return JSON.stringify(data);
}

module.exports = {simulatedData};