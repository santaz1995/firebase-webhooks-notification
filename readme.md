# Simple Firebase webhook for send browser notification

##This webhook tracks the change data in the notification table and sends notification to users on their device id

###Create firebase project

- Create project in 'https://console.firebase.google.com/'
- Install global firebase cli
```sh
    npm install -g firebase-tools
```
- Login to firebase cli
```sh
    firebase login
```
- Structure realtime firebase
```sh
    {
        "notification":  {
            "userId": {
                "messageId": {
                    "body": string,
                    "title": string,
                    "token": string,
                    "user_id": string
                }
            }
        }
    }
```

###Deploy function

- Clone repo
```sh
    git clone https://github.com/santaz1995/firebase-webhooks-notification.git
```
- Setup your project id in .firebaserc.
```sh
    cd path/to/project/src/environments
```
- Install npm dependency
```sh
    cd path/to/project/function
    npm i
```
- Deploy function to firebase
```sh
    cd path/to/project/
    firebase deploy --only functions
```