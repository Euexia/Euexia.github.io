// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getFirestore, doc, setDoc, addDoc, collection, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeW5RoRYfPcq0IMsJy78vtvrJvIVzk4YA",
  authDomain: "portfolio-minecraft.firebaseapp.com",
  projectId: "portfolio-minecraft",
  storageBucket: "portfolio-minecraft.appspot.com",
  messagingSenderId: "545385616559",
  appId: "1:545385616559:web:394e9cdc06e19a8d73b05a",
  measurementId: "G-F93TXXTXLN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
// Make sure this code runs after the DOM is loaded
document.getElementById('submitBtn').addEventListener('click', function() {
  const userName = document.querySelector('input[name="userName"]').value;
  const userObject = document.querySelector('input[name="userObject"]').value;
  const userMessage = document.querySelector('textarea[name="userMessage"]').value;

  if (userName && userObject && userMessage) {

  addDoc(collection(db, "contacts"), {
      name: userName,
      object: userObject,
      message: userMessage,
      timestamp: serverTimestamp() 
  })
  .then(() => {
      console.log("Document successfully written!");

        // Display confirmation message
        document.getElementById('confirmation_text').style.display = 'block';

        // Optionally, hide the confirmation message after a few seconds
        setTimeout(function() {
          document.getElementById('confirmation_text').style.display = 'none';

        }, 3000); // Hides after 3 seconds
        
    })
  .catch((error) => {
      console.error("Error writing document: ", error);
  });

} else {
  // Ajouter un message d"erreur si tout les fiels ne sont pas fills
}
});