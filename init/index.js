const mongoose=require("mongoose");
const initData=require("./data");
const Listing=require("../models/listing");
const MONGO_URL="mongodb://127.0.0.1:27017/wonderlust";

main().then(()=>{
    console.log("connected to db");
})
.catch((err)=>{
    console.log(err);
});
async function main(){
    await mongoose.connect(MONGO_URL);
}
//app.set("view engine","ejs");
//app.set("views",path.join(__dirname,"views"));

const initDB=async()=>{
    await Listing.deleteMany({});
    initData.data=initData.data.map((obj)=>({...obj,owner:"65f54105446db32af78895fe"}));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");

}

initDB();