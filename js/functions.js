//muestar el contenido de las preguntas frecuantes
$("#1").click(function(){
    $('#1 ~ .content-quick-questions').toggleClass("d-block");
    if($("#1 ~ .content-quick-questions").hasClass("d-block") ===true){
        $("#1.content-btn-help i.fas").removeClass("fa-chevron-down");
        $("#1.content-btn-help i.fas").addClass("fa-chevron-up");
    }
    else{
        $("#1.content-btn-help i.fas").addClass("fa-chevron-down");
        $("#1.content-btn-help i.fas").removeClass("fa-chevron-up");
    }
})
$("#2").click(function(){
    $('#2 ~ .content-quick-questions').toggleClass("d-block");
    if($("#2 ~ .content-quick-questions").hasClass("d-block") ===true){
        $("#2.content-btn-help i.fas").removeClass("fa-chevron-down");
        $("#2.content-btn-help i.fas").addClass("fa-chevron-up");
    }
    else{
        $("#2.content-btn-help i.fas").addClass("fa-chevron-down");
        $("#2.content-btn-help i.fas").removeClass("fa-chevron-up");
    }
})
$("#3").click(function(){
    $('#3 ~ .content-quick-questions').toggleClass("d-block");
    if($("#3 ~ .content-quick-questions").hasClass("d-block") ===true){
        $("#3.content-btn-help i.fas").removeClass("fa-chevron-down");
        $("#3.content-btn-help i.fas").addClass("fa-chevron-up");
    }
    else{
        $("#3.content-btn-help i.fas").addClass("#3 fa-chevron-down");
        $("#3.content-btn-help i.fas").removeClass("fa-chevron-up");
    }
})
$("#4").click(function(){
    $('#4 ~ .content-quick-questions').toggleClass("d-block");
    if($("#4 ~ .content-quick-questions").hasClass("d-block") ===true){
        $("#4.content-btn-help i.fas").removeClass("fa-chevron-down");
        $("#4.content-btn-help i.fas").addClass("fa-chevron-up");
    }
    else{
        $("#4.content-btn-help i.fas").addClass("fa-chevron-down");
        $("#4.content-btn-help i.fas").removeClass("fa-chevron-up");
    }
})
$("#5").click(function(){
    $('#5 ~ .content-quick-questions').toggleClass("d-block");
    if($("#5 ~ .content-quick-questions").hasClass("d-block") ===true){
        $("#5.content-btn-help i.fas").removeClass("fa-chevron-down");
        $("#5.content-btn-help i.fas").addClass("fa-chevron-up");
    }
    else{
        $("#5.content-btn-help i.fas").addClass("fa-chevron-down");
        $("#5.content-btn-help i.fas").removeClass("fa-chevron-up");
    }
})
$("#6").click(function(){
    $('#6 ~ .content-quick-questions').toggleClass("d-block");
    if($("#6 ~ .content-quick-questions").hasClass("d-block") ===true){
        $("#6.content-btn-help i.fas").removeClass("fa-chevron-down");
        $("#6.content-btn-help i.fas").addClass("fa-chevron-up");
    }
    else{
        $("#6.content-btn-help i.fas").addClass("fa-chevron-down");
        $("#6.content-btn-help i.fas").removeClass("fa-chevron-up");
    }
})
$("#7").click(function(){
    $('#7 ~ .content-quick-questions').toggleClass("d-block");
    if($("#7 ~ .content-quick-questions").hasClass("d-block") ===true){
        $("#7.content-btn-help i.fas").removeClass("fa-chevron-down");
        $("#7.content-btn-help i.fas").addClass("fa-chevron-up");
    }
    else{
        $("#7.content-btn-help i.fas").addClass("fa-chevron-down");
        $("#7.content-btn-help i.fas").removeClass("fa-chevron-up");
    }
})
$("#8").click(function(){
    $('#8 ~ .content-quick-questions').toggleClass("d-block");
    if($("#8 ~ .content-quick-questions").hasClass("d-block") ===true){
        $("#8.content-btn-help i.fas").removeClass("fa-chevron-down");
        $("#8.content-btn-help i.fas").addClass("fa-chevron-up");
    }
    else{
        $("#8.content-btn-help i.fas").addClass("fa-chevron-down");
        $("#8.content-btn-help i.fas").removeClass("fa-chevron-up");
    }
})
$("#9").click(function(){
    $('#9 ~ .content-quick-questions').toggleClass("d-block");
    if($("#9 ~ .content-quick-questions").hasClass("d-block") ===true){
        $("#9.content-btn-help i.fas").removeClass("fa-chevron-down");
        $("#9.content-btn-help i.fas").addClass("fa-chevron-up");
    }
    else{
        $("#9.content-btn-help i.fas").addClass("fa-chevron-down");
        $("#9.content-btn-help i.fas").removeClass("fa-chevron-up");
    }
})
$("#10").click(function(){
    $('#10 ~ .content-quick-questions').toggleClass("d-block");
    if($("#10 ~ .content-quick-questions").hasClass("d-block") ===true){
        $("#10.content-btn-help i.fas").removeClass("fa-chevron-down");
        $("#10.content-btn-help i.fas").addClass("fa-chevron-up");
    }
    else{
        $("#10.content-btn-help i.fas").addClass("fa-chevron-down");
        $("#10.content-btn-help i.fas").removeClass("fa-chevron-up");
    }
})
$("#11").click(function(){
    $('#11 ~ .content-quick-questions').toggleClass("d-block");
    if($("#11 ~ .content-quick-questions").hasClass("d-block") ===true){
        $("#11.content-btn-help i.fas").removeClass("fa-chevron-down");
        $("#11.content-btn-help i.fas").addClass("fa-chevron-up");
    }
    else{
        $("#11.content-btn-help i.fas").addClass("fa-chevron-down");
        $("#11.content-btn-help i.fas").removeClass("fa-chevron-up");
    }
})
$("#12").click(function(){
    $('#12 ~ .content-quick-questions').toggleClass("d-block");
    if($("#12 ~ .content-quick-questions").hasClass("d-block") ===true){
        $("#12.content-btn-help i.fas").removeClass("fa-chevron-down");
        $("#12.content-btn-help i.fas").addClass("fa-chevron-up");
    }
    else{
        $("#12.content-btn-help i.fas").addClass("fa-chevron-down");
        $("#12.content-btn-help i.fas").removeClass("fa-chevron-up");
    }
})

