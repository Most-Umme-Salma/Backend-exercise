const express=require ('express');
const{blogRouter}=require("./routes/blogs")

const app =express();
const port =process.env.PORT|| 3001;

app.use("/blogs", blogRouter);

app.listen(port, () =>{
console.log(`Example app listening  http://localhost:${port}`)
})