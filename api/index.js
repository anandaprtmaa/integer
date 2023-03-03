import express from "express";

const app = express();

//middleware

//
app.use((req,rest,next =>{
console.log("ada request masuk");
next();    
}));

//route
app.get("/",(req,res) => {
 res.send("Assalamualaikum")
});

app.listen(3000, () =>{
    console.log("Berhasil Jalan");
})