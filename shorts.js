const auto = () => {
    setTimeout(() => {
        if (!window.location.href.startsWith("https://www.youtube.com/shorts/")) return auto()
        const currentTime = new Date().toLocaleTimeString();
        const value = document.querySelector("ytd-scrubber > shorts-player-controls > div > div > div > div[aria-valuenow]");
        console.log(`wait - ${currentTime}`);
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
            if (value.getAttribute('aria-valuenow') >= 97) {
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
    }, 930);
};

window.onload = auto;