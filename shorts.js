const auto = () => {
    const currentTime = new Date().toLocaleTimeString();
    console.log(`wait - ${currentTime}`);
    setTimeout(() => {
        if (!window.location.href.startsWith("https://www.youtube.com/shorts/")) return
        const value = document.querySelector("ytd-scrubber > shorts-player-controls > div > div > div > div[aria-valuenow]");
        console.log(value);
        if (value == null || value == undefined) {
            console.log("null");
            const Ko = document.querySelector("button[aria-label='다음 동영상']");
            const En = document.querySelector("button[aria-label='Next video']");
            if (Ko) {
                Ko.click();
            }
            if (En) {
                En.click();
            }
        } else {
            console.log("here");
            if (value.getAttribute('aria-valuenow') >= 96) {
                const Ko = document.querySelector("button[aria-label='다음 동영상']");
                const En = document.querySelector("button[aria-label='Next video']");
                if (Ko) {
                    Ko.click();
                }
                if (En) {
                    En.click();
                }
            }
        }
        auto();
    }, 950);
};

window.onload = auto;