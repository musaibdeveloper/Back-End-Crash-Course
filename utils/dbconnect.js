import mongoose from "mongoose";
import config from "config";

async function dbconnect() {
    try {
        await mongoose.connect(config.get("DB_URI"));
        console.log("DB conneted successfully");
    } catch (error) {
        console.log(error);
    }
}

dbconnect()