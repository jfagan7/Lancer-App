 // Initialize Firebase
 var config = {
     apiKey: "AIzaSyA36McYmAEZ2KHNvMncBPz-l55m6XIQfX8",
     authDomain: "lancer-c8a6d.firebaseapp.com",
     databaseURL: "https://lancer-c8a6d.firebaseio.com",
     projectId: "lancer-c8a6d",
     storageBucket: "lancer-c8a6d.appspot.com",
     messagingSenderId: "616719345754"
 };
 firebase.initializeApp(config);

 let signInBtn = document.getElementById('signInBtn');
 let signUpBtn = document.getElementById('signUpBtn');

 signUpBtn.addEventListener('click', () => {
     let emailField = document.getElementById('email').value;
     let passwordField = document.getElementById('password').value;

     firebase.auth().createUserWithEmailAndPassword(emailField, passwordField).catch((error) => {
         if (error != null) {
            console.log(error.message);
            return;
         }
         alert('User created');
     })
 });
 signUpBtn.addEventListener('click', () => {
     let emailField = document.getElementById('email').value;
     let passwordField = document.getElementById('password').value;
 });