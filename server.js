//dependencies
const express = require("express");

//set express to a variable
const app = express();

//port for the server to listen on
const PORT = process.env.PORT || 3000;

//data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//allows access to public folder
app.use(express.static("public"));

//requiring routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//server listener
app.listen(PORT, () =>{
    console.log(`App listening on PORT: http://localhost:${PORT}`);
});