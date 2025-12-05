let blinkInterval;

function startBlink() {
    if (!blinkInterval) {
        blinkInterval = setInterval(() => {
            let text = document.getElementById("blinkText");
            text.style.visibility = 
                text.style.visibility === "hidden" ? "visible" : "hidden";
        }, 500);
    }
}

function stopBlink() {
    clearInterval(blinkInterval);
    blinkInterval = null;
    document.getElementById("blinkText").style.visibility = "visible";
}
