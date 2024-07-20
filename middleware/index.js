const fs = require("fs");

function logging(req,res,next){
    fs.appendFile("./request.log",`${Date.now()} request ${req.method} : ${req.url} \n`,(err,mssg)=>{});
    next();
}

module.exports=logging;