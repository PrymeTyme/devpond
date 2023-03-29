import * as firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/functions';
import 'firebase/compat/firestore';
import {getApps} from 'firebase/app';




if(!getApps().length){
    firebase.default.initializeApp({
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,

    })
}


export default firebase