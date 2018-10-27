var memeArr = ["Donald Trump", "Rick James", "Rick and Morty", "Futurama", "Spongebob", "Family Guy", "Southpark"];
function renderButtons() {

    $("#button-view").empty();
    for (i=0; i < memeArr.length; i++) {
        var memeButton = $("<button>");
        memeButton.addClass("game-btn-primary");
        memeButton.attr("data-name", gameArr[i]);
        memeButton.text(gameArr[i]);
        $("#button-view").append(gameButton);
        console.log(memeArr[i])
    };
}
renderButtons();
$("#meme-submit").on("click", function(event) {
    event.preventDefault();
    var game = $("#meme-input").val()
    memeArr.push(game);
    renderButtons();
    console.log(memeArr);
});


$(document).on("click", ".images", function () {
var state = $(this).attr('data-state');
if (state == 'still') {
    $(this).attr('src', $(this).data('animate'));
    $(this).attr('data-state', 'animate');
} else {
    $(this).attr('src', $(this).data('still'));
    $(this).attr('data-state', 'still');
}

});
