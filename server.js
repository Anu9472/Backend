import http from "http"

 const server = http.createServer((req,res)=>{
  if(req.url ==="/"){
    res.end("Hello")
}else if(req.url === "/data"){
    res.end("Anushka is getting viral")
}

else if(req.url === "/about"){
    res.end("about to famous ")
}else{
    res.end("404 not found")
}
})


server.listen(4000,()=>{
    console.log(`server is running http://localhost:${4000}`);
    
})