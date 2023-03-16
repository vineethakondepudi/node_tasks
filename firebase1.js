// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAAUwtBxwBeEUj-k3zx-dCGEuJdZjP93zA",
//   authDomain: "vinnetha-96244.firebaseapp.com",
//   projectId: "vinnetha-96244",
//   storageBucket: "vinnetha-96244.appspot.com",
//   messagingSenderId: "498860794734",
//   appId: "1:498860794734:web:b264fe51512aeb2a22577f",
//   measurementId: "G-M5CBS872D3"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);



//Require the express 
const express=require('express');
//Require the multer
const multer= require('multer');
const app=express();
var fs = require('fs')
//Require the firebase
const firebase=require('firebase/app');
const {getStorage, ref, uploadBytes,  getDownloadURL}=require('firebase/storage');

const firebaseConfig = {
      apiKey: "AIzaSyAAUwtBxwBeEUj-k3zx-dCGEuJdZjP93zA",
      authDomain: "vinnetha-96244.firebaseapp.com",
      projectId: "vinnetha-96244",
      storageBucket: "vinnetha-96244.appspot.com",
      messagingSenderId: "498860794734",
      appId: "1:498860794734:web:b264fe51512aeb2a22577f",
      measurementId: "G-M5CBS872D3"
    };

//Intialize the configurations
firebase.initializeApp(firebaseConfig);
const storage= getStorage()

const upload= multer({storage: multer.memoryStorage()})
app.get('/download', async function(req, res) {
  try {
    const fileRef = ref(storage, req.query.path);
    const url = await getDownloadURL(fileRef);
    // res.redirect(url);
    // res.send(url);
    fs.writeFile('text3.txt',`${url}`,(err)=>{
        if(err){
          console.log(err);
        }  
        else{
          console.log("Download successfully on text3 file");
        }
    })
  } catch (error) {
    console.error(error);
    res.status(500).send('Error downloading file');
  }
});

app.post("/upload",upload.single('filename'), (req,res)=>
{
const storageref= ref(storage, req.file.originalname)
uploadBytes(storageref, req.file.buffer).then(()=>
{
console.log("File uploaded successfully");
})
// console.log(req.file);
res.send("Inserted successfully.................")
})
app.listen(6000,()=>console.log("Server working at port 6000"));