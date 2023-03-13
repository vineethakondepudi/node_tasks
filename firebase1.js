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




const express=require('express');
const multer= require('multer');
const app=express();
const firebase=require('firebase/app');
const {getStorage, ref, uploadBytes}=require('firebase/storage');

const firebaseConfig = {
      apiKey: "AIzaSyAAUwtBxwBeEUj-k3zx-dCGEuJdZjP93zA",
      authDomain: "vinnetha-96244.firebaseapp.com",
      projectId: "vinnetha-96244",
      storageBucket: "vinnetha-96244.appspot.com",
      messagingSenderId: "498860794734",
      appId: "1:498860794734:web:b264fe51512aeb2a22577f",
      measurementId: "G-M5CBS872D3"
    };

firebase.initializeApp(firebaseConfig)
const storage= getStorage()

const upload= multer({storage: multer.memoryStorage()})

app.get('/',(req,res)=>
{
res.json("firebase storage")
})
app.post("/",upload.single('filename'), (req,res)=>
{
const storageref= ref(storage, req.file.originalname)
uploadBytes(storageref, req.file.buffer).then(()=>
{
console.log("file upload");
})
// console.log(req.file);
res.send("Inserted successfully.................")
})
app.listen(5000)