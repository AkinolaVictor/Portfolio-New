const firebase =  require('firebase')
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDoj0TNdBjWkgMpJ0up9F6tN1fLC2NUCVY",
    authDomain: "portfolio-e3669.firebaseapp.com",
    databaseURL: "https://portfolio-e3669-default-rtdb.firebaseio.com",
    projectId: "portfolio-e3669",
    storageBucket: "portfolio-e3669.appspot.com",
    messagingSenderId: "765240386663",
    appId: "1:765240386663:web:0673d12f00a7850132e0c2",
    measurementId: "G-RHG75XZB06"
};

firebase.initializeApp(firebaseConfig);

module.exports = firebase