var soundbg = document.getElementById("soundbg");
var playstopsound = document.getElementById("playstopsound");
var soundbg_m = document.getElementById("soundbg_m");
var playstopsound_m = document.getElementById("playstopsound_m");
const audioBG = document.getElementById("backSound");
const doll_m = document.getElementById("doll_m");
var rotation = 0;
var intervalId;
var dance_flag = 0;
var rithem = 0;

const clickSound = document.getElementById('clickSound');
function playHover(){
  clickSound.currentTime = 0;
  clickSound.src = "../asserts/audio/hover.wav";
  clickSound.play();
}
function playClick(){
  clickSound.currentTime = 0;
  clickSound.src = "../asserts/audio/linkbuttonclick.wav";
  clickSound.play();
}

function changeSoundState() {
  playClick();
  let state = window.localStorage.getItem("sound");
  if (state == "on") window.localStorage.setItem("sound", "off");
  else window.localStorage.setItem("sound", "on");
  setMusicState();
}
Audio.prototype.play = (function(play) {
  return function () {
    var audio = this,
        args = arguments,
        promise = play.apply(audio, args);
    if (promise !== undefined) {
      promise.catch(_ => {
        // Autoplay was prevented. This is optional, but add a button to start playing.
        var el = document.createElement("button");
        el.style.visibility = "hidden";
        el.innerHTML = "Play";
        el.addEventListener("click", function(){play.apply(audio, args);});
          this.parentNode.insertBefore(el, this.nextSibling)
      });
    }
  };
})(Audio.prototype.play);

function setMusicState() {
  let music_state = window.localStorage.getItem("sound");
  if (music_state == "on") {
    startAnimation();
    playstopsound.src = "../asserts/img/music_stop.svg";
    doll.src = "../asserts/gif/doll.gif";
    playstopsound_m.src = "../asserts/img/music_stop.svg";
    doll_m.src = "../asserts/gif/doll.gif";
    audioBG.play();

  } else {
    stopAnimation();
    playstopsound.src = "../asserts/img/music_play.svg";
    doll.src = "../asserts/img/doll.png";
    playstopsound_m.src = "../asserts/img/music_play.svg";
    doll_m.src = "../asserts/img/doll.png";
    audioBG.pause();
  }
}
var ani_ani = false;
function rotateSoundBG() {
  rotation += 1;
  rotation = rotation % 360;
  soundbg.style.transform = "rotate(" + rotation + "deg)";

  rithem++;
  // if(rithem == 200 && ani_ani==false) {
  //   animals.src ="../asserts/gif/animals.gif";
  //   ani_ani = true;
  // }
  rithem %= 600;
}

function startAnimation() {
  // Start the animation by repeatedly calling the rotateBox function
  intervalId = setInterval(rotateSoundBG, 5);
}
function stopAnimation() {
  // Stop the animation by clearing the interval
  clearInterval(intervalId);
  //doll.src = "../asserts/img/doll.svg";
}

const total = document.getElementById("total");
const main_side = document.getElementById("main_side");
const top_content = document.getElementById("top_content");
const nav = document.getElementById("nav");
const logo = document.getElementById("logo");
const button_pan = document.getElementById("button_pan");
const music = document.getElementById("music");
const doll = document.getElementById("doll");
const caracter = document.getElementById("caracter");
const design = document.getElementById("design");
const shop = document.getElementById("shop");
const me = document.getElementById("me");
const animals = document.getElementById("animals");
const top_pcontainer = document.getElementById("top_pcontainer");

var footer = document.getElementById("footer");
const total_rect = total.getBoundingClientRect();
const main_rect = main_side.getBoundingClientRect();
const left_bg = document.getElementById("left_bg");

const menu_caracter = document.getElementById("menu_caracter");
const menu_caracter_small = document.getElementById("menu_caracter_small");
const menu_design = document.getElementById("menu_design");
const menu_design_small = document.getElementById("menu_design_small");
const menu_shop = document.getElementById("menu_shop");
const menu_shop_small = document.getElementById("menu_shop_small");
const menu_me = document.getElementById("menu_me");
const menu_me_small = document.getElementById("menu_me_small"); 

const caracter_more = document.getElementById("caracter_more");
const design_more = document.getElementById("design_more");
const shop_more = document.getElementById("shop_more");
const me_more = document.getElementById("me_more");

var check_it = document.getElementById("check_it");
function checkit_over() {
  check_it.src = "../asserts/img/check_it2.png";
}
function checkit_out() {
  check_it.src = "../asserts/img/check_it1.png";
}
const colors = ["#FAD4FA", "#F8E8A7", "#A7BAF8", "#A7F8D3"];
var horizen_content = document.getElementById("horizen_content");
var childComponents = document.querySelectorAll(".item_content");
var j=0;
childComponents.forEach((childTag) => {
  let index = (Math.floor(Math.random() * 10) + 1) % 5;
  childTag.style.backgroundColor = colors[index];
  childTag.innerHTML =  j+1;
  j++;
  let parent = childTag.parentNode;
  let arrow_img = parent.querySelector("img");
  let origin_top = 82;
  let origin_right = 17;
  if (total_rect.width <= 470) { 
     origin_top = 73;
     origin_right = 19;
  }
  
  childTag.addEventListener("mouseenter", function () {
    // hover_img.style.visibility = "visible";
    // hover_img.src = child.src;
    // child.style.transform = "scale(1.2)";
    childTag.style.boxShadow  = " 3px 3px #5B667B";
    childTag.style.marginLeft ="3px";
    childTag.style.marginTop ="3px";
    arrow_img.style.top = origin_top+3+"px";
    playHover();
    // arrow_img.style.right = origin_right-3+"px";
    // fadein();
  });
  childTag.addEventListener("mouseleave", function () {
    // hover_img.style.visibility = "hidden";
    // hover_img.src = "";
    // child.style.transform = "scale(1)";
    childTag.style.boxShadow  = " 5px 5px #5B667B";
    childTag.style.marginLeft ="0px";
    childTag.style.marginTop ="0px";
    arrow_img.style.top = origin_top+"px";
    // arrow_img.style.right = origin_right+"px";
  });
  childTag.addEventListener("mousedown", function() {
    childTag.style.boxShadow  = " 0px 0px #5B667B";
    childTag.style.marginLeft ="5px";
    childTag.style.marginTop ="5px";
    arrow_img.style.top = origin_top+5+"px";
    playClick();
    // arrow_img.style.right = origin_right-5+"px";
  });
  childTag.addEventListener("mouseup", function() {
    childTag.style.boxShadow  = " 5px 5px #5B667B";
    childTag.style.marginLeft ="0px";
    childTag.style.marginTop ="0px";
    arrow_img.style.top = origin_top+"px";
    // arrow_img.style.right = origin_right+"px";
  });
});
var hori1 = document.getElementById("hori1");
var hori2 = document.getElementById("hori2");
var hori3 = document.getElementById("hori3");
var hori4 = document.getElementById("hori4");
var hori5 = document.getElementById("hori5");
let hox = 19;
let hoy = 8;
let hwidth = 118;
if(main_rect.width<=375)
{
  hox = 12;
  hoy = 3;
  hwidth = 100;
} 
left1= hox;
left2=(hox+hwidth)+hox;
left3=(hox+hwidth)*2+hox;
left4=(hox+hwidth)*3+hox;
left5=(hox+hwidth)*4+hox;
hori1.style.top = hoy+"px";
hori1.style.left = left1+"px";
hori2.style.top = hoy+"px";
hori2.style.left = left2+"px";
hori3.style.top = hoy+"px";
hori3.style.left = left3+"px";
hori4.style.top = hoy+"px";
hori4.style.left = left4+"px";
hori5.style.top = hoy+"px";
hori5.style.left = left5+"px";
var horis=[
  {item:hori1,left:left1},
  {item:hori2,left:left2},
  {item:hori3,left:left3},
  {item:hori4,left:left4},
  {item:hori5,left:left5}
];
setInterval(() => {
  horis.forEach(hitem=>{
    if(hitem.left<-hwidth){
      hitem.left = (hox+hwidth)*4+hox;
    } 
    else{
      hitem.left =hitem.left - 1;
    } 
    hitem.item.style.left = hitem.left+"px";
  });
}, 20);
document.getElementById("go_top").addEventListener("click", function (event) {
  event.preventDefault();
  playClick();
  scrollToTop();
});

function scrollToTop() {
  var currentPosition = window.pageYOffset;
  var distance = currentPosition;
  var duration = 500; // Change this value to adjust the scrolling speed

  var startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var scrollPosition = easeInOutCubic(
      timeElapsed,
      currentPosition,
      -distance,
      duration
    );
    window.scrollTo(0, scrollPosition);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function easeInOutCubic(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t * t + b;
    t -= 2;
    return (c / 2) * (t * t * t + 2) + b;
  }

  requestAnimationFrame(animation);
}

const cards = total.querySelectorAll(".card");
const hover_img = document.getElementById("hover_img");
cards.forEach((card) => {
  let t_content = card.querySelector(".tcard-content");
  let child = t_content.firstElementChild;
  child.addEventListener("mouseenter", function () {
    playHover();
    hover_img.style.visibility = "visible";
    hover_img.src = child.src;
    child.style.transform = "scale(1.2)";
    card.style.boxShadow = " 3px 3px #5B667B";
    card.style.marginLeft = "3px";
    card.style.marginTop = "3px";
    fadein();
  });
  child.addEventListener("mouseleave", function () {
    hover_img.style.visibility = "hidden";
    hover_img.src = "";
    child.style.transform = "scale(1)";
    card.style.boxShadow = " 5px 5px #5B667B";
    card.style.marginLeft = "0px";
    card.style.marginTop = "0px";
  });
  child.addEventListener("mousedown", function() {
    playClick();
    card.style.boxShadow  = " 0px 0px #5B667B";
    card.style.marginLeft ="5px";
    card.style.marginTop ="5px";
  });
  child.addEventListener("mouseup", function() {
    card.style.boxShadow  = " 5px 5px #5B667B";
    card.style.marginLeft ="0px";
    card.style.marginTop ="0px";
  });
});
var top_card_img = document.getElementById("top_card_img");
var top_card = document.getElementById("top_card");

top_card_img.addEventListener("mouseenter", function () {
  playHover();
  hover_img.style.visibility = "visible";
  hover_img.src = top_card_img.src;
  top_card_img.style.transform = "scale(1.2)";
  top_card.style.boxShadow = " 3px 3px #5B667B";
  top_card.style.marginLeft = "3px";
  top_card.style.marginTop = "3px";
  fadein();
});
top_card_img.addEventListener("mouseleave", function () {
  hover_img.style.visibility = "hidden";
  hover_img.src = "";
  top_card_img.style.transform = "scale(1)";
  top_card.style.boxShadow = " 5px 5px 0px #5B667B";
  top_card.style.marginLeft = "0px";
  top_card.style.marginTop = "0px";
});
top_card_img.addEventListener("mousedown", function() {
  playClick();
  top_card.style.boxShadow  = " 0px 0px #5B667B";
  top_card.style.marginLeft ="5px";
  top_card.style.marginTop ="5px";
});
top_card_img.addEventListener("mouseup", function() {
  top_card.style.boxShadow  = " 5px 5px #5B667B";
  top_card.style.marginLeft ="0px";
  top_card.style.marginTop ="0px";
});
function fadein(){
  var op = 0;
  var optimer = setInterval(function () {
    if (op >= 1) {
      clearInterval(optimer);
    }
    hover_img.style.opacity = op;
    op += 0.1; // increment opacity gradually
  }, 10); // 10ms interval
}

setMusicState();

var menu_actions =[
  {bt:menu_caracter,target:caracter},{bt:menu_caracter_small,target:caracter},
  {bt:menu_design,target:design},{bt:menu_design_small,target:design},
  {bt:menu_shop,target:shop},{bt:menu_shop_small,target:shop},
  {bt:menu_me,target:me},{bt:menu_me_small,target:me},
];
menu_actions.forEach((item)=>{
  item.bt.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default link behavior
    playClick();
    item.target.scrollIntoView({ behavior: 'smooth' });
  });
  item.bt.addEventListener('mouseenter', (event) => {
    event.preventDefault(); // Prevent the default link behavior
    playHover();
  });
});

const more_bts =[caracter_more,design_more,shop_more,me_more];
more_bts.forEach((more)=>{
  more.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default link behavior
    playClick();
  });
  more.addEventListener('mouseenter', (event) => {
    event.preventDefault(); // Prevent the default link behavior
    playHover();
  });
});

window.addEventListener("scroll", function () {
  const Offset = top_content.offsetTop;
  if (total_rect.width <= 470) {   
    if (window.pageYOffset > Offset) {
      //nav.style.display = "flex";
      footer.style.display = "flex";
    } else {
      //nav.style.display = "none";
      footer.style.display = "none";
    }    
  }
  else if(total_rect.width <= 1020 && total_rect.width >470)
  {
    footer.style.display = "flex";
  }
  else
  {
    footer.style.display = "none";
  }
});

document.addEventListener('DOMContentLoaded', function() {
  if(total_rect.width>=1940 && total_rect.height>=1600)
  {
    left_bg.style.width = "829px";
    left_bg.style.height = "1577px";
    left_bg.style.objectFit = "cover";
    animals.style.width="1171px";
    animals.style.height="945px";
    animals.style.bottom="-91.6px";
  }
  else if(total_rect.width>=1940 && total_rect.height<=1600 && total_rect.height>=970)
  {
    left_bg.style.width = "496px";
    left_bg.style.height = "944px";
    animals.style.width="701px";
    animals.style.height="565px";
  }
  else if(total_rect.width>=1280&&total_rect.height>=970 )
  {
    left_bg.style.width = "736px";
    left_bg.style.height = "1400px";
    animals.style.width="1000px";
    animals.style.height="806px";
  }
  else if(total_rect.width>=768 && total_rect.height<=800 )
  {
    left_bg.style.width = "494px";
    left_bg.style.height = "770px";
    animals.style.width="701px";
    animals.style.height="565px";
  }
  else if(total_rect.width<=768 && total_rect.height<=800 )
  {
    left_bg.style.width = "334px";
    left_bg.style.height = "647px";
    animals.style.width="372px";
    animals.style.height="346px";
  }
  if(total_rect.width<=1020)
  {
    //nav.style.display = "none";
    footer.style.display = "none";
  }
});