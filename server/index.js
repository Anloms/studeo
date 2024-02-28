const express = require('express');
const app = express()

const cors = require('cors')
const path = require('path');
const PATH = 3005;

app.use(express.json())


app.listen(PATH,()=>{
    console.log(`server is listening on ${PATH}`)
})