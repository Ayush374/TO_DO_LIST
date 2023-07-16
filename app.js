const express = require('express')
const bodyparser = require('body-parser')
const app = express()
const port = 4000;
app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));
var items =[];

app.get('/', (req, res) => {
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  
var today = new Date();

let din = today.getDay();
var day = today.toLocaleDateString("en-US", options);
res.render("list",{Kindofday:day, newListItems:items});
})
app.post("/",(req,res)=>{
   item = req.body.newItem;
   items.push(item);
   res.redirect("/");

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
