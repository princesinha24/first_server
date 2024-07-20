const data = require("../data.json");
const User = require("../models/user");


function totalUser(req,res){
    res.send(`<h2>
    Total no of user is ${data.length}
    </h2>`);
}

async function allUser(req,res){
    const all_user= await User.find({});
    const html_res=`
    <dev>
    <ul>
    ${all_user.map((user)=> 
        `<li>${user.firstName}</li>`
    ).join("")}
    </ul>
    </dev>`
    // custom header
    res.setHeader("host","Prince Sinha");
    return res.send(html_res);
}

async function addUser(req,res){
    const user=req.body;
    try{
        result = await User.create({
            firstName:user.first_name,
            lastName: user.last_name,
            email: user.email,
            gender: user.gender,
            jobTitle: user.job_type,
        });
        console.log(result);
        return res.status(201).json({"status":"sucess", "id":result.ObjectId});
    }
    catch (error){
        console.log(error);
        return res.status(400).send("<h2>email id already used</h2>");
    }
    
    // user.id=data.length+1;
    // console.log(user);
    // data.push(user);
    // fs.writeFile("./data.json",JSON.stringify(data),(err,mssg)=>{
    //     console.log(mssg);
    //     res.status(201).json({"status":"sucess",
    // "id":user.id});
    // });
}

async function userById(req,res){
    console.log(req.params.id);
    const user = await User.findById(req.params.id);
    if(!user){
        return res.status(404).send("<h2>User not found</h2>");
    }
    else{
        return res.json(user);
    }
}

async function deleteUser(req,res){
    console.log(req.params.id);
    await User.findByIdAndDelete(req.params.id);
    res.send("sucess");
}

module.exports={
    totalUser,
    allUser,
    addUser,
    userById,
    deleteUser
}