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

else if (inputText.toLowerCase().indexOf("node06")>-1) {
	window.open(href="https://youtu.be/k7JALy_dmSA",'readFile','resizable,height=300,width=500');
}
else if (inputText.toLowerCase().indexOf("node07")>-1) {
	window.open(href="https://youtu.be/dVM3B-kufUI",'readFile async','resizable,height=300,width=500');
}
else if (inputText.toLowerCase().indexOf("node08")>-1) {
	window.open(href="https://youtu.be/MIynKxKOpv0",'async workings','resizable,height=300,width=500');
}
else if (inputText.toLowerCase().indexOf("node09")>-1) {
	window.open(href="https://youtu.be/2t6l0KzF3fQ",'http server','resizable,height=300,width=500');
}
else if (inputText.toLowerCase().indexOf("node10")>-1) {
	window.open(href="https://youtu.be/M-6myKNq5qY",'http pages','resizable,height=300,width=500');
}
else if (inputText.toLowerCase().indexOf("node11")>-1) {
	window.open(href="https://youtu.be/ZaDsr7MxFgY",'npm and json','resizable,height=300,width=500');
}
else if (inputText.toLowerCase().indexOf("node12")>-1) {
	window.open(href="https://youtu.be/meOBBrtT_EA",'npm dependencies','resizable,height=300,width=500');
}
else if (inputText.toLowerCase().indexOf("node13")>-1) {
	window.open(href="https://youtu.be/0VG7aMoQIdU",'nodemon','resizable,height=300,width=500');
}
else if (inputText.toLowerCase().indexOf("node14")>-1) {
	window.open(href="https://youtu.be/vuPggFuuqB0",'uninstall','resizable,height=300,width=500');
}
else if (inputText.toLowerCase().indexOf("node15")>-1) {
	window.open(href="https://youtu.be/eamvG_NerIA",'eventLoop','resizable,height=300,width=500');
}
else if (inputText.toLowerCase().indexOf("node16")>-1) {
	window.open(href="https://youtu.be/91zxFVTxcq8",'eventLoop','resizable,height=300,width=500');
}
else if (inputText.toLowerCase().indexOf("node17")>-1) {
	window.open(href="https://youtu.be/Ydu_erLQhGQ",'timeOut','resizable,height=300,width=500');
}
else if (inputText.toLowerCase().indexOf("node18")>-1) {
	window.open(href="https://youtu.be/D9w2U3FyH8g",'setInterval','resizable,height=300,width=500');
}
else if (inputText.toLowerCase().indexOf("node19")>-1) {
	window.open(href="https://youtu.be/XF4_9y2W5yk",'server','resizable,height=300,width=500');
}
else if (inputText.toLowerCase().indexOf("node20")>-1) {
	window.open(href="https://youtu.be/2ky5IYzIuTU",'async','resizable,height=300,width=500');
}
else if (inputText.toLowerCase().indexOf("node21")>-1) {
	window.open(href="https://youtu.be/7xzvfJ99O58",'promise','resizable,height=300,width=500');
}
else if (inputText.toLowerCase().indexOf("node22")>-1) {
	window.open(href="https://youtu.be/paVxxjMKqNo",'await','resizable,height=300,width=500');
}
else if (inputText.toLowerCase().indexOf("node23")>-1) {
	window.open(href="https://youtu.be/5qInVVx9daY",'event','resizable,height=300,width=500');
}
else if (inputText.toLowerCase().indexOf("node24")>-1) {
	window.open(href="https://youtu.be/qXk9bCbSEoE",'event','resizable,height=300,width=500');
}
else if (inputText.toLowerCase().indexOf("node25")>-1) {
	window.open(href="https://youtu.be/pPG1rydtJk4",'event','resizable,height=300,width=500');
}
else if (inputText.toLowerCase().indexOf("node26")>-1) {
	window.open(href="https://youtu.be/6-C-nyjnSqE",'event','resizable,height=300,width=500');
}
else if (inputText.toLowerCase().indexOf("node27")>-1) {
	window.open(href="https://youtu.be/wz9GBdj4ltQ",'stream','resizable,height=300,width=500');
}
else if (inputText.toLowerCase().indexOf("node28")>-1) {
	window.open(href="https://youtu.be/5K-gOeQb-J8",'stream','resizable,height=300,width=500');
}
else if (inputText.toLowerCase().indexOf("node29")>-1) {
	window.open(href="https://youtu.be/fNrWrb0w_T8",'server','resizable,height=300,width=500');
}
else if (inputText.toLowerCase().indexOf("node30")>-1) {
	window.open(href="https://youtu.be/PPeboP-35Ws",'server','resizable,height=300,width=500');
}
else if (inputText.toLowerCase().indexOf("node31")>-1) {
	window.open(href="https://youtu.be/kQDbyMEtPWY",'server','resizable,height=300,width=500');
}
else if (inputText.toLowerCase().indexOf("node32")>-1) {
	window.open(href="https://youtu.be/6IDL0fyiKwQ",'http','resizable,height=300,width=500');
}
else if (inputText.toLowerCase().indexOf("node33")>-1) {
	window.open(href="https://youtu.be/7CeTb4AW5tk",'http','resizable,height=300,width=500');
}
else if (inputText.toLowerCase().indexOf("node34")>-1) {
	window.open(href="https://youtu.be/eG102G69Nqk",'readFile','resizable,height=300,width=500');
}
else if (inputText.toLowerCase().indexOf("node35")>-1) {
	window.open(href="https://youtu.be/8oc3RIB_Y20",'request','resizable,height=300,width=500');
}
else if (inputText.toLowerCase().indexOf("node36")>-1) {
	window.open(href="https://youtu.be/pT0dsaXQDUY",'express','resizable,height=300,width=500');
}
else if (inputText.toLowerCase().indexOf("node37")>-1) {
	window.open(href="https://youtu.be/Nvqagj2QeG4",'static','resizable,height=300,width=500');
}
else if (inputText.toLowerCase().indexOf("node38")>-1) {
	window.open(href="https://youtu.be/IueW_MrBRxc",'static','resizable,height=300,width=500');
}
else if (inputText.toLowerCase().indexOf("node39")>-1) {
	window.open(href="https://youtu.be/Oc_WVHTY6SM",'api','resizable,height=300,width=500');
}
else if (inputText.toLowerCase().indexOf("node40")>-1) {
	window.open(href="https://youtu.be/5qtLuV0Aahw",'api','resizable,height=300,width=500');
}
else if (inputText.toLowerCase().indexOf("node41")>-1) {
	window.open(href="https://youtu.be/RtYJIrRRtYc",'api','resizable,height=300,width=500');
}
else if (inputText.toLowerCase().indexOf("node42")>-1) {
	window.open(href="https://youtu.be/Frp52dzIbHI",'api','resizable,height=300,width=500');
}
else if (inputText.toLowerCase().indexOf("node43")>-1) {
	window.open(href="https://youtu.be/vL3ZpEiF3vY",'api','resizable,height=300,width=500');
}
else if (inputText.toLowerCase().indexOf("node44")>-1) {
	window.open(href="https://youtu.be/Ig4E9MIITks",'api','resizable,height=300,width=500');
}
else if (inputText.toLowerCase().indexOf("node45")>-1) {
	window.open(href="https://youtu.be/dDIxok_RoOU",'api','resizable,height=300,width=500');
}
else if (inputText.toLowerCase().indexOf("node46")>-1) {
	window.open(href="https://youtu.be/VH0Q_DXaZa0",'api','resizable,height=300,width=500');
}
else if (inputText.toLowerCase().indexOf("node47")>-1) {
	window.open(href="https://youtu.be/m4Gn7qTQMKY",'api','resizable,height=300,width=500');
}
else if (inputText.toLowerCase().indexOf("node48")>-1) {
	window.open(href="https://youtu.be/II-5m4_HxRk",'api','resizable,height=300,width=500');
}
else if (inputText.toLowerCase().indexOf("node49")>-1) {
	window.open(href="https://youtu.be/jWztlAoTJDk",'api','resizable,height=300,width=500');
}
else if (inputText.toLowerCase().indexOf("node50")>-1) {
	window.open(href="https://youtu.be/oZZuKqIHo0Q",'api','resizable,height=300,width=500');
}




else {
		answerElement.innerHTML = `I do not understand your input '${inputText}', perhaps you could click our "topics" button above or check your spelling.<br>Or email us what was your question for us to update an appropriate response.<br><a href="mailto:tonboswimmers@gmail.com?&subject=Lifeguard%20ChatBot%20Enquiry&body=Thank%20you%20for%20your%20email%20to%20Tonboswimmers", target="_blank">email</a>`;
		      
	}
}
document.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    lky(); // Call the function to handle form submission
  });