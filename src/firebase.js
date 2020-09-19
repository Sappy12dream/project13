import firebase from "firebase";
const firebaseApp = firebase.initializeApp(
    {
        apiKey: "AIzaSyBPJC83FrHVqxreflIOxCMmYWCh_BcUWgQ",
        authDomain: "project-12-7814b.firebaseapp.com",
        databaseURL: "https://project-12-7814b.firebaseio.com",
        projectId: "project-12-7814b",
        storageBucket: "project-12-7814b.appspot.com",
        messagingSenderId: "660877574042",
        appId: "1:660877574042:web:a448bf579ce2c9c34b4423",
        measurementId: "G-SPECZS8P1K"
      }
)

const auth = firebase.auth();
export { auth };
