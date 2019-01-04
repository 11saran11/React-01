import firebase from 'firebase/firebase';

const config = {
    apiKey: "AIzaSyBg3EGhVIm9nXwIU3kAz0Ym3-dlLubd-ec",
    authDomain: "nermal-web-application.firebaseapp.com",
    databaseURL: "https://nermal-web-application.firebaseio.com",
    projectId: "nermal-web-application",
    storageBucket: "nermal-web-application.appspot.com",
    messagingSenderId: "46460352845"
  };
 const fire = firebase.initializeApp(config);
export default fire;