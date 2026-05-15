document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("loader");
    const mainScene = document.getElementById("mainScene");
    const startButton = document.getElementById("startGameBtn");
    const gameMenu = document.getElementById("gameMenu");
    const navLinks = document.querySelectorAll(".top-menu__link");

    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            if (link.classList.contains("is-active")) {
                e.preventDefault();
            }
        });
    });

    setTimeout(() => {
        if (loader) {
            loader.classList.add("loader--hidden");
        }

        if (mainScene) {
            mainScene.classList.remove("scene--hidden");
        }

        if (startButton) {
            requestAnimationFrame(() => {
                startButton.classList.add("is-visible");
            });
        }
    }, 1000);

    if (startButton) {
        startButton.addEventListener("click", () => {
            if (startButton.classList.contains("is-started")) {
                return;
            }

            startButton.classList.add("is-started");
            startButton.innerHTML = '<span class="start-btn__text">Starting game...</span>';

            setTimeout(() => {
                startButton.classList.add("start-btn--hidden");
                if (gameMenu) {
                    gameMenu.classList.add("is-visible");
                }
            }, 900);
        });
    }

    const retroOptions = document.querySelectorAll(".retro-option");
    
    retroOptions.forEach((option) => {
        option.addEventListener("click", (e) => {
            const category = option.getAttribute("data-category");
            handleMarketSelection(category);
        });

        option.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                const category = option.getAttribute("data-category");
                handleMarketSelection(category);
            }
        });
    });

    function handleMarketSelection(category) {
        console.log(`Selected market category: ${category}`);
    }
});

