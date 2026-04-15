// 🔐 PASSCODE
let val = "";

// 🔁 NAVIGATION
function goTo(page){
    document.querySelectorAll(".page").forEach(p => p.classList.add("hidden"));
    document.getElementById(page).classList.remove("hidden");
}

// 🔢 DIAL PAD
function press(num){
    val += num;

    let boxes = document.querySelectorAll(".box");

    boxes.forEach((b, i) => {
        b.style.background = i < val.length ? "#F2DDBB" : "transparent";
    });

    if(val === "2429"){
        goTo("home");
    }

    if(val.length >= 4 && val !== "2429"){
        alert("Wrong password cutie😘");
        val = "";
        boxes.forEach(b => b.style.background = "transparent");
    }
}

// 🎁 OPEN GIFT
function openGift(n){
    goTo("giftPage");

    let content = document.getElementById("giftContent");

    // 🎂 GIFT 1 → CAKE WITH PHOTO + AGE
    if(n === 1){
        content.innerHTML = `
        <h2>Happppiesstttt birthday thangamey🥹🧿🌹🤌🏼</h2>

        <div class="cakeLayout">

            <!-- LEFT PHOTO -->
            <div class="leftPhoto">
                <img src="your-photo.jpg" alt="photo">
            </div>

            <!-- RIGHT CAKE -->
            <div class="rightCake">

                <div class="ageBox">
                    <p>Enter your age 🎂</p>
                    <input type="number" id="ageInput" placeholder="Enter age">
                    <button onclick="generateCake()">Create Cake</button>
                </div>

                <div id="cakeArea"></div>

            </div>

        </div>
        `;
    }

    // 💌 GIFT 2 → PARAGRAPH
    else if(n === 2){
        content.innerHTML = `
        <p style="line-height:1.5;">
        Hellloooo My Dear Rasamalaiii🥹🤍 Happppyyy happpyyy 19th birthday thangam. May this year bring all the blessings and happiness to you. Epayume ne happy ah irukanum en kuda irukanum. Andddd unga sirippuku na adimai so sirichune sandhosama iru ma🫂❤️. Ne un vazhkaila edhu ketalum kedaikanum. Im soooo soooo proud of you my champ. Ne expect pannadhu elame un life la kedaikum. Unaku pudichadhu elame vangitharuven.Na panna mistakes lam...ena panna poren nu therila..ana una seri paniruven epdiyachu.Enaya vitutu poyradha hrithik , Enaku unna vitta yarum ila da🥺. Aprmmmm Unna romba romba romba romba romba pudikum💗🫂. Kalyanam panikanum nu aasa padren😗. I LOVE YOU SO SO SO SO MUCH champ🌹 Once againnn Happpiestt birthday😘
        </p>
        `;
    }

    // ⚽ GIFT 3 → MESSI AUDIO
    else if(n === 3){
        content.innerHTML = `
        <p>Someone special has a message for you… 👀⚽</p>
        <p id="subtitle" style="min-height:50px;"></p>

        <audio id="messiAudio" controls>
            <source src="messi-voice.mp3" type="audio/mpeg">
        </audio>

        <button onclick="playMessi()">▶ Play Message</button>
        `;
    }
}

// ▶ MESSI AUDIO + SUBTITLES
function playMessi(){
    let audio = document.getElementById("messiAudio");
    let subtitle = document.getElementById("subtitle");

    audio.play();

    audio.ontimeupdate = () => {
        let t = audio.currentTime;

        if(t < 3) subtitle.innerText = "Hi Hrithik... it's Leo.";
        else if(t < 7) subtitle.innerText = "Happy birthday, from the bottom of my heart.";
        else if(t < 12) subtitle.innerText = "I want to thank you for all the love.";
        else if(t < 17) subtitle.innerText = "I hope you have an amazing day...";
        else if(t < 22) subtitle.innerText = "Sending you a big hug.";
        else subtitle.innerText = "Visca el Barça! ⚽🤍💙";
    };
}

// 🎂 GENERATE CAKE BASED ON AGE
function generateCake(){
    let age = document.getElementById("ageInput").value;
    let cakeArea = document.getElementById("cakeArea");

    if(!age || age <= 0){
        alert("Enter valid age ❤️");
        return;
    }

    let candles = "";

    for(let i=0; i<age; i++){
        candles += `<div class="candle" id="candle${i}">🕯️</div>`;
    }

    cakeArea.innerHTML = `
        <div class="candles">${candles}</div>

        <div class="cake">
            <img src="cake.png" alt="cake">
        </div>

        <button onclick="blowCandles(${age})">Blow Candles 💨</button>
    `;
}

// 💨 BLOW CANDLES
function blowCandles(age){
    for(let i=0; i<age; i++){
        let candle = document.getElementById("candle"+i);

        if(candle){
            candle.classList.add("off");
        }
    }
}
