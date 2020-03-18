const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.get('*', function(req, res){
  res.sendFile(__dirname + '/public/index.html')
});


// require("./routes/apiRoutes")(app);
// require("./routes/htmlRoutes")(app);



app.listen(PORT, function() {
  console.log("App listening on http://localhost:" + PORT);
});
