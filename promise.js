
const fs=require('fs');
const superagent=require('superagent');

const readFilepromise = (fileName,utf8) => {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, utf8, (err, data) => {
            if (err) {
                 reject(err);
            }

            resolve(data);
        });
    });
}

readFilepromise('text1.txt','utf8')
    .then(data => {
        console.log(data);
       try {
            const d =  superagent.get(`https://api.nationalize.io?name=${data}`);
            var data3 = d._body.country[1].country_id;
         writeFilepromise('text5.txt', data3);
            console.log('success');
        } catch (err) {
            console.log(err);
        }
})
const writeFilepromise = (fileName,data) => {
    return new Promise((resolve,reject) => {
        fs.writeFile(fileName, data, (err,data) => {
            if (err) {
                 reject(err);
            }
            resolve(data);
        });
    });
}


