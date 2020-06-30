


let aboutoffset = $("#about").offset().top;
//alert(aboutoffset) //804 

$(window).scroll(function(){

    let wScroll = $(window).scrollTop();

    if(wScroll > aboutoffset)
    {

        $("#btnUp").fadeIn(500);
        $("#navbar").css("backgroundColor","rgba(42, 128, 185, 0.48)") 

    
    }

    else {
        
        $("#btnUp").fadeOut(500);
        $("#navbar").css("backgroundColor","transparent") 
    }
    
});

$("#btnUp").click(function(){
   
    $("html,body").animate( {scrollTop:'0'} , 3000)

})

$("a").click(function(){
    
      let aHref = $(this).attr("href");

    let Sectionoffset = $(aHref).offset().top;

    $("html,body").animate( {scrollTop: Sectionoffset} , 1000)
});

let counter1=0;


function IncCounter1 () {

    counter1++;

    if(counter1 == 240)
    {
        clearInterval(x)
    }

   document.getElementById("counter1").innerHTML= counter1;
}

  let x  = setInterval(IncCounter1 , 30);


