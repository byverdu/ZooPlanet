
$(document).ready(function() {

// Loading page

$(window).load(function() {
    
    $(".loader").fadeOut("slow");

});



    console.log('Document Loaded');

    // Reveal.js settings

    Reveal.initialize({
        controls: true,
        progress: true,
        history: true,
        center: true,
        transition: Reveal.getQueryHash().transition || 'default'});


    // Initialized lettering.js

    $('.letters').lettering();

    $('.letters_2').lettering();


});