//function dropdow menu con menu top cajas
$("#redirectionEmpresa").click(function(){
    $("#pills-hogar-tab").removeClass("active");
    $("#pills-empresa-tab").addClass("active");
    $("#pills-hogar").removeClass("show");
    $("#pills-hogar").removeClass("active");
    $("#pills-empresa").addClass("active");
    $("#pills-empresa").addClass("show");
})
$("#redirectionHogar").click(function(){
    $("#pills-empresa-tab").removeClass("active");
    $("#pills-hogar-tab").addClass("active");
    $("#pills-empresa").removeClass("show");
    $("#pills-empresa").removeClass("active");
    $("#pills-hogar").addClass("show");
    $("#pills-hogar").addClass("active");
})
/*----------------------
    menu header
----------------------*/
$(document).ready(function() {	
    var sizeScreen = window.matchMedia("(min-width: 768px)")//se crea una variable que determina el tama«Ðo de la pantalla
    cambiarMenu(sizeScreen) // llama  a la funcion
    sizeScreen.addListener(cambiarMenu) // a la  funcion se le agrega como variable x
    function cambiarMenu(sizeScreen) {
        if (sizeScreen.matches) { // if media "se cumple"
            $(window).scroll(function() {        
                var scrollTop = $(window).scrollTop();//empieza la funcion a determinar el scrolltop   
                if (scrollTop >= 2) {
                    $("#menu-color").addClass("menu-white");
                }else{
                    $("#menu-color").removeClass("menu-white");
                }
            });
          //evalua si se carga la pagina y elimina la clase si al cargar el scrolltop no es mayor o igual a 0.5
            $(window).on('load',function() {        
                var win = $(this);
                var scrollTop = $(window).scrollTop();//empieza la funcion a determinar el scrolltop   
                if(scrollTop >= 2){
                    $("#menu-color").addClass("menu-white");
                }
            });
            //animations
            var tl = gsap.timeline();
            tl.fromTo(".carousel-caption", {x:-600},{duration: 1,x:0,delay:0.2})
            .fromTo(".animation-img-1",{y:-100, opacity:0}, { opacity:1, duration: 1, y: 0, ease: "bounce",stagger:0.1,delay:0.2});
            
            gsap.timeline({
                scrollTrigger:{
                    trigger:".box-animation-scroll-1",
                    start:"center center",
                    end:"bottom top",
                    markers:false,
                    scrub:true,
                    pin: true
                }
            })
            .from(".animation-text-left-1",{ x : innerWidth * 1})
            .fromTo(".animation-text-left-2",{ opacity: 0},{opacity:1})
            .from(".animation-text-left-3",{ x : innerWidth * -1});
            
            gsap.timeline({
                scrollTrigger:{
                    trigger:".animation-topcajas",
                    start:"center center",
                    end:"bottom top",
                    markers:false,
                    scrub:true,
                    pin: true
                }
            })
            .fromTo(".animation-card-left-1",{ scale:0},{scale:1})
            .fromTo(".animation-card-left-2",{ opacity: 0},{opacity:1})
            .fromTo(".animation-card-left-3",{ scale:0},{scale:1});

            gsap.timeline({
                scrollTrigger:{
                    trigger:".animation-testimonials",
                    start:"center center",
                    end:"bottom top",
                    markers:false,
                    scrub:true,
                    pin: true
                }
            })
            .fromTo(".testimonials",{opacity:0,rotate:180},{opacity:1,rotate:360})
            .fromTo(".animation-title-testi",{opacity:0},{opacity:1})
            .fromTo(".animation-scale",{scale:0},{scale:1,stagger:0.5});
        }else{
            $(window).scroll(function() {        
                var scrollTop = $(window).scrollTop();//empieza la funcion a determinar el scrolltop   
                if (scrollTop >= 2) {
                    $("#menu-color").addClass("menu-white");
                }else{
                    $("#menu-color").removeClass("menu-white");
                }
            });
        }
    };
});

