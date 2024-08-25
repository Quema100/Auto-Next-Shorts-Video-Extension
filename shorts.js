const auto = () => {
    if (!window.location.href.startsWith("https://www.youtube.com/shorts/")) return
    for (let i = 0; i < document.getElementsByTagName("video").length; i++) {
        const video = document.getElementsByTagName('video')[i];
        const slider = document.querySelector("ytd-scrubber > desktop-shorts-player-controls > div > yt-progress-bar > div[role='slider']");
        const ad = document.querySelector('div[class="badge-shape-wiz__text"]')
        
        console.log('warking')
        if(ad){
            if(ad.textContent === "스폰서" || "Sponsored"){
                console.log("adSkip");
                ad.remove()
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

        if(slider){
            if (Number.isFinite(video.duration)) {
                console.log(video.currentTime , video.duration)
                if(video.currentTime >= video.duration-.3){
                    console.log("Next");
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
        }
    }
};

window.onload = auto;

setInterval(()=>{auto()},500)