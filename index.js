import { error, log } from "console";
import fs from "fs"

fs.readFile("data.txt","utf-8", (err, data)=>{
 if(err){
    console.log(err);
    
 }else{
    console.log(data);
    
 }

})


let json_obj = {
    "name" : "Anushka",
    "age"  : 16
}

fs.writeFile("note.txt", "Hello Rahul",(err)=>{
    if(err){
      console.log(err);
      
    }else{
        console.log("file created");
        
    }
})


fs.appendFile("note.txt","\nHow are you",(err)=>{
    if(err)console.log(err);
    else console.log("data created");
   
    
})

// fs.rename("note.txt","new.txt",(err)=>{
//     if(err)console.log(err);
//     else console.log("new name created");
      
// })

fs.unlink("new.txt",(err)=>{
    if(err)console.log(err)
        else console.log("file deleted");
        
    
})

fs.mkdir("myfolder",(err)=>{
    if(err)console.log(err);
    else console.log("folder created");
    
    
})





