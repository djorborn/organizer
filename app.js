var app = require("express")()
,mongoose = require("mongoose")
, formidable = require("formidable")
;

app.set("view engine", "pug")
.use(require("express").static(__dirname + "/public"))
.listen(3000)
;

app.use(function(req, res){
  res.render('main');
})
