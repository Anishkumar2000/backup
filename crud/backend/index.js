const express = require ('express');
const cors  = require ('cors');
const port = 5000;
const app = express();
const mongoose = require ('mongoose');
const user = require ('./models/user_model');


mongoose.connect('mongodb://localhost:27017/College').then(()=>{
    console.log("Connected");
}).catch((err)=>{
    console.log("Error");
})


async function run() {
     
 try{

   // insert a new Student 

    // const st = new user({
    //     name:"Anishkumar",
    //     age:20
    // })
    // st.save();

    // const newuser = await user.create({
    //     name:"AK2",
    //     age:22
    // });
    // console.log(newuser);

    // get All Students

    // const sts = await user.find();
    // console.log(sts);

    // filter by student name
   
    //  const st = await user.find({name:"Anishkumar"});
    //  console.log(st);

    // update a student

    // const st = await user.updateOne({name:"Anishkumar"},{$set:{name:"anishkumar"}});
    // console.log(st);

    // update many student age = 30

    // const st = await user.updateMany({age:20},{$set:{age:30}});
    // console.log(st);


    // delete Student

    // const st = await user.deleteOne({name:"Anishkumar"});
    // console.log(st);

    // delete many students

    // const st = await user.deleteMany();
    // console.log(st);



    
 }
 catch(err){
    console.log(err.message);
 }

};

run();

app.listen(port,()=>{
    console.log("App is Running Started");
})