document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll("button");
    const clickSound = new Audio('src/sounds/click-sound.mp3');
    let clickCount = 0;
    let maxClicks = getRandomMaxClicks();
    let angryCount = 0;

    function getRandomMaxClicks() {
        return Math.floor(Math.random() * 9) + 3; // Random number between 3 and 25
    }

    console.log(`Max clicks: ${maxClicks}`);

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            clickSound.play();
        });
    });

    const randomButton = document.querySelector("#randomBtn");
    randomButton.addEventListener("click", () => {
        clickCount++;
        console.log(`noch ${maxClicks - clickCount} verbleibende Klicks`);
        if (clickCount >= maxClicks) {
            randomButton.classList.add("angry");
            randomButton.textContent = "Wütend! 😡";
            angryCount++;
            setTimeout(() => {
                randomButton.classList.remove("angry");
                randomButton.textContent = "Splash Effekt! 💦";
                clickCount = 0;
                maxClicks = getRandomMaxClicks();
                console.log(`Max clicks: ${maxClicks}`);
                if (angryCount >= 3) {
                    window.location.href = "easteregg.html";
                }
            }, 2000);
        } else {
            // New click animation
            randomButton.style.transform = "scale(1.1)";
            setTimeout(() => {
                randomButton.style.transform = "scale(1)";
            }, 200);
        }
    });

    document.getElementById('randomBtn').addEventListener('click', function() {
        var audio = document.getElementById('confetti-sound');
        audio.play();
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    });

    const aboutButton = document.querySelector("#aboutBtn");
    aboutButton.addEventListener("click", () => {
        clickSound.play();
        setTimeout(() => {
            window.location.href = "about.html";
        }, 500);
        
    });

    const teacherButton = document.querySelector("#teacherBtn");
    teacherButton.addEventListener("click", () => {
        clickSound.play();
        setTimeout(() => {
            window.location.href = "fuerlehrer.html";
        }, 500);
        
    });
   
});
