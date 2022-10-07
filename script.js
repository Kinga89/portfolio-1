const video = document.querySelectorAll("video");

for (let i = 0; i < video.length; i++){
    video[i].addEventListener("mouseenter",
        function (element) {
        video[i].play()
        })
        video[i].addEventListener("mouseout",
        function (element) {
        video[i].pause()
        })
}