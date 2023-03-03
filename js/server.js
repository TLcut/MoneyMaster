const express = require("express");
const app = express();

app.use('/public', express.static('public'));
app.use('/views', express.static('views'));

app.get('/',(req,res)=>{
    res.render('main.ejs')
})

app.listen(5000,()=>{
    console.log("Server on http://localhost:5000")
});