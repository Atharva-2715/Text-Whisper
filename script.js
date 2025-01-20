let speech = new SpeechSynthesisUtterance();

//to add voices
let voices = [];
let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () =>{
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];
    
    voiceSelect.innerHTML = '';
    voices.forEach((voice,i)=>(voiceSelect.options[i] = new Option (voice.name, i)));
}

voiceSelect.addEventListener("change", ()=>{
    speech.voice = voices[voiceSelect.value];

})

document.querySelector("button").addEventListener("click", ()=>{
    const text = document.querySelector("textarea").value;

    if (text.trim() === "") {
        alert("Please enter some text!");
        return;
    }
    speech.text = text;
    window.speechSynthesis.speak(speech);
});