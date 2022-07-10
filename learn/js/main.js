function readPage() {
    const content = document.getElementById("tutorialArea").innerText;
    //read the page using the tts google in the browser
    if ( 'speechSynthesis' in window ) {
      const synth = window.speechSynthesis;
      const utterThis = new SpeechSynthesisUtterance(content);
      synth.speak(utterThis);
    }
}