/*eslint-disable*/
$(document).ready(function(){
  /*/체크박스디자인 div추가
  $('input[type=checkbox] + label').prepend('<div></div>');
  $('input[type=radio] + label').prepend('<div></div>');
  */

  //사이드바
  $(function(){
    $(".lnb > div:not("+$(".side-icon > a.active").attr("href")+")").hide();
    $(".side-icon > a").click(function(){
      $(".side-icon > a").removeClass("active");
      $(this).addClass("active");
      $(".lnb > div").slideUp(200);
      $($(this).attr("href")).slideDown(200);
      return false;
    })
  })

  $(".sidebar-dropdown > a").click(function() {
    $(".sidebar-submenu").slideUp(200);
    if (
        $(this)
            .parent()
            .hasClass("active")
    ) {
      $(".sidebar-dropdown").removeClass("active");
      $(this)
          .parent()
          .removeClass("active");
    } else {
      $(".sidebar-dropdown").removeClass("active");
      $(this)
          .next(".sidebar-submenu")
          .slideDown(200);
      $(this)
          .parent()
          .addClass("active");
    }
  });

  $("#close-sidebar").click(function() {
    $(".page-wrapper").removeClass("toggled");
  });
  $("#show-sidebar").click(function() {
    $(".page-wrapper").addClass("toggled");
  });

  //사이드바
  var w = $(window).width();
  if(w < 950){
    $(".page-wrapper").removeClass("toggled");
  }
  //이미지 업로드
  function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function(e) {
        $('#imagePreview').css('background-image', 'url('+e.target.result +')');
        $('#imagePreview').hide();
        $('#imagePreview').fadeIn(650);
      }
      reader.readAsDataURL(input.files[0]);
    }
  }
  $("#imageUpload").change(function() {
    readURL(this);
  });
  //닫기
  $('button.slideup1').click( function() {
    $('div.slideform1').slideToggle();
    if( $(this).html() == '닫기' ) {
      $(this).html('열기');
    }
    else {
      $(this).html('닫기');
    }
  } );
  $('button.slideup2').click( function() {
    $('div.slideform2').slideToggle();
    if( $(this).html() == '닫기' ) {
      $(this).html('열기');
    }
    else {
      $(this).html('닫기');
    }
  } );
  $('button.slideup3').click( function() {
    $('div.slideform3').slideToggle();
    if( $(this).html() == '닫기' ) {
      $(this).html('열기');
    }
    else {
      $(this).html('닫기');
    }
  } );
  //탭메뉴

  $('ul.tabs li').click(function(){
    var tab_id = $(this).attr('data-tab');

    $('ul.tabs li').removeClass('current');
    $('.tab-content').removeClass('current');

    $(this).addClass('current');
    $("#"+tab_id).addClass('current');
  })

});