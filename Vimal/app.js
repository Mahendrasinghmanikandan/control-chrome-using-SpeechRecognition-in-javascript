const btn=document.querySelector('.talk');
const content=document.querySelector('.content');

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();



recognition.onstart=function(){

	console.log("done");
}

recognition.onresult=function(event)
{
  
  const transcript= event.results[0][0].transcript;

  content.textContent=transcript;
  
  readOutLoud(transcript);
}

btn.addEventListener('click',()=>{
recognition.start();
});

function readOutLoud(message){
	
	const speech = new SpeechSynthesisUtterance();

 //  // Set the text and voice attributes.
	speech.text = message;
	speech.volume = 1;
	speech.rate = 1;
	speech.pitch = 1;
  
	window.speechSynthesis.speak(speech);

	// alert(message);

	document.getElementById('jack').value=message;

	switch(message){

		case "reload":        
  
	
          location.reload();
          break;

        case "open":
          window.open("http://www.youtube.com");
          break;

          case "mail":
          window.open("http://www.gmail.com");
          break;

          case "print":
          window.print();
          break;

         case "jokes":
         
    speech.text = "My daughter received this e-mail from a prospective student prior to the start of the semester: “Dear Professor, I won’t be able to come to any of your classes or meet for any of the tests. Is this a problem?”";
	speech.volume = 1;
	speech.rate = 1;
	speech.pitch = 1;
  
	window.speechSynthesis.speak(speech);

         break; 

         default:
         
    speech.text = "I con't understand your language sorry click the Tab to speack button sepeak correctly";
	speech.volume = 1;
	speech.rate = 1;
	speech.pitch = 1;
  
	window.speechSynthesis.speak(speech);

         break;


	}
	// if(message==="reload"){
	// 	
	// 		}
	
}