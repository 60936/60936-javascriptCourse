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

else if (inputText.toLowerCase().indexOf("express")>-1||inputText.toLowerCase().indexOf("express 5")>-1) {
	window.open(href="https://expressjs.com/en/5x/api.html#express",'express','resizable,height=300,width=500');
}
else if (inputText.toLowerCase().indexOf("login")>-1&&inputText.toLowerCase().indexOf("page")>-1) {
	window.open(href="https://drive.google.com/file/d/1-8fe1uQdR_10x4RtDy7350sIMNG3ONLQ/view?usp=drive_link",'login','resizable,height=300,width=500');
}
else if (inputText.toLowerCase().indexOf("node01")>-1) {
	window.open(href="https://youtu.be/wRrZyX8Sf9M?si=nDtQmv4X1HuPwaRr",'readFile','resizable,height=300,width=500');
}
else if (inputText.toLowerCase().indexOf("node02")>-1) {
	window.open(href="https://youtu.be/CPVpLJepNkY?si=hM-5OITfFRpL8w0h",'readFile','resizable,height=300,width=500');
}
else if (inputText.toLowerCase().indexOf("node03")>-1) {
	window.open(href="https://youtu.be/BvBKXEliIWA?si=W-nGo-K087r93e5A",'readFile','resizable,height=300,width=500');
}
else if (inputText.toLowerCase().indexOf("node04")>-1) {
	window.open(href="https://youtu.be/XXavqd7-kWI?si=gWNPi53kGf87uNRN",'readFile','resizable,height=300,width=500');
}
else if (inputText.toLowerCase().indexOf("node05")>-1) {
	window.open(href="https://youtu.be/X7lBnTBCJBs?si=atmHI9kDe2VDAZ-J",'readFile','resizable,height=300,width=500');
}

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
else if (inputText.toLowerCase().indexOf("node51")>-1) {
	window.open(href="https://youtu.be/MbIrI-5bReg",'api','resizable,height=300,width=500');
}
else if (inputText.toLowerCase().indexOf("node52")>-1) {
	window.open(href="https://youtu.be/d62KCds8pYk",'api','resizable,height=300,width=500');
}
else if (inputText.toLowerCase().indexOf("node53")>-1) {
	window.open(href="https://youtu.be/73jVAL8tNvQ",'api','resizable,height=300,width=500');
}
else if (inputText.toLowerCase().indexOf("node54")>-1) {
	window.open(href="https://youtu.be/lbR0umqkkyg",'api','resizable,height=300,width=500');
}
else if (inputText.toLowerCase().indexOf("node55")>-1) {
	window.open(href="https://youtu.be/OP9LdaK4Gnc",'api','resizable,height=300,width=500');
}
else if (inputText.toLowerCase().indexOf("node56")>-1) {
	window.open(href="https://youtu.be/-63GHcVSuk0",'api','resizable,height=300,width=500');
}
else if (inputText.toLowerCase().indexOf("node57")>-1) {
	window.open(href="https://youtu.be/Y3rFeOvd7OQ",'api','resizable,height=300,width=500');
}
else if (inputText.toLowerCase().indexOf("node58")>-1) {
	window.open(href="https://youtu.be/3CfRAzSDyeU",'api','resizable,height=300,width=500');
}
else if (inputText.toLowerCase().indexOf("node59")>-1) {
	window.open(href="https://youtu.be/gDyzJI9Zl6A",'api','resizable,height=300,width=500');
}
else if (inputText.toLowerCase().indexOf("node60")>-1) {
	window.open(href="https://youtu.be/VQZY_tcX7gw",'api','resizable,height=300,width=500');
}
else if (inputText.toLowerCase().indexOf("node61")>-1) {
	window.open(href="https://youtu.be/-JWPfpZQlm8",'api','resizable,height=300,width=500');
}
else if (inputText.toLowerCase().indexOf("node62")>-1) {
	window.open(href="https://youtu.be/MjWTjynWb7Q",'api','resizable,height=300,width=500');
}
else if (inputText.toLowerCase().indexOf("node63")>-1) {
	window.open(href="https://youtu.be/A1Y5bifY7dA",'api','resizable,height=300,width=500');
}
else if (inputText.toLowerCase().indexOf("node64")>-1) {
	window.open(href="https://youtu.be/ULBotIoNM0A",'api','resizable,height=300,width=500');
}
else if (inputText.toLowerCase().indexOf("node65")>-1) {
	window.open(href="https://youtu.be/HbS6wKv9hi0",'api','resizable,height=300,width=500');
}
else if (inputText.toLowerCase().indexOf("node66")>-1) {
	window.open(href="https://youtu.be/ijSmgID_uCw",'api','resizable,height=300,width=500');
}
else if (inputText.toLowerCase().indexOf("node66a")>-1||inputText.toLowerCase().indexOf("route")>-1) {
	window.open(href="./videos/route().png",'api','resizable,height=300,width=500');
}
else if (inputText.toLowerCase().indexOf("node67")>-1||inputText.toLowerCase().indexOf("controller")>-1) {
	window.open(href="https://youtu.be/gUDwKP1lOA0",'api','resizable,height=300,width=500');
}
else if (inputText.toLowerCase().indexOf("node68")>-1||inputText.toLowerCase().indexOf("structures")>-1) {
	window.open(href="https://drive.google.com/file/d/11QVfzD5Q8SMcqXRSvLMcPoFHOE2AqUcs/view?usp=drive_link",'node68','resizable,height=300,width=500');
}
else if (inputText.toLowerCase().indexOf("node69")>-1||inputText.toLowerCase().indexOf("routes")>-1) {
	window.open(href="https://drive.google.com/file/d/11U9L0pDtYTXLZ4RBOQGtNdwOPmlQysqy/view?usp=drive_link",'node69','resizable,height=300,width=500');
}
else if (inputText.toLowerCase().indexOf("node70")>-1||inputText.toLowerCase().indexOf("error")>-1) {
	window.open(href="https://drive.google.com/file/d/11eR9nla4bd-zEwnjiROO9B16vV0RzVpZ/view?usp=drive_link",'node70','resizable,height=300,width=500');
}
else if (inputText.toLowerCase().indexOf("node71")>-1||inputText.toLowerCase().indexOf("token")>-1) {
	window.open(href="https://drive.google.com/file/d/12S5grAxT6Pl4uWMkeJlRdl_FsC3_Hq1T/view?usp=drive_link",'node70','resizable,height=300,width=500');
}
else if (inputText.toLowerCase().indexOf("node72")>-1||inputText.toLowerCase().indexOf("code")>-1||inputText.toLowerCase().indexOf("flow")>-1) {
	window.open(href="https://drive.google.com/file/d/12RzPV4MOvH2ZtoW-D7i-Dq9bsCI_yxmD/view?usp=drive_link",'node70','resizable,height=300,width=500');
}
else if (inputText.toLowerCase().indexOf("node73")>-1||inputText.toLowerCase().indexOf("dependencies")>-1||inputText.toLowerCase().indexOf("json web token")>-1) {
	window.open(href="https://drive.google.com/file/d/12_bn9qKhs0lujDAFfMc5dyrm-IbBDTAn/view?usp=drive_link",'node70','resizable,height=300,width=500');
}
else if (inputText.toLowerCase().indexOf("node74")>-1||inputText.toLowerCase().indexOf("secrets")>-1) {
	window.open(href="https://drive.google.com/file/d/12s9TVm8GzyPWMXPkf0wRcaxZ0O9d4Dk6/view?usp=drive_link",'node70','resizable,height=300,width=500');
}
else if (inputText.toLowerCase().indexOf("node75")>-1||inputText.toLowerCase().indexOf("dashboard")>-1&&inputText.toLowerCase().indexOf("token")>-1) {
	window.open(href="https://drive.google.com/file/d/14fB47G3U--Aj6u6dFq1Sc1RgBIRnbKVK/view?usp=drive_link",'node75','resizable,height=300,width=500');
}
else if (inputText.toLowerCase().indexOf("node75a")>-1||inputText.toLowerCase().indexOf("auth")>-1&&inputText.toLowerCase().indexOf("header")>-1) {
	window.open(href="https://drive.google.com/file/d/152_AIXuLnrzdCFErL8wzehb-wlzjf_Uj/view?usp=drive_link",'node75a','resizable,height=300,width=500');
}
else if (inputText.toLowerCase().indexOf("node75b")>-1||inputText.toLowerCase().indexOf("verify")>-1&&inputText.toLowerCase().indexOf("token")>-1) {
	window.open(href="https://drive.google.com/file/d/15-vbxHHLKgnQQ7yQOyOFprQmlWrfHCek/view?usp=drive_link",'node75b','resizable,height=300,width=500');
}
else if (inputText.toLowerCase().indexOf("node76")>-1||inputText.toLowerCase().indexOf("test")>-1&&inputText.toLowerCase().indexOf("route")>-1) {
	window.open(href="https://drive.google.com/file/d/14yypLX3FrxrXMX5V64XCNRdGOU7mobsV/view?usp=drive_link",'node76','resizable,height=300,width=500');
}
else if (inputText.toLowerCase().indexOf("node77")>-1||inputText.toLowerCase().indexOf("middleware")>-1&&inputText.toLowerCase().indexOf("refactor")>-1) {
	window.open(href="https://drive.google.com/file/d/14j9xg7K7-rM8aIsKjuiCZnwpPQ6Syl-S/view?usp=drive_link",'node77','resizable,height=300,width=500');
}
else if (inputText.toLowerCase().indexOf("node78")>-1||inputText.toLowerCase().indexOf("error")>-1&&inputText.toLowerCase().indexOf("refactor")>-1) {
	window.open(href="https://drive.google.com/file/d/135XFNi5B4zchXrJT_HMJjPkPH24wq2o7/view?usp=drive_link",'node78','resizable,height=300,width=500');
}
else if (inputText.toLowerCase().indexOf("node79")>-1||inputText.toLowerCase().indexOf("error status")>-1&&inputText.toLowerCase().indexOf("refactor")>-1) {
	window.open(href="https://drive.google.com/file/d/13GO9HE17UwebQSLK8J19cfrA8EYfr_xv/view?usp=drive_link",'node79','resizable,height=300,width=500');
}
else if (inputText.toLowerCase().indexOf("node80")>-1||inputText.toLowerCase().indexOf("login")>-1) {
	window.open(href="https://www.youtube.com/watch?v=fUWkVxCv4IQ",'node79','resizable,height=300,width=500');
}
else if (inputText.toLowerCase().indexOf("install mysql")>-1||inputText.toLowerCase().indexOf("sql")>-1&&inputText.toLowerCase().indexOf("install")>-1) {
	window.open(href="https://dev.mysql.com/doc/mysql-getting-started/en/#mysql-getting-started-installing",'','resizable,height=300,width=500');
}
else if (inputText.toLowerCase().indexOf("sql course")>-1||inputText.toLowerCase().indexOf("sql")>-1&&inputText.toLowerCase().indexOf("course")>-1) {
	window.open(href="https://www.w3schools.com/mysql/mysql_sql.asp",'','resizable,height=300,width=500');
}
else if (inputText.toLowerCase().indexOf("workbench")>-1||inputText.toLowerCase().indexOf("sql")>-1&&inputText.toLowerCase().indexOf("workbench")>-1) {
	window.open(href="https://youtu.be/X_umYKqKaF0?si=X1Nbu9stsInbtoJS",'','resizable,height=300,width=500');
}
else if (inputText.toLowerCase().indexOf("nodejs connection")>-1||inputText.toLowerCase().indexOf("sql")>-1&&inputText.toLowerCase().indexOf("nodejs")>-1) {
	window.open(href="https://blogs.perficient.com/2023/08/03/how-to-connect-node-js-with-mysql-database/",'','resizable,height=300,width=500');
}
else if (inputText.toLowerCase().indexOf("google cloud hosting")>-1||inputText.toLowerCase().indexOf("sql")>-1&&inputText.toLowerCase().indexOf("hosting")>-1) {
	window.open(href="https://cloud.google.com/mysql/mysql-hosting",'','resizable,height=300,width=500');
}




else {
		answerElement.innerHTML = `I do not understand your input '${inputText}', perhaps you could click our "topics" button above or check your spelling.<br>Or email us what was your question for us to update an appropriate response.<br><a href="mailto:tonboswimmers@gmail.com?&subject=Lifeguard%20ChatBot%20Enquiry&body=Thank%20you%20for%20your%20email%20to%20Tonboswimmers", target="_blank">email</a>`;
		      
	}
}
document.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    lky(); // Call the function to handle form submission
  });