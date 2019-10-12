$(document).ready(function($) {
  // delegate calls to data-toggle="lightbox"
  $(document).on(
    "click",
    '[data-toggle="lightbox"]:not([data-gallery="navigateTo"]):not([data-gallery="example-gallery-11"])',
    function(event) {
      event.preventDefault();
      closeMenu();
      return $(this).ekkoLightbox();
    }
  );

  // disable wrapping
  $(document).on(
    "click",
    '[data-toggle="lightbox"][data-gallery="example-gallery-11"]',
    function(event) {
      event.preventDefault();
      return $(this).ekkoLightbox({
        wrapping: false
      });
    }
  );

  //Programmatically call
  $("#open-image").click(function(e) {
    e.preventDefault();
    $(this).ekkoLightbox();
  });
  $("#open-youtube").click(function(e) {
    e.preventDefault();
    $(this).ekkoLightbox();
  });

  // navigateTo
  $(document).on(
    "click",
    '[data-toggle="lightbox"][data-gallery="navigateTo"]',
    function(event) {
      event.preventDefault();

      return $(this).ekkoLightbox({
        onShown: function() {
          this.modal().on(
            "click",
            ".modal-footer a",
            function(e) {
              e.preventDefault();
              this.navigateTo(2);
            }.bind(this)
          );
        }
      });
    }
  );

  /**
   * Documentation specific - Name and description
   */

  anchors.options.placement = "left";
  anchors.add("h3");
  $("code[data-code]").each(function() {
    var $code = $(this),
      $pair = $('div[data-code="' + $code.data("code") + '"]');

    $code.hide();
    var text = $code
      .text($pair.html())
      .html()
      .trim()
      .split("\n");
    var indentLength = text[text.length - 1].match(/^\s+/);
    indentLength = indentLength ? indentLength[0].length : 24;
    var indent = "";
    for (var i = 0; i < indentLength; i++) indent += " ";
    if ($code.data("trim") == "all") {
      for (var i = 0; i < text.length; i++) text[i] = text[i].trim();
    } else {
      for (var i = 0; i < text.length; i++)
        text[i] = text[i].replace(indent, "    ").replace("    ", "");
    }
    text = text.join("\n");
    $code.html(text).show();
  });

  /*  Side Menu*/

  /* $(".menuDiv").hide();*/
  $(".navbar-toggler").click(function() {
    if (this.value == "false") {
      //this.value = true;
      closeMenu();
      //  console.log("false");
    } else {
      this.value = false;
      $(".navbar-toggler")
        .removeClass("closemenu")
        .addClass("openmenu");
      moveMenu(0, -300);
      // console.log("true");
    }
  });

  function closeMenu() {
    $(".navbar-toggler").attr("value", "true");
    $(".navbar-toggler")
      .addClass("closemenu")
      .removeClass("openmenu");
    moveMenu(-300, 0);
  }

  function moveMenu(paramMenu, paramWrap) {
    $(".menuDiv").animate({
      right: paramMenu + "px",
      opacity: "1"
    });
    $("#content").animate({
      margin: "0px " + -paramWrap + "px 0px " + paramWrap + "px"
    });
  }
});

/*Sorting images  */

$(function() {
  var selectedClass = "";
  $(".filter").click(function() {
    selectedClass = $(this).attr("data-rel");
    $("#gallery").fadeTo(100, 0.1);
    $("#gallery div")
      .not("." + selectedClass)
      .fadeOut()
      .removeClass("animation");
    setTimeout(function() {
      $("." + selectedClass)
        .fadeIn()
        .addClass("animation");
      $("#gallery").fadeTo(300, 1);
    }, 300);
  });
});

/* Sorting images ends */
