import Express from "express"

const express = Express() 

express.use(Express.static("public")) 

express.listen(3001 , ()=> {
    console.log("listenning on 3001" )
})