const mongoose = require('mongoose')
// const url = 'mongodb+srv://ShopApp:SHOPAPP@shopapp-hodya.mongodb.net/MessageNode?retryWrites=true&w=majority';
const newUrl = 'mongodb://localhost:27017/AuthFeed'

mongoose.connect(newUrl, {useNewUrlParser : true,  useUnifiedTopology: true });
    
const db = mongoose.connection

    db.on('error', (err) => console.log(err))
    db.once('open', () =>{
        console.log('Connected to the Database')
    })

