function playAudio(audioElem, prevAudioElem = undefined) {
  if (prevAudioElem) {
    prevAudioElem.pause();
    prevAudioElem.currentTime = 0;
  }
  if (audioElem[0]) {
    audioElem[0].play();
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
    const audioElem = $('.animal.present > audio');
    playAudio(audioElem);
  });
  
  Reveal.addEventListener('slidechanged', function (event) {
    const audioElem = $('.animal.present > audio');
    const prevAudio = $(event.previousSlide).find('audio');

    playAudio(audioElem, prevAudio[0]);
  });
});
