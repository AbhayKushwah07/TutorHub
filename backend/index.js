
const express = require('express')
var cors = require('cors') 

const app = express()
const port = 5000

app.use(cors())
app.use(express.json())




 app.use('/student', require('./routes/student'))
 app.use('/teacher', require('./routes/teacher'))

 app.use('/course', require('./routes/course'))
 app.use('/rating', require('./routes/rating'))
 app.use('/login', require('./routes/login'))
 app.use('/request', require('./routes/request'))


app.listen(port, () => {
  console.log(`running on http://localhost:${port}`)
})
