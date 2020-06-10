<!--

function remoteStartBible(thisPassage) {
//******* old stuff here **********
// window.open("http://bible.gospelcom.net/bible?version=ESV&" + thisPassage, 'mallHelp', 'width=1000,height=800,resizable=1,scrollbars=yes');
//	window.open("http://legacy.esvbible.org/" + thisPassage, 'width=800,height=600,resizable=1,scrollbars=yes');
//******* end old stuff here ******
/**** Here is the chronological ESV code ****
	var currentTime = new Date();
	var month = currentTime.getMonth() + 1;
	var day = currentTime.getDate();
	if (day < 10){
        	day= "0" + day;
	}
	if (month < 10){
        	month= "0" + month;
	}
	var year = currentTime.getFullYear();
//	alert(year + "-" + month + "-" + day);
	window.open("http://www.esvonline.org/devotions/chronological/" + year + "-" + month + "-" + day, 'width=800, height=600, resizable=1, scrollbars=yes');
**** end chronological ESV code ********/

//**** here is the chronological reading plan from The Message paraphrase.
//note that we are keeping the thisPassage function input parameter as we are not using it but may want to when we switch back
	//window.open('http://www.biblegateway.com/resources/readingplans/index.php/today?plan=2&version=65', 'width=800, height=600, resizable=1, scrollbars=yes');
//*** end chronological reading from The Message

//window.open('http://www.biblegateway.com/passage/?search=' + thisPassage + '&version=NASB', 'width=800, height=600, resizable=1, scrollbars=yes');
	
	//if mobile then send to biblegateway.com as it works better with mobile display
	//alert(navigator.userAgent.toLowerCase());
	
	//****************** start check for mobile device ************************************
	//check if it is a mobile device then open to different site
	//var mobile = (/silk|iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));
	//if ( mobile) {
	//	window.open('http://www.biblegateway.com/passage/?search=' + thisPassage + '&version=NASB');
	//}else{
		//window.open('http://legacy.esvbible.org/' + thisPassage, 'width=800,height=600,resizable=1,scrollbars=yes');
		//window.open('http://www.esvbible.org/' + thisPassage);
	//}
	//*********************end check for mobile device ***********************************

	window.open('http://www.esvbible.org/' + thisPassage);
}

//-->
