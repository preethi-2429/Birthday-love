let currentPass = "";
const correctPass = "2429";

function addNum(num) {
    if (currentPass.length < 4) {
        currentPass += num;
        document.getElementById('pass-dots').innerText = "*".repeat(currentPass.length);
    }
    
    if (currentPass.length === 4) {
        if (currentPass === correctPass) {
            document.getElementById('lock-next').classList.remove('hidden');
        } else {
            document.getElementById('wrong-pass-modal').classList.remove('hidden');
            clearPass();
        }
    }
}

function clearPass() {
    currentPass = "";
    document.getElementById('pass-dots').innerText = "____";
}

function closeModal() {
    document.getElementById('wrong-pass-modal').classList.add('hidden');
}

function showPopup() {
    document.getElementById('special-person-modal').classList.remove('hidden');
}

function closeSpecialModal() {
    document.getElementById('special-person-modal').classList.add('hidden');
}

function showScreen(screenId) {
    document.querySelectorAll('.content-box').forEach(s => s.classList.add('hidden'));
    document.getElementById(screenId).classList.remove('hidden');
    
    if(screenId === 'screen-cake') {
        // Reset candle
        document.getElementById('flame').classList.remove('flame-out');
        document.getElementById('wish-text').innerText = "Make a wish and blow the candle";
        document.getElementById('blow-btn').style.display = 'inline-block';
    }

    if(screenId === 'screen-messi') {
        startTypewriter();
    }
}

function blowCandle() {
    document.getElementById('flame').classList.add('flame-out');
    document.getElementById('wish-text').innerText = "Yay! May all your wishes come true Thangame! ❤️";
    document.getElementById('blow-btn').style.display = 'none';
}

function startTypewriter() {
    const text = "Hi Hrithik... it's Leo. Happy birthday, from the bottom of my heart. I want to thank you for all the love. I hope you have an amazing day... Sending you a big hug. Visca el Barça!💙❤️";
    let i = 0;
    const speed = 50;
    document.getElementById("typewriter").innerHTML = "";
    function type() {
        if (i < text.length) {
            document.getElementById("typewriter").innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

function playMessi() {
    document.getElementById('messi-audio').play();
          }
