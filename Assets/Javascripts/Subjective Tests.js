// Workin test
function log() {
let JsTest = ("Javascript is workin noice")
console.log(JsTest);
}

// Workin test end

// Side javas

let btn = document.getElementById("btn")
let sidebar = document.getElementById("sidebar")
let searchobtn = document.getElementById("bx_search")

function sidebtnclick() {
 document.getElementById("sidebar").classList.toggle("active")

 document.getElementById("logo-name").style.color = ("#11101d")
 document.getElementById("links_con").style.color = ("#11101d")

 document.getElementById("nav-itemso").style.display = ("flex")

 document.getElementById("home_content").style.left = ("78px")
 document.getElementById("mid-navo").style.left = ("78px")
 

 document.getElementById("small_side0").style.display = ("flex")
 document.getElementById("small_side").style.display = ("flex")
 document.getElementById("small_side1").style.display = ("flex")
 document.getElementById("small_side2").style.display = ("flex")
 document.getElementById("small_side3").style.display = ("flex")
 document.getElementById("small_side4").style.display = ("flex")
 document.getElementById("small_side5").style.display = ("flex")
 document.getElementById("small_side6").style.display = ("flex")
 
 document.getElementById("links_name").style.display = ("none")
 document.getElementById("links_name1").style.display = ("none")
 document.getElementById("links_name2").style.display = ("none")
 document.getElementById("links_name3").style.display = ("none")
 document.getElementById("links_name4").style.display = ("none")
 document.getElementById("links_name5").style.display = ("none")
 document.getElementById("links_name6").style.display = ("none")
 
 document.getElementById("name").style.display = ("none")
 document.getElementById("job").style.display = ("none")
 document.getElementById("log_out").style.display = ("none")

 document.getElementById("topbtno").style.marginRight = ("100px")
 
if (document.getElementById("sidebar").classList.contains("active")) {

 document.getElementById("logo-name").style.color = ("white")
 document.getElementById("links_con").style.color = ("white")

 document.getElementById("nav-itemso").style.display = ("none")

 document.getElementById("home_content").style.left = ("240px")
 document.getElementById("mid-navo").style.left = ("240px")
 

 document.getElementById("small_side0").style.display = ("none")
 document.getElementById("small_side").style.display = ("none")
 document.getElementById("small_side1").style.display = ("none")
 document.getElementById("small_side2").style.display = ("none")
 document.getElementById("small_side3").style.display = ("none")
 document.getElementById("small_side4").style.display = ("none")
 document.getElementById("small_side5").style.display = ("none")
 document.getElementById("small_side6").style.display = ("none")
   
 document.getElementById("links_name").style.display = ("flex")
 document.getElementById("links_name1").style.display = ("flex")
 document.getElementById("links_name2").style.display = ("flex")
 document.getElementById("links_name3").style.display = ("flex")
 document.getElementById("links_name4").style.display = ("flex")
 document.getElementById("links_name5").style.display = ("flex")
 document.getElementById("links_name6").style.display = ("flex")
   
 document.getElementById("name").style.display = ("flex")
 document.getElementById("job").style.display = ("flex")
 document.getElementById("log_out").style.display = ("flex")

 document.getElementById("topbtno").style.marginRight = ("300px")

}
}

// other function stoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooop

function searchbtnclick() {
 document.getElementById("sidebar").classList = ("sidebar active")
  
 document.getElementById("logo-name").style.color = ("#11101d")
 document.getElementById("links_con").style.color = ("#11101d")

 document.getElementById("nav-itemso").style.display = ("flex")
   
 document.getElementById("home_content").style.left = ("78px")
 document.getElementById("home_content").style.marginRight = ("0px")
 document.getElementById("mid-navo").style.left = ("78px")
    
   
 document.getElementById("small_side0").style.display = ("flex")
 document.getElementById("small_side").style.display = ("flex")
 document.getElementById("small_side1").style.display = ("flex")
 document.getElementById("small_side2").style.display = ("flex")
 document.getElementById("small_side3").style.display = ("flex")
 document.getElementById("small_side4").style.display = ("flex")
 document.getElementById("small_side5").style.display = ("flex")
 document.getElementById("small_side6").style.display = ("flex")
    
 document.getElementById("links_name").style.display = ("none")
 document.getElementById("links_name1").style.display = ("none")
 document.getElementById("links_name2").style.display = ("none")
 document.getElementById("links_name3").style.display = ("none")
 document.getElementById("links_name4").style.display = ("none")
 document.getElementById("links_name5").style.display = ("none")
 document.getElementById("links_name6").style.display = ("none")
    
 document.getElementById("name").style.display = ("none")
 document.getElementById("job").style.display = ("none")
 document.getElementById("log_out").style.display = ("none")

   document.getElementById("topbtno").style.marginRight = ("100px")
    
if (document.getElementById("sidebar").classList.contains("active")) {
   
 document.getElementById("logo-name").style.color = ("white")
 document.getElementById("links_con").style.color = ("white")

 document.getElementById("nav-itemso").style.display = ("none")

 document.getElementById("home_content").style.left = ("240px")
 document.getElementById("home_content").style.marginRight = ("210px")
 document.getElementById("mid-navo").style.left = ("240px")
    
   
 document.getElementById("small_side0").style.display = ("none")
 document.getElementById("small_side").style.display = ("none")
 document.getElementById("small_side1").style.display = ("none")
 document.getElementById("small_side2").style.display = ("none")
 document.getElementById("small_side3").style.display = ("none")
 document.getElementById("small_side4").style.display = ("none")
 document.getElementById("small_side5").style.display = ("none")
 document.getElementById("small_side6").style.display = ("none")
      
 document.getElementById("links_name").style.display = ("flex")
 document.getElementById("links_name1").style.display = ("flex")
 document.getElementById("links_name2").style.display = ("flex")
 document.getElementById("links_name3").style.display = ("flex")
 document.getElementById("links_name4").style.display = ("flex")
 document.getElementById("links_name5").style.display = ("flex")
 document.getElementById("links_name6").style.display = ("flex")
      
 document.getElementById("name").style.display = ("flex")
 document.getElementById("job").style.display = ("flex")
 document.getElementById("log_out").style.display = ("flex")

 document.getElementById("topbtno").style.marginRight = ("300px")

}
}


//  the real work
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

 document.getElementById("quests5").style.display = ("block")
 document.getElementById("quests6").style.display = ("block")
 document.getElementById("nxt-btno-hio3").style.display = ("block")
}


function Next3() {
 document.getElementById("quests5").style.display = ("none")
 document.getElementById("quests6").style.display = ("none")
 document.getElementById("nxt-btno-hio3").style.display = ("none")
 
 document.getElementById("quests7").style.display = ("block")
 document.getElementById("quests8").style.display = ("block")
 document.getElementById("nxt-btno-hio4").style.display = ("block")
}

function Next4() {
 document.getElementById("quests7").style.display = ("none")
 document.getElementById("quests8").style.display = ("none")
 document.getElementById("nxt-btno-hio4").style.display = ("none")
 
 document.getElementById("quests9").style.display = ("block")
 document.getElementById("contact-bar-tst").style.display = ("block")
}

function unshowques() {
 document.getElementById("questions-form").style.display = ( "none" )

 Swal.fire({
  position: 'center',
  icon: 'success',
  title: ' Email has been sent successfully ',
  showConfirmButton: false,
  timer: 2000
 } )
 
}

function unshowques1() {
 document.getElementById("questions-form").style.display = ( "none" )
 
 Swal.fire({
  position: 'center',
  icon: 'error',
  title: ' Email has been stopped ',
  showConfirmButton: false,
  timer: 1500
 } )

}


function consolelog() {
    console.log("js is workin ?");
}