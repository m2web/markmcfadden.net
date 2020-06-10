/**
 * Created by mark on 3/7/15.
 */
var getVerse = function () {

    //build the HTML for the verse display
    document.getElementById("verseTable").innerHTML = getVerseTableHtml();

    //get today's date 
    var today = new Date();
    var jmVerseList = [
        //************************************************************************************************
        //NOTE: you will need to update the dates below for upcoming meetings
        //************************************************************************************************
        //Books Year
        { date: '2019/2/01', reference: 'Romans 12:9-11 (NKJV)', verse: "Let love be without hypocrisy. Abhor what is evil. Cling to what is good. Be kindly affectionate to one another with brotherly love, in honor giving preference to one another; not lagging in diligence, fervent in spirit, serving the Lord;" },
        { date: '2019/3/01', reference: 'Jeremiah 9:23-24 (NKJV)',  verse: "Thus says the Lord: 'Let not the wise man glory in his wisdom, Let not the mighty man glory in his might, Nor let the rich man glory in his riches; 24 But let him who glories glory in this, That he understands and knows Me, That I am the Lord, exercising lovingkindness, judgment, and righteousness in the earth.For in these I delight,' says the Lord."  },
        { date: '2019/4/01', reference: '1 Chronicles 29:11-12 (NKJV)', verse: "Yours, O Lord, is the greatness, The power and the glory, The victory and the majesty; For all that is in heaven and in earth is Yours; Yours is the kingdom, O Lord, And You are exalted as head over all. Both riches and honor come from You, And You reign over all. In Your hand is power and might; In Your hand it is to make great And to give strength to all."  },
        { date: '2019/5/01', reference: 'Psalm 73:25-28  (NKJV)', verse: "Whom have I in heaven but You?  And there is none upon earth that I desire besides You.   My flesh and my heart fail;  But God is the strength of my heart and my portion forever.   For indeed, those who are far from You shall perish;  You have destroyed all those who desert You for harlotry.  But it is good for me to draw near to God;  I have put my trust in the Lord God,  That I may declare all Your works."  },
        { date: '2019/6/01', reference: '1 Corinthians 15:10  (NKJV)', verse: "But by the grace of God I am what I am, and His grace toward me was not in vain; but I labored more abundantly than they all, yet not I, but the grace of God which was with me."  },
        { date: '2019/7/01', reference: 'Hebrews 12:1-4 (NKJV)', verse: "Therefore we also, since we are surrounded by so great a cloud of witnesses, let us lay aside every weight, and the sin which so easily ensnares us, and let us run with endurance the race that is set before us,  looking unto Jesus, the author and finisher of our faith, who for the joy that was set before Him endured the cross, despising the shame, and has sat down at the right hand of the throne of God.  For consider Him who endured such hostility from sinners against Himself, lest you become weary and discouraged in your souls. You have not yet resisted to bloodshed, striving against sin."  },
        { date: '2019/8/01', reference: 'I Peter 3:14-17 (NKJV)', verse: "But even if you should suffer for righteousness' sake, you are blessed. 'And do not be afraid of their threats, nor be troubled.'  But sanctify the Lord God in your hearts, and always be ready to give a defense to everyone who asks you a reason for the hope that is in you, with meekness and fear; having a good conscience, that when they defame you as evildoers, those who revile your good conduct in Christ may be ashamed. For it is better, if it is the will of God, to suffer for doing good than for doing evil."  },
        { date: '2019/9/01', reference: 'I Peter 3:7 (NKJV)', verse: "Likewise you husbands, dwell with them with understanding, giving honor to the wife, as to the weaker vessel, and as being heirs together of the grace of life, that your prayers may not be hindered."  },
        { date: '2019/10/01', reference: 'Ephesians 6:4 (NKJV)', verse: "And you, fathers, do not provoke your children to wrath, but bring them up in the training and admonition of the Lord."  },
        { date: '2019/11/01', reference: 'I Timothy 4:7-8 (NIV)', verse: "Have nothing to do with godless myths and old wives' tales; rather, train yourself to be godly.  For physical training is of some value, but godliness has value for all things, holding promise for both the present life and the life to come."  },
        //Grudem Year
        { date: '2020/2/03', reference: 'Ps. 1:1-2 (NKJV) & 2 Timothy 3:16-17 (NKJV)', verse: "Blessed is the man who walks not in the counsel of the wicked, nor stands in the way of sinners, nor sits in the seat of scoffers; but his delight is in the law of the LORD, and on his law he meditates day and night.<br/><br/>All Scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in righteousness, that the man of God may be complete, thoroughly equipped for every good work." },
        { date: '2020/3/10', reference: 'Exodus 33:13-15 & Romans 1:18-20', verse: "Now therefore, I pray, if I have found grace in Your sight, show me now Your way, that I may know You and that I may find grace in Your sight. And consider that this nation is Your people. And He said, 'My Presence will go with you, and I will give you rest.  Then he said to Him, 'If Your Presence does not go with us, do not bring us up from here.' <br/><br/> The wrath of God is being revealed from heaven against all the godlessness and wickedness of men who suppress the truth by their wickedness, since what may be known about God is plain to them, because God has made it plain to them. For since the creation of the world God's invisible qualities--his eternal power and divine nature--have been clearly seen, being understood from what has been made, so that men are without excuse." },
        { date: '2020/4/06', reference: 'Romans 8:28-29 & Psalm 115:3 & Job 42:2', verse: "And we know that all things work together for good to those who love God, to those who are the called according to His purpose. For whom He foreknew, He also predestined to be conformed to the image of His Son, that He might be the firstborn among many brethren.<br/><br/>But our God is in heaven; He does whatever He pleases. <br/><br/> I know that You can do everything, and that no purpose of Yours can be withheld from You." },
        { date: '2020/5/19', reference: 'Nehemiah 9:6', verse: "And Ezra said: 'You are the LORD, you alone; you have made heaven, the heaven of heavens, with all their host, the earth and all that is on it, the seas and all that is in them; and you preserve all of them; and the host of heaven worships you.'" },
        { date: '2020/6/09', reference: 'Colossians 3:18-19 & Eph. 2:1-5', verse: "Wives, submit to your own husbands, as is fitting in the Lord.  Husbands, love your wives and do not be bitter toward them. <br/><br> And you He made alive who were dead in trespasses and sins, in which you formerly walked according to the course of this world, according to the prince of the power of the air, the spirit who now works in the sons of disobedience, among whom also we all once conducted ourselves in the lusts of our flesh, fulfilling the desires of the flesh and of the mind, and were by nature children of wrath, just as the others.  But God, who is rich in mercy, because of His great love with which He loved us, even when we were dead in trespasses made us alive together with Christ (by grace you have been saved)." },
        { date: '2020/7/14', reference: 'John 1:14 & Romans 3:23-24', verse: "And the Word became flesh and dwelt among us, and we beheld His glory, the glory as of the only begotten of the Father, full of grace and truth. <br/><br/> For all have sinned and fall short of the glory of God, being justified freely by His grace through the redemption that is in Christ Jesus." },
        { date: '2020/8/04', reference: 'Gal. 2:20 & John 10:27-28', verse: "I have been crucified with Christ; it is no longer I who live, but Christ lives in me; and the life which I now live in the flesh I live by faith in the Son of God, who loved me and gave Himself for me. <br/><br/> My sheep hear My voice, and I know them and they follow Me.  And I give them eternal life, and they shall never perish; neither shall anyone snatch them out of My hand." },
        { date: '2020/9/08', reference: 'James 4:7-8', verse: "Therefore, submit to God.  Resist the devil and he will flee from you.  Draw near to God and He will draw near to you.  Cleanse your hands, you sinners; and purify your hearts, you double-minded." },
        { date: '2020/10/06', reference: 'Ephesians 1:3-6', verse: "Blessed be the God and Father of our Lord Jesus Christ, who has blessed us with every spiritual blessing in the heavenly places in Christ, just as He chose us in Him before the foundation of the world, that we should be holy and without blame before Him in love, having predestined us to adoption as sons by Jesus Christ to Himself, according to the good pleasure of His will, to the praise of the glory of His grace, by which He has made us accepted in the Beloved." },
        { date: '2020/11/03', reference: '2 Corinthians 5:9-10', verse: "Therefore we make it our aim, whether present or absent, to be well pleasing to Him.  For we must all appear before the judgment seat of Christ, that each one may receive the things done in the body, according to what he has done, whether good or bad." }

    ];

    var nextVerseText = null;
    var nextVerseCitation = null;

    jmVerseList.sort(dateSort);

    for (var i = 0; i < jmVerseList.length; i++) {
        if (new Date(jmVerseList[i].date) > today) {
            nextVerseText = jmVerseList[i].verse;
            nextVerseCitation = jmVerseList[i].reference;
            break;
        }
    }

    document.getElementById("jmVerseText").innerHTML = nextVerseText;
    document.getElementById("jmVerseReference").innerHTML = nextVerseCitation;

    //display today's date in the bottom of the verse header
    document.getElementById("todaysDate").innerHTML = today.toDateString();

}

