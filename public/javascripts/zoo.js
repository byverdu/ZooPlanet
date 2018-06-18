function playAudio(audioSelector, prevAudioElem = undefined) {
  const audioElem = document.querySelector(audioSelector);    
  
  if (prevAudioElem) {
    prevAudioElem.pause();
    prevAudioElem.currentTime = 0;
  }
  if (audioElem) {
    audioElem.play();
  }
}

$(document).ready(function () {

  // Loading page

  $(window).load(function () {

    $(".loader").fadeOut("slow");

  });



  console.log('Document Loaded');

  // Reveal.js settings

  Reveal.initialize({
    width: 1200,
	  height: 700,
    controls: true,
    progress: true,
    history: true,
    center: true,
    transition: Reveal.getQueryHash().transition || 'default',
    autoSlide: 12000,
    loop: true
  });


  // Initialized lettering.js

  $('.letters').lettering();

  $('.letters_2').lettering();

  Reveal.addEventListener('ready', function (event) {
    playAudio('.animal.present > audio');
  });
  
  Reveal.addEventListener('slidechanged', function (event) {
    const prevAudio = event.previousSlide.querySelector('audio');

    playAudio('.animal.present > audio', prevAudio);
  });
});
