document.addEventListener("DOMContentLoaded", function() {
    var loadDuration = 2800; 
    var fadeDuration = 500;  
    var maxStep = 20;       
    var mainContent = document.querySelector(".main-content");
    var loader = document.querySelector('.loader');
    var progressBar = document.getElementById('progressBar');

    var urlParams = new URLSearchParams(window.location.search);
    var languageChanged = urlParams.get('langChanged') === 'true';

    var loaderPlayed = languageChanged ? false : localStorage.getItem('loaderPlayed') === 'true';

    function randomProgress() {
        var progress = 0;
        var interval = setInterval(function() {
            var step = Math.random() * maxStep;
            progress += step;

            progressBar.style.width = Math.min(progress, 100) + '%';

            if (progress >= 100) {
                clearInterval(interval);
                endLoading();
            }
        }, 200); 
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
        loader.style.display = "none";
        mainContent.style.display = "flex";
        mainContent.classList.add("fade-in");
    }
});
