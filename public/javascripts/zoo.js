
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
        transition: Reveal.getQueryHash().transition || 'default',
        autoSlide: 12000
      });


    // Initialized lettering.js

    $('.letters').lettering();

    $('.letters_2').lettering();

    Reveal.addEventListener( 'slidechanged', function( event ) {
      const audioElem = $('.animal.present > audio');
      const prevAudio = event.previousSlide.querySelector('audio');
      
      if (prevAudio) {
        prevAudio.pause();
        prevAudio.currentTime = 0;
      }
      if (audioElem[0]) {
        audioElem[0].play();
      }
    });
});
