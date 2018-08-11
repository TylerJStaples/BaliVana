$(document).ready(function(){
    $("#submit").on("click", function(){
        event.preventDefault();
        let knife = {
            name: $("#name").val(),
            maker: $("#maker").val(),
            price: $("#price").val(),
            handle: $("#handle").val(),
            blade: $("#blade").val(),
            weight: $("#weight").val(),
            pivot: $("#pivot").val(),
            pic: "https://imgur.com/nDk1BRL",
        }
        console.log(knife);

        $.post("/submit", knife, function(){
            console.log("Bali posted");
        });
    });
});