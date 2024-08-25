const auto = () => {
    if (!window.location.href.startsWith("https://www.youtube.com/shorts/")) return

    const ad = document.querySelector('div.badge-shape-wiz__text');
    const adstyle = document.querySelector('.ytd-in-feed-ad-layout-renderer');

    if(ad && adstyle){
        if(ad.textContent === "스폰서" || ad.textContent === "Sponsored"){
            console.log("adSkip");
            ad.remove();
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

    for (let i = 0; i < document.getElementsByTagName("video").length; i++) {
        const video = document.getElementsByTagName('video')[i];
        const slider = document.querySelector("ytd-scrubber > desktop-shorts-player-controls > div > yt-progress-bar > div[role='slider']");
        
        console.log('warking')

        if(slider){
            if (Number.isFinite(video.duration)) {
                if(video.currentTime >= video.duration-.7){
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

setInterval(()=>{auto()},700)