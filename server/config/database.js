require('dotenv').config();
const mongoose = require('mongoose');

module.exports = async () => {
    return await mongoose.connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true, 
        useFindAndModify: false,
    });
};
