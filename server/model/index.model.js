const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/studeo');

const db = mongoose.connection;

db.on('error', () => {
	console.error('MongoDb connection error');
});

db.on('open', () => {
	console.log('Database connected ====> <3');
});

module.exports = mongoose;
