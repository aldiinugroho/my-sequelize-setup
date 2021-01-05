const expess = require('express')
const app = expess()
const port = 3000

app.get('/',(req,res) => {
    res.send('hello world')
})

app.listen(port, () => {
    console.log(`app run in http://localhost:${port}`)
})