
//we import the app module 
const app = require('./users/app');
//app.get("/",(req,res)=>{
    //res.json({success: true, message: "This is the homepage"})
//})


// we specify the port the server will listen to 
const port = process.env.PORT || 7000

/* 
    Here you can add the code to connect to a database such as mongoDB 
{
}
*/

app.listen(port,()=>{
    console.log(`server is listening on port${port}`)
})