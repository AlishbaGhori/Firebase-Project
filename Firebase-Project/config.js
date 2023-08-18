<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCfXWQTD9qCaRdRa-NSJYnErdfKSHVne5g",
    authDomain: "fir-project-9c398.firebaseapp.com",
    projectId: "fir-project-9c398",
    storageBucket: "fir-project-9c398.appspot.com",
    messagingSenderId: "602766349486",
    appId: "1:602766349486:web:5f13fed282fd6f12dc893f",
    measurementId: "G-17P564QMBQ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>