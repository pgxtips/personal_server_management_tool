$(function(){

    $('#side-button-system').on("click", function(e){
        e.preventDefault();
        $('body').addClass("fade-out");
        setTimeout(() => {
            window.location.href = "/system";
        }, 100); // match the CSS transition duration
    })

    $('#side-button-docker').on("click", function(e){
        e.preventDefault();
        $('body').addClass("fade-out");
        setTimeout(() => {
            window.location.href = "/docker";
        }, 100); // match the CSS transition duration
    })

    $('#side-button-firewall').on("click", function(e){
        e.preventDefault();
        $('body').addClass("fade-out");
        setTimeout(() => {
            window.location.href = "/firewall";
        }, 100); // match the CSS transition duration
    })

    $('#side-button-projects').on("click", function(e){
        e.preventDefault();
        $('body').addClass("fade-out");
        setTimeout(() => {
            window.location.href = "/projects";
        }, 100); // match the CSS transition duration
    })

})
