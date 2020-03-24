const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const path = require('path');
const categoriesData = require('./data/categories');
const citiesData = require('./data/cities.js');
const itemData = require('./data/item.js');
const serveStatic = require('serve-static');
var cors_proxy = require('cors-anywhere');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', serveStatic(path.join(__dirname, '/src')));

//shows all the cities available
app.get('/api/cities', function(req, res){
  res.json(citiesData)
});
//shows all the categories for a city
app.get('/api/:city', function(req, res){
  res.json(categoriesData)
});
//shows all the items for that category
app.get('/api/:city/:category', function(req, res){
  console.log(req.params.city)
  let newData
  if (req.query.min_price != undefined) {
    newData = itemData.filter((item) => {
      return item.city == req.params.city && 
      item.category == req.params.category && item.price >= req.query.min_price && item.price <= req.query.max_price
    })
  }
  else{
    newData = itemData.filter((item) => {
    return item.city == req.params.city && 
    item.category == req.params.category
  })
  }
  
  res.json(newData)
});
//shows all the items for that listing
app.get('/api/:city/:categories/:listing/', function(req, res){
  res.json(itemData)
});
//shows the item that was selected
app.get('/api/:city/:categories/:listing/:item', function(req, res){
  res.json(itemData)
});
app.get('*', function(req, res){
  res.sendFile(__dirname + '/public/index.html')
});


// require("./routes/apiRoutes")(app);
// require("./routes/htmlRoutes")(app);



app.listen(PORT, function() {
  console.log("App listening on http://localhost:" + PORT);
});
