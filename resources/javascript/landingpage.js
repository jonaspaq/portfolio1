// var runner = setInterval(checkLoad, 1500);
// function checkLoad() {
//   if(document.getElementsByTagName('body')[0] !== undefined){
//     $("#loader").removeClass("d-flex");
//     document.getElementById("loader").style.display = "none";
//     document.getElementById("content").style.display = "block";
//     clearInterval(runner);
//   }
// }

function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
  
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
  
    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }

  $(window).on("load scroll",function(){
    if (isScrolledIntoView('.secondBg') === true) {
      $('.first').addClass('slideInLeft');
      $('.second').addClass('slideInUp');
      $('.third').addClass('slideInRight');
    }
    // else{
    //   $('.first').removeClass('slideInLeft');
    //   $('.second').removeClass('slideInUp');
    //   $('.third').removeClass('slideInRight');
    // }
  
  });