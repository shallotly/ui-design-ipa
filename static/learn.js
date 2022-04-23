$(document).ready(function () {
    let allPlayBtns = $(".play");
    allPlayBtns.each(function(i, oneBtn) {
        oneBtn.addEventListener("click", function handleClick(e) {
            const audioId = e.target.attributes["data-id"].nodeValue;
            const correspondingAudio = $("#" + audioId)[0];
            correspondingAudio.play();
        });
    });

    let allPracticeSpoilerBtns = $(".practice-spoiler");
    allPracticeSpoilerBtns.each(function(i, oneBtn) {
        oneBtn.addEventListener("click", function handleClick(e) {
            const spoilerId = e.target.id;
            const spoilerAnswer = $("#practice-answer-" + spoilerId);
            console.log(spoilerAnswer);

            $(this).css("display", "none");
            spoilerAnswer.css("display", "inline-block");
        });
    });

});