

//#region 
        // Your CSV data converted into a JavaScript array of objects
// Your CSV data converted into a JavaScript array of objects
const data = [
    { FR: "Passionné d'e-commerce !", ENG: "UX/UI Designer!", ESP: "¡Diseñador UX/UI!" },
    { FR: "Développeur front !", ENG: "E-commerce Enthusiast!", ESP: "¡Apasionado del comercio electrónico!" },
    { FR: "Étudiant en 3ème année !", ENG: "Front-end Developer!", ESP: "¡Desarrollador front-end!" },
    { FR: "Enthousiaste !", ENG: "3rd Year Student!", ESP: "¡Estudiante de tercer año!" },
    { FR: "Toujours disponible !", ENG: "Enthusiastic!", ESP: "¡Entusiasta!" },
    { FR: "Développeur de stratégie en ligne !", ENG: "Always Available!", ESP: "¡Siempre disponible!" },
    { FR: "Marketing en ligne !", ENG: "Online Strategy Developer!", ESP: "¡Desarrollador de estrategias en línea!" },
    { FR: "Bachelor de Commerce !", ENG: "Online Marketing!", ESP: "¡Marketing en línea!" },
    { FR: "UX/UI designer !", ENG: "Bachelor of Commerce!", ESP: "¡Licenciado en Comercio!" }
];



// Function to select a random text based on the language
function displayRandomText() {
    const languageCode = getLanguageFromURL(); // 'fr', 'eng', or 'esp'
    const language = languageCode.toUpperCase(); // Convert to uppercase to match data keys: 'FR', 'ENG', 'ESP'
    const randomIndex = Math.floor(Math.random() * data.length);
    const text = data[randomIndex][language] || "Language Not Found";
    document.getElementById("yellowText").innerText = text;
}

// Call the function when the window loads
window.onload = displayRandomText;

//#endregion


//#region loader
document.addEventListener("DOMContentLoaded", function() {
    var loadDuration = 2800; // Total duration for the loader to display
    var fadeDuration = 500;  // Duration of the fade effect in milliseconds
    var maxStep = 20;        // Maximum step size for progress increment

    var mainContent = document.querySelector(".main-content");
    var loader = document.querySelector('.loader');
    var progressBar = document.getElementById('progressBar');

    // Check if the language has changed
    var urlParams = new URLSearchParams(window.location.search);
    var languageChanged = urlParams.get('langChanged') === 'true';

    // Reset loaderPlayed flag if the language has changed
    var loaderPlayed = languageChanged ? false : localStorage.getItem('loaderPlayed') === 'true';

    function randomProgress() {
        var progress = 0;
        var interval = setInterval(function() {
            // Calculate a random step size for each update
            var step = Math.random() * maxStep;
            progress += step;

            // Update the progress bar's width
            progressBar.style.width = Math.min(progress, 100) + '%';

            // Check if progress is complete
            if (progress >= 100) {
                clearInterval(interval);
                endLoading();
            }
        }, 200); // Update the progress bar every 200 milliseconds
    }

    function endLoading() {
        loader.classList.add("fade-out");
        setTimeout(function() {
            mainContent.style.display = "flex";
            mainContent.classList.add("fade-in");
            loader.style.display = "none";
            localStorage.setItem('loaderPlayed', 'true');
        }, fadeDuration);
    }

    if (!loaderPlayed) {
        randomProgress();
    } else {
        // If the loader has already played, hide it immediately
        loader.style.display = "none";
        mainContent.style.display = "flex";
        mainContent.classList.add("fade-in");
    }
});

