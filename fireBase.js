var admin = require("firebase-admin");

var serviceAccount = require("k5.jpg/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});