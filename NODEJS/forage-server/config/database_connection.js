const mongoose = require("mongoose");

function ConnectMongoDBDatabase() {
    console.log("Connecting to database...")

    //TODO: change database connection string
    const databaseConnection = mongoose.connect("mongodb://localhost/forage-server");

    databaseConnection.then(() => {
        console.log("Connected to mongoDB database successfully");
    });
    databaseConnection.catch((error) => {
        console.log("Database connection refused", error);
    });
}

module.exports = ConnectMongoDBDatabase;

