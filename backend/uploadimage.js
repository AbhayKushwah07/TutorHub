

const express= require('express');
const app=express();
const multer=require("multer");
const path =require("path");


const storage=multer.diskStorage({
    destination:'./upload/images',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({
    storage: storage,
   
  })
function errHandler (err,req,res,next){
    console.log('yeah')
      if (err instanceof multer.MulterError)
      {
          
          res.json({
              success :0,
              message: err.message
          })
      }
  }

app.use('/profile',express.static('upload/images'));
app.post("/upload",upload.single('profile'),(req,res)=>{
    console.log(req.file);

res.json({
    success:1,
    profile_url:`http://localhost:5000/profile/${req.file.filename}`
})
})
app.use(errHandler);
