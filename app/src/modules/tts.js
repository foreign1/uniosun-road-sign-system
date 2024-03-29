function populateVoiceList(synth, voices) {
    voices = synth.getVoices().sort(function (a, b) {
    const aname = a.name.toUpperCase();
    const bname = b.name.toUpperCase();

    if (aname < bname) {
      return -1;
    } else if (aname == bname) {
      return 0;
    } else {
      return +1;
    }
  });
  return voices
}

function speak(synth, inputTxt, voices) {
  if (synth.speaking) {
    return;
  }

  if (inputTxt !== "") {
    const utterThis = new SpeechSynthesisUtterance(inputTxt);

    utterThis.onend = function (event) {
    };

    utterThis.onerror = function (event) {
    };

    utterThis.voice = voices[0];
    utterThis.pitch = 1;
    utterThis.rate = 1;
    synth.speak(utterThis);
  }
}

export const speakDestination = (inputTxt) => {
  const synth = window.speechSynthesis;
  let voices = [];
  let counter = 0;
  
  voices = populateVoiceList(synth, voices)
  
  var theinterval = setInterval(() => {
    speak(synth, inputTxt[counter], voices)
    counter++;
    
    if ( counter >= inputTxt.length ) {
      clearInterval(theinterval)
    }

  }, 2500)
}