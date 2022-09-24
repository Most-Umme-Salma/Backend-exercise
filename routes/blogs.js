const express = require("express");
const blogRouter = express.Router();

blogRouter.get("/",(req,res) =>{
    res.send('hallo world');
})

blogRouter.get("/:id", (req,res)=>{
    const id=req.params.id
    res.send(`blogs:${id}`);
})
module.exports ={
    blogRouter,
};