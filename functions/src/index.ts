const functions = require('firebase-functions');
const admin = require("firebase-admin");

admin.initializeApp(functions.config().firebase);

exports.notification = functions.database.ref('/notification/{userId}/{messageId}').onWrite(event => {

    const message = event.data.val();
    const payload = {
            notification: {
                title: message.title,
                body: message.body,
                icon: "https://placeimg.com/250/250/people"
            }
    };

    return admin.messaging().sendToDevice(message.token, payload)
});