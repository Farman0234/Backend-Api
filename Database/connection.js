const mongoose = require('mongoose');

async function connectToDatabase() {
    try {
        await mongoose.connect('mongodb://localhost:27017/DB49', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connection succeeded");
    } catch (err) {
        console.error("Connection failed", err);
    }
}


connectToDatabase();
