const express = require('express')
const app = express()
const port = 3003

//app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`The app listening at http://localhost:${port}`)
})