var dateSort = function(a,b) {
    return new Date(a.date).getTime() - new Date(b.date).getTime()
};

var remoteStartBible = function (thisPassage) {
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

    window.open('http://www.esv.org/' + thisPassage);
}

var getVerseTableHtml= function() {
    var theTableHtml="";
    theTableHtml += "<table class=\"table\">";
    theTableHtml += "    <tr id=\"rowBackground\">";
    theTableHtml += "        <td>";
    theTableHtml += "            Memory Verse(s)<br>";
    theTableHtml += "        <\/td>";
    theTableHtml += "    <\/tr>";
    theTableHtml += "    <tr id=\"memoryVerseCitation\">";
    theTableHtml += "        <td>";
    theTableHtml += "            <span id=\"jmVerseReference\"><\/span><br>";
    theTableHtml += "        <\/td>";
    theTableHtml += "    <\/tr>";
    theTableHtml += "    <tr id=\"memoryVerseText\">";
    theTableHtml += "        <td><span id=\"jmVerseText\"><\/span><\/td>";
    theTableHtml += "    <\/tr>";
    theTableHtml += "    <tr id=\"rowBackgroundDate\">";
    theTableHtml += "        <td>";
    theTableHtml += "            <span id=\"todaysDate\"><\/span>";
    theTableHtml += "        <\/td>";
    theTableHtml += "    <\/tr>";
    theTableHtml += "<\/table>";

    return theTableHtml;
}
    