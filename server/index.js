const express = require('express');

const app = express();

const cors = require('cors');
const path = require('path');

const router = require('./router.js');

const PORT = 3000;

app.use(express.static(path.join(__dirname, '../client/src')))
	.use(express.json())
	.use(cors())
	.use(router);

app.listen(PORT, () => {
	console.log(`server is listening on ${PORT}`);
});
