var crypto = require('crypto');
var secret_key = 'fd85b494-aaaa';
var secret_iv = 'smslt';
var encryptionMethod = 'AES-256-cbc';
var key = crypto.createHash('sha512').update(secret_key,'utf-8').digest('hex').substr(0,32);
var iv= crypto.createHash('sha512').update(secret_key,'utf-8').digest('hex').substr(0,16);


var encryptedMessage = encrypt_string("vinee",encryptionMethod,key,iv);
console.log(encryptedMessage);//output QmpjcVZmZ1JSTkhZWWFjYjA2K253dz09

function encrypt_string(plain_text,encryptionMethod,secret,iv){
    var encrytor = crypto.createCipheriv(encryptionMethod,secret,iv);
    var aes_encrypted = encrytor.update(plain_text,'utf-8','base64')+encrytor.final('base64');
    return Buffer.from(aes_encrypted).toString('base64');
}


var decryptedMessage = decrypt_string("b1BjbDNHZ1lxTmJybFpJa0RwWHVzQT09",encryptionMethod,key,iv);
console.log(decryptedMessage);

function decrypt_string(encryptedMessage,encryptionMethod,secret,iv){
    const buff = Buffer.from(encryptedMessage,'base64');
    encryptedMessage = buff.toString('utf-8')
    var decryptor = crypto.createDecipheriv(encryptionMethod,secret,iv);
    return decryptor.update(encryptedMessage,'base64','utf-8')+decryptor.final('utf-8');
    
}