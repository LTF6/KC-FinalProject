function showques() {
 document.getElementById("questions-form").style.display = ( "block" )
}

// next Function
function Next1() {
 document.getElementById("quests1").style.display = ("none")
 document.getElementById("quests2").style.display = ("none")
 document.getElementById("nxt-btno-hio").style.display = ("none")

 document.getElementById("quests3").style.display = ("block")
 document.getElementById("quests4").style.display = ("block")
 document.getElementById("nxt-btno-hio2").style.display = ("block")
}

function Next2() {
 document.getElementById("quests3").style.display = ("none")
 document.getElementById("quests4").style.display = ("none")
 document.getElementById("nxt-btno-hio2").style.display = ("none")

 document.getElementById("contact-bar-tst").style.display = ("block")
}

 function unshowques() {
 document.getElementById("questions-form").style.display = ( "none" )
}

function consolelog() {
    console.log("js is workin ?");
}