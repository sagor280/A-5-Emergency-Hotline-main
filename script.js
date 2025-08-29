  // Heart Count
        const heartClick = document.querySelectorAll(".heart-Click");
        let Cnt = 1;
        for (let heart of heartClick) {
            heart.addEventListener("click", function () {
                const heartCount = document.getElementById("heart-count");
                heartCount.innerText = Cnt;
                Cnt++;
            });
        }

       