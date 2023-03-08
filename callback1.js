// const fs=require('fs');
// const superagent=require('superagent');
// fs.readFile('text1.txt','utf8',(err,data)=>{
//     if(err){      
//           console.log(err);
        
// }
//     console.log(data);
//  superagent.get(`https://api.nationalize.io?name=${data}`,(err,data1)=>{
//     if(err)
//         console.log(err);    
//     var data2=data1._body.country[0]. country_id;
//     fs.writeFile('text2.txt',`${data2}`,(err)=>{
//         if(err){
//             console.log(err);
//         }
//         console.log("Success");
//     })
    
//  })
// })
// fs.writeFile()


var fs = require('fs');
var superagent = require('superagent');
//ReadFile
fs.readFile('text1.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err);
    }
    console.log(data);

    //Superagent
    // superagent.get(`https://api.nationalize.io?name=${data}`,(err,data1)=>{
    //     if(err){
    //         console.log(err);
    //     }
    //     var data2 = data1._body.country[0].country_id;


        //WriteFile
        fs.writeFile('text2.txt',`${data}`,(err)=>{
            if(err){
                console.log(err);
            }
            console.log('Success');
        })
    })
// })