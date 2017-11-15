$(document).ready(function() {
  $(window).scroll(function() {
    if (($(window).scrollTop()+$(window).height()) >= $('body').height()-639) {
      console.log("fjkf")
        $(".catalog__total-result").removeClass("catalog__total-result--fixed")
    } else {
        $(".catalog__total-result").addClass("catalog__total-result--fixed")
    }
  })
})
