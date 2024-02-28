const express = require('express');
const app = express()

// const cors = require('cors')
// const path = require('path');
const router = require('./router.js')
const PORT = 3000;

app.use(express.json())
app.use(router)

app.listen(PORT,()=>{
    console.log(`server is listening on ${PORT}`)
})