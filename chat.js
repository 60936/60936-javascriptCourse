//const Fuse = require('fuse.js');\
const inputElement = document.getElementById("text_a");
  const answerElement = document.getElementById("answer");

// >-1 means any character after accepted, "i " must be only I in a sentence, "small caps", big caps undetectable
function question() {
	//const inputText = document.getElementById("text_a").value.trim();
	const inputText = inputElement.value;
  	if(inputText === "") { 
	document.getElementById("answer").innerHTML="Your input is blank";}
else if(inputText.toLowerCase().indexOf("thank you")>-1){
			document.getElementById("answer").innerHTML="You are welcome.不用客气。";}

else if(inputText.toLowerCase().indexOf("add user")>-1&&inputText.toLowerCase().indexOf("github")>-1){document.getElementById("answer").innerHTML=`git config --global user.email "name@email.com<br>git config --global user.name "webdev"<br>git commit -m "version 1"`;}
else if(inputText.toLowerCase().indexOf("add repo")>-1&&inputText.toLowerCase().indexOf("github")>-1){document.getElementById("answer").innerHTML=`remote name, 'origin' <br> remote URL, https://github.com/KeenGWatanabe/repo.git`;}

else if(inputText.toLowerCase().indexOf("add repo")>-1&&inputText.toLowerCase().indexOf("github")>-1&&inputText.toLowerCase().indexOf("eg")>-1){document.getElementById("answer").innerHTML=`git remote add origin https://github.com/KeengWatanabe/repo.git <br>git remote -v<br>will verify new remote as below; <br>origin https://github.com/KeengWatanable/repo.git (fetch)<br>origin https://github.com/KeengWatanable/repo.git (push)`;}

else if(inputText.toLowerCase().indexOf("pull repo")>-1&&inputText.toLowerCase().indexOf("github")>-1&&inputText.toLowerCase().indexOf("eg")>-1){document.getElementById("answer").innerHTML=`git clone https://github.com/KeengWatanabe/repo.git <br>clone diff name:<br>git clone https://github.com/KeengWatanable/repo.git repo1.git`;}

else if(inputText.toLowerCase().indexOf("push repo")>-1&&inputText.toLowerCase().indexOf("github")>-1&&inputText.toLowerCase().indexOf("eg")>-1){document.getElementById("answer").innerHTML=`git push https://github.com/KeengWatanabe/repo.git `;}
else {
		answerElement.innerHTML = `I do not understand your input '${inputText}', perhaps you could click our "topics" button above or check your spelling.<br>Or email us what was your question for us to update an appropriate response.<br><a href="mailto:tonboswimmers@gmail.com?&subject=Lifeguard%20ChatBot%20Enquiry&body=Thank%20you%20for%20your%20email%20to%20Tonboswimmers", target="_blank">email</a>`;
		      
	}
}
document.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    lky(); // Call the function to handle form submission
  });