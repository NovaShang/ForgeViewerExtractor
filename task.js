const ForgeSDK = require('forge-apis');

/**
 * @module asdfasdf
 * 
 * @param option
 */

module.exports = class Task {
    constructor(option) {
        this._credentials = option.credentials;



        //任务名称
        this.name = option.filename;
        //文件路径
        this.filename = option.filename;
        //forge token
        this.token = "";
        //forge urn
        this.urn = "";
        this.bucketname = "";
    }

    run() {

    }




}