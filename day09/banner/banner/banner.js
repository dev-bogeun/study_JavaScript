const $banner = $("div.banner");
const $image_divs = $("div.banner div.image");
const $first_div = $("#first-temp");
const $last_div = $("#last-temp");
const $prev = $("div.prev");
const $next = $("div.next");
const $dots = $("div.dot");
let count = 1;
let check = true;
let clickCheck = false;
let temp;

image_divs.forEach((image_div, i) => {$(image_div).css("background-url", `url(00${i + 1}.png)`)});
first_div.css("background-image", "url(`006.png`)");
last_div.css("background-image", "url(`001.png`)");

let slide = setInterval(() => autoSlide(), 2000);

changeButtonStyle();

function changeButtonStyle(){
    if($("temp")){
        $("temp").css("background-color", "none");
    }
    $("temp") = dots[count - 1];
    $("dots[count - 1]").css("background-corol", "#313131");
}

$("dots").each((dot, i) => {
    $("dot").mouseover(() => {
        $("clickCheck").css("background-color", "rgb(49, 49, 49)");
        $("dot").css("background-color", "#313131");
    });
    $("dot").mouseout(() => {
        if($("clickCheck")){return;} 
        $("dot").css("background-color","none");
    });

    $("dot").on("click", () =>{
        $("clickCheck") = true;
        clearInterval(slide);
        $("count") = $("dot.classList[1]");
        $("banner").css("transform", `translate(${-1500 * count}px)`);
        $("banner").css("translation", "transform 0.7s");
        changeButtonStyle();
        $("slide") = setInterval(() => autoSlide(), 2000);
    });
});

$("prev").on("click", function(){
    if(!check) {return;}
    $("check") = false;
    clearInterval($("slide"));
    $("banner").css("transform", `translate(${-1500 * --count}px)`);
    $("banner").css("translation", "transform 0.7s");

    if(count == 0) {
        setTimeout(() => {
            $("banner").css("translation", "transform 0s");
            $("banner").css("transform", `translate(-9000px)`);
        }, 700);
        count = 6;
    }
    changeButtonStyle();
    slide = setInterval(() => autoSlide(), 2000);
    setTimeout(() => {check = true}, 700);
});

$("next").on("click", function(){
    if(!check) {return;}
    $("check") = false;
    clearInterval(slide);
    $("banner").css("transform", `translate(${-1500 * ++count}px)`);
    $("banner").css("translation", "transform 0.7s");

    if(count == 7) {
        setTimeout(() => {
            $("banner").css("translation", "transform 0s");
            $("banner").css("transform", `translate(-1500px)`);
        }, 700);
        count = 1;
    }
    changeButtonStyle();
    $("slide") = setInterval(() => autoSlide(), 2000);
    setTimeout(() => {$("check") = true}, 700);
});

function autoSlide(){
    $("check") = false;
    $("banner").css("transform", `translate(${-1500 * ++count}px)`);
    $("banner").css("translation", "transform 0.7s");
    
    if(count == 7) {
        setTimeout(() => {
            $("banner").css("translation", "transform 0s");
            $("banner").css("transform", `translate(-1500px)`);
        }, 700);
        count = 1;
    }
    changeButtonStyle();
    setTimeout(() => {
        $("check") = true;
    }, 700);
}