var mongoClient = require("mongodb").MongoClient;
mongoClient.connect("mongodb://localhost/DashboardVoxus")
            .then(conn => global.conn = conn)
            .catch(err => console.log(err))

function findAll(callback){  
    global.conn.collection("dashboard").find({}).toArray(callback);
}

function insert(task, callback){
    global.conn.collection("dashboard").insert(task, callback);
}

var ObjectId = require("mongodb").ObjectId;
function findOne(id, callback){  
    global.conn.collection("dashboard").find(new ObjectId(id)).toArray(callback);
}

function update(id, task, callback){
    global.conn.collection("dashboard").updateOne({_id:new ObjectId(id)}, task, callback);
}

function deleteOne(id, callback){
    global.conn.collection("dashboard").deleteOne({_id:new ObjectId(id)}, callback);
}

module.exports = { findAll, insert, findOne, update, deleteOne }