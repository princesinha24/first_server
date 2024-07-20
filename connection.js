const mongoose =require("mongoose");

async function connectMongoDb(url){
    mongoose.connect(url)
    .then(()=>console.log("DB is connected"))
    .catch((err)=>{
        return console.log(`error encountered ${err}`);
    });
}

function portListen(port_no){
    console.log(`port listening at: ${port_no}`);
}
module.exports={
    connectMongoDb,
    portListen
};