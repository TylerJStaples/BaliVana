$(document).ready(()=>{
    $("#redirect").on("click", ()=>{
        event.preventDefault();
        alert("You've been redirected to the same fucking page");
    });
});