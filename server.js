const express = require('express');
const app = express();




app.use(express.static(__dirname + '/public'));


app.get('/',(req,res)=>{
    res.send('Hello Express');
});



const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`listenning on port ${port}`);
});

