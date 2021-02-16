var express = require("express"),
  app = express(),
  bodyparser = require("body-parser");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.static("images"));
app.use(bodyparser.urlencoded({extended: true}));


app.get("/", function(req, res){
    res.render("index")
});


app.get("/home", function(req, res){
    res.render("index")
});


app.get("/login", function(req, res){
    res.render("login")
});


app.get("/register", function(req, res){
    res.render("register")
});


app.get("/consoles", function(req, res){
    res.render("consoles")
});


app.get("/consoles/ps4", function(req, res){
    res.render("ps4")
});


app.get("/consoles/ps4pro", function(req, res){
    res.render("ps4pro")
});


app.get("/consoles/ps4slim", function(req, res){
    res.render("ps4slim")
});


app.get("/consoles/ps5", function(req, res){
    res.render("ps5")
});


app.get("/consoles/xboxone", function(req, res){
    res.render("xboxone")
});


app.get("/consoles/xboxones", function(req, res){
    res.render("xboxones")
});


app.get("/consoles/xboxonex", function(req, res){
    res.render("xboxonex")
});


app.get("/consoles/xboxseriess", function(req, res){
    res.render("xboxseriess")
});


app.get("/consoles/xboxseriesx", function(req, res){
    res.render("xboxseriesx")
});


app.get("/admin-login", function(req, res){
    res.render("adminlogin")
});


app.get("/admin-panel", function(req, res){
    res.render("admin")
});


















app.listen(3000, function(){
    console.log("Server Started")
});