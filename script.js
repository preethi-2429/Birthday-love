let val = "";

// ❤️ HEARTS
function createHearts() {
    for (let i = 0; i < 25; i++) {
        let heart = document.createElement("div");
        heart.className = "heart";

        let hearts = ["💗","💖","💕","💘"];
        heart.innerText = hearts[Math.floor(Math.random()*hearts.length)];

        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.top = window.innerHeight + "px";

        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 2000);
    }
}

// 🔢 PASSCODE
function press(num){
    val += num;

    let boxes = document.querySelectorAll(".box");

    boxes.forEach((b, i) => {
        b.style.background = i < val.length ? "#F2DDBB" : "transparent";
    });

    if(val === "2429"){
        createHearts();

        document.getElementById("login").style.transform = "scale(1.1)";
        
        setTimeout(() => {
            document.getElementById("login").classList.add("hidden");
            document.getElementById("home").classList.remove("hidden");
        }, 800);
    }

    if(val.length >= 4 && val !== "2429"){
        alert("Wrong Password Cutie💋");
        val = "";
        boxes.forEach(b => b.style.background = "transparent");
    }
                      }
