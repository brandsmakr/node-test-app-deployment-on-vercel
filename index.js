const express = require('express')
const app = express()

app.get('/api/*', (req, res)=>{
    return res.send('<h1>your server is running on port 22</h1>')
})

app.listen(22, ()=>{
    console.log('server is running on port 22')
})
