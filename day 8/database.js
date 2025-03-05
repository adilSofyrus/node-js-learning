const {MongoClient} = require("mongodb");

const url = "mongodb+srv://nodejs:RMAtWsM2WvcMWleq@nodejs.7yrle.mongodb.net/";

const client = new MongoClient(url);

const dbName = "Hello";

async function main(){
    // Use connect method to connect with the server

    await client.connect();

    console.log("connection done successfully");

    const db = client.db(dbName);

    const  collection = db.collection("User");

    //Insert Data
    const data = {
        firstName: "Jasim",
        lastName: "Nabeel",
        wife: "Rustye"
    };

    const insertResult = await collection.insertOne(data);
    console.log('Inserted documents =>', insertResult);

    const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);   

    return 'done';

}


main().then(console.log).catch(console.error).finally(()=> client.close());


// Note
/**
 * CRUD Operation the documents 
 */