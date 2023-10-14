const express = require('express')
const app = express();
const cors = require('cors')
require('./models/db')
app.use(express.json());

app.use(cors())
app.get('/', (req, res) => {
    res.send('v.1.0.0')
})

app.use('/user', require('./routes/User'))

app.listen(4000, () => {
    console.log('server running on port 3000')
})