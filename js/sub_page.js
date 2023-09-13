const pr_side = document.getElementById("caracter_subpage");
const pr_rect = pr_side.getBoundingClientRect();
var shorizen_content = document.getElementById("shorizen_content");
var schildComponents = shorizen_content.querySelectorAll(".item_content");
schildComponents.forEach((childTag) => {
  let index = (Math.floor(Math.random() * 10) + 1) % 5;
  childTag.style.backgroundColor = colors[index];
  let parent = childTag.parentNode;
  let arrow_img = parent.querySelector("img");
  let origin_top = 82;
  let origin_right = 17;
  if (total_rect.width <= 470) { 
     origin_top = 73;
     origin_right = 19;
  } 
  childTag.addEventListener("mouseenter", function () {
    childTag.style.boxShadow  = " 3px 3px #5B667B";
    childTag.style.marginLeft ="3px";
    childTag.style.marginTop ="3px";
    arrow_img.style.top = origin_top+3+"px";
    playHover();
  });
  childTag.addEventListener("mouseleave", function () {
    childTag.style.boxShadow  = " 5px 5px #5B667B";
    childTag.style.marginLeft ="0px";
    childTag.style.marginTop ="0px";
    arrow_img.style.top = origin_top+"px";
  });
  childTag.addEventListener("mousedown", function() {
    childTag.style.boxShadow  = " 0px 0px #5B667B";
    childTag.style.marginLeft ="5px";
    childTag.style.marginTop ="5px";
    arrow_img.style.top = origin_top+5+"px";
    playClick();
  });
  childTag.addEventListener("mouseup", function() {
    childTag.style.boxShadow  = " 5px 5px #5B667B";
    childTag.style.marginLeft ="0px";
    childTag.style.marginTop ="0px";
    arrow_img.style.top = origin_top+"px";
    backCaracter();
  });
});
var shori1 = document.getElementById("shori1");
var shori2 = document.getElementById("shori2");
var shori3 = document.getElementById("shori3");
var shori4 = document.getElementById("shori4");
var shori5 = document.getElementById("shori5");
let shox = 38;
let shoy = 8;
let shwidth = 118;
if(pr_rect.width<=375)
{
  shox = 24;
  shoy = 3;
  shwidth = 100;
} 
sleft1= shox;
sleft2=(shox+hwidth)+shox;
sleft3=(shox+hwidth)*2+shox;
sleft4=(shox+hwidth)*3+shox;
sleft5=(shox+hwidth)*4+shox;
shori1.style.top = shoy+"px";
shori1.style.left = sleft1+"px";
shori2.style.top = shoy+"px";
shori2.style.left = sleft2+"px";
shori3.style.top = shoy+"px";
shori3.style.left = sleft3+"px";
shori4.style.top = shoy+"px";
shori4.style.left = sleft4+"px";
shori5.style.top = shoy+"px";
shori5.style.left = sleft5+"px";
var shoris=[
  {item:shori1,left:sleft1},
  {item:shori2,left:sleft2},
  {item:shori3,left:sleft3},
  {item:shori4,left:sleft4},
  {item:shori5,left:sleft5}
];

const pr_side_d = document.getElementById("design_subpage");
const pr_rect_d = pr_side_d.getBoundingClientRect();
var shorizen_content_d = document.getElementById("shorizen_content_d");
var schildComponents_d = shorizen_content_d.querySelectorAll(".item_content");
schildComponents_d.forEach((childTag) => {
  let index = (Math.floor(Math.random() * 10) + 1) % 5;
  childTag.style.backgroundColor = colors[index];
  let parent = childTag.parentNode;
  let arrow_img = parent.querySelector("img");
  let origin_top = 82;
  let origin_right = 17;
  if (total_rect.width <= 470) { 
     origin_top = 73;
     origin_right = 19;
  } 
  childTag.addEventListener("mouseenter", function () {
    childTag.style.boxShadow  = " 3px 3px #5B667B";
    childTag.style.marginLeft ="3px";
    childTag.style.marginTop ="3px";
    arrow_img.style.top = origin_top+3+"px";
    playHover();
  });
  childTag.addEventListener("mouseleave", function () {
    childTag.style.boxShadow  = " 5px 5px #5B667B";
    childTag.style.marginLeft ="0px";
    childTag.style.marginTop ="0px";
    arrow_img.style.top = origin_top+"px";
  });
  childTag.addEventListener("mousedown", function() {
    childTag.style.boxShadow  = " 0px 0px #5B667B";
    childTag.style.marginLeft ="5px";
    childTag.style.marginTop ="5px";
    arrow_img.style.top = origin_top+5+"px";
    playClick();
  });
  childTag.addEventListener("mouseup", function() {
    childTag.style.boxShadow  = " 5px 5px #5B667B";
    childTag.style.marginLeft ="0px";
    childTag.style.marginTop ="0px";
    arrow_img.style.top = origin_top+"px";
    backDesign();
  });
});
var shori1_d = document.getElementById("shori1_d");
var shori2_d = document.getElementById("shori2_d");
var shori3_d = document.getElementById("shori3_d");
var shori4_d = document.getElementById("shori4_d");
var shori5_d = document.getElementById("shori5_d");
let shox_d = 38;
let shoy_d = 8;
let shwidth_d = 118;
if(pr_rect_d.width<=375)
{
  shox_d = 24;
  shoy_d = 3;
  shwidth_d = 100;
} 
sleft1_d= shox_d;
sleft2_d=(shox_d+hwidth)+shox_d;
sleft3_d=(shox_d+hwidth)*2+shox_d;
sleft4_d=(shox_d+hwidth)*3+shox_d;
sleft5_d=(shox_d+hwidth)*4+shox_d;
shori1_d.style.top = shoy_d+"px";
shori1_d.style.left = sleft1_d+"px";
shori2_d.style.top = shoy_d+"px";
shori2_d.style.left = sleft2_d+"px";
shori3_d.style.top = shoy_d+"px";
shori3_d.style.left = sleft3_d+"px";
shori4_d.style.top = shoy_d+"px";
shori4_d.style.left = sleft4_d+"px";
shori5_d.style.top = shoy_d+"px";
shori5_d.style.left = sleft5_d+"px";
var shoris_d=[
  {item:shori1_d,left:sleft1_d},
  {item:shori2_d,left:sleft2_d},
  {item:shori3_d,left:sleft3_d},
  {item:shori4_d,left:sleft4_d},
  {item:shori5_d,left:sleft5_d}
];
var view_main_interval;
var view_caracter_interval;
var view_design_interval;
function viewHori()
{
  let view_state = window.localStorage.getItem("view");
  clearInterval(view_main_interval);
  clearInterval(view_caracter_interval);
  clearInterval(view_design_interval);
  if(view_state =="main")
  {
    view_main_interval = setInterval(() => {
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
  }
  else if(view_state == "caracter_sub")
  {
    view_caracter_interval = setInterval(() => {
        shoris.forEach(hitem=>{
          if(hitem.left<-shwidth){
            hitem.left = sleft5+shox/2+5;
          } 
          else{
            hitem.left =hitem.left - 1;
          } 
          hitem.item.style.left = hitem.left+"px";
        });
      }, 20);
  }
  else if(view_state == "design_sub")
  {
    view_design_interval = setInterval(() => {
        shoris_d.forEach(hitem=>{
          if(hitem.left<-shwidth_d){
            hitem.left = sleft5_d+shox_d/2+5;
          } 
          else{
            hitem.left =hitem.left - 1;
          } 
          hitem.item.style.left = hitem.left+"px";
        });
      }, 20);
  }
}
viewHori();

function backCaracter()
{
    main_side.style.display = "block";
    if(total_rect.width<=470)
    {
        left_side.style.display = "flex";
    }
    design_subpage.style.display = "none";
    caracter_subpage.style.display = "none";
    window.localStorage.setItem("view", "main");
    viewHori();
    menu_caracter_small.click();
}
function backDesign()
{
    main_side.style.display = "block";
    if(total_rect.width<=470)
    {
        left_side.style.display = "flex";
    }
    design_subpage.style.display = "none";
    caracter_subpage.style.display = "none";
    window.localStorage.setItem("view", "main");
    viewHori();
    menu_design_small.click();
}
document.getElementById("caracter_go_top").addEventListener("click", function (event) {
    event.preventDefault();
    playClick();
    scrollToTop();
});
document.getElementById("design_go_top").addEventListener("click", function (event) {
    event.preventDefault();
    playClick();
    scrollToTop();
});
const sub_cards = total.querySelectorAll(".card_s");
sub_cards.forEach((card) => {
  let t_content = card.querySelector(".tcard-content_s");
  let child = t_content.firstElementChild;
  card.addEventListener("mouseenter", function () {
    playHover();
    child.style.transform = "scale(1.2)";
    card.style.boxShadow = " 3px 3px #5B667B";
    card.style.marginLeft = "3px";
    card.style.marginTop = "3px";
  });
  card.addEventListener("mouseleave", function () {
    child.style.transform = "scale(1)";
    card.style.boxShadow = " 5px 5px #5B667B";
    card.style.marginLeft = "0px";
    card.style.marginTop = "0px";
  });
  card.addEventListener("mousedown", function() {
    playClick();
    card.style.boxShadow  = " 0px 0px #5B667B";
    card.style.marginLeft ="5px";
    card.style.marginTop ="5px";
  });
  card.addEventListener("mouseup", function() {
    card.style.boxShadow  = " 5px 5px #5B667B";
    card.style.marginLeft ="0px";
    card.style.marginTop ="0px";
    let modal = document.getElementById("modal");
    modal.style.display = "flex";
    let modal_img = document.getElementById("modal_img");
    modal_img.src = child.src;
  });
});
var modal_close = document.getElementById("modal_close");
modal_close.addEventListener("click", function() {
    playClick();
    document.getElementById("modal").style.display = "none";
});
var index = 0;
var modal_left = document.getElementById("m_left");
modal_left.addEventListener("click", function() {
    playClick();
    let modal_img = document.getElementById("modal_img");
    index = findIndex(modal_img);
    if(index > 0)
    {
        index -=1;
        let t_content = modal_show_imgs[index].querySelector(".tcard-content_s");
        let child = t_content.firstElementChild;
        modal_img.src = child.src;
    }
    
});
var modal_right = document.getElementById("m_right");
modal_right.addEventListener("click", function() {
    playClick();
    let modal_img = document.getElementById("modal_img");
    index = findIndex(modal_img);
    if(index!=-1 && index < modal_show_imgs.length-1)
    {
        index +=1;
        let t_content = modal_show_imgs[index].querySelector(".tcard-content_s");
        let child = t_content.firstElementChild;
        modal_img.src = child.src;
    }
});
function findIndex(img)
{
    for(let i=0; i<modal_show_imgs.length;i++)
    {
        let t_content = modal_show_imgs[i].querySelector(".tcard-content_s");
        let child = t_content.firstElementChild;
        if(img.src==child.src) return i;
    }
    return -1;
}