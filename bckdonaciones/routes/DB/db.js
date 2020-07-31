let mongoClient = require('mongodb').MongoClient;

let _db;

module.exports = class {
  static async getDB(){
    if(_db){
      return _db;
    } else {
      try {
        let client = await mongoClient.connect(process.env.MONGODBURI, { useNewUrlParser: true, useUnifiedTopology: true });
        _db = client.db(process.env.MONGODBDBNAME);
        return _db;
      }catch(e){
        console.log(e);
        process.exit(1);
      }
    }
  }
}

/*var MongoClient = require('mongodb').MongoClient;
var MongoUri = 'mongodb://127.0.0.1:27017';
var MongoDB = 'RecolectaHNDB';
var MongoOpt = { useUnifiedTopology: true };



MongoClient.connect(MongoUri, MongoOpt, (err, conn) => {
    if (err) {
        console.log(err);
        process.exit(1);
    }

    var _db = conn.db(MongoDB);
    return _db;
});*/
