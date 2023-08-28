require('dotenv').config();
const mongoose = require('mongoose');

exports.connect = async () =>
{
    try {
        const conn = await mongoose.connect(`${ process.env.DB_URL}${process.env.DB_NAME}`);

        console.log(`MongoDB wurde verbunden auf ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
    }
}

exports.closeConnection = () => mongoose.closeConnection();
