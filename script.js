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

       // Call Functionality
        const callBtns = document.querySelectorAll(".call-Btn");
        let historyCard = document.getElementById("history-card");
        for (let callBtn of callBtns) {
            callBtn.addEventListener("click", function () {
                let coinCount = parseInt(document.getElementById("coin-count").innerText);
                let serviceTitle = callBtn.parentNode.parentNode.children[1].innerText;
                let serviceNumber = callBtn.parentNode.parentNode.children[3].innerText;
                
                if (coinCount >= 20) {
                    alert("📞 Calling " + serviceTitle + " " + serviceNumber + " ...");
                    coinCount -= 20;
                    document.getElementById("coin-count").innerText = coinCount;

                    let historyCardTime = new Date().toLocaleTimeString();
                    let div = document.createElement("div");
                    div.innerHTML = `<div class="flex justify-between gap-3 items-center bg-[#fafafa] rounded-lg p-3 mb-3">
                        <div>
                            <h1 class="text-sm font-medium text-[#111111]">${serviceTitle}</h1>
                            <h2 class="text-[#5C5C5C] text-sm font-medium">${serviceNumber}</h2>
                        </div>
                        <div>
                            <h2 class="text-sm font-medium text-[#111111]">${historyCardTime}</h2>
                        </div>
                    </div>`;
                    historyCard.appendChild(div);
                } else {
                    alert("❌ আপনার পর্যাপ্ত কয়েন নেই, কল করতে ন্যূনতম ২০ কয়েন লাগবে!");
                }
            });
        }