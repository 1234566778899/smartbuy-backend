const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/smartbuy', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(db => console.log('db connected'))
    .catch(error => console.log(error));
