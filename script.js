$("#carouselExample").on("slide.bs.carousel", function (e) {
  var $e = $(e.relatedTarget);
  var idx = $e.index();
  var itemsPerSlide = 4;
  var totalItems = $(".carousel-item").length;

  if (idx >= totalItems - (itemsPerSlide - 1)) {
    var it = itemsPerSlide - (totalItems - idx);
    for (var i = 0; i < it; i++) {
      // append slides to end
      if (e.direction == "left") {
        $(".carousel-item").eq(i).appendTo(".carousel-inner");
      } else {
        $(".carousel-item").eq(0).appendTo(".carousel-inner");
      }
    }
  }
});

$(document).ready(function () {
  /* show lightbox when clicking a thumbnail */
  $("a.thumb").click(function (event) {
    event.preventDefault();
    var content = $(".modal-body");
    content.empty();
    var title = $(this).attr("title");
    $(".modal-title").html(title);
    content.html($(this).html());
    $(".modal-profile").modal({ show: true });
  });

  var myCollapsible = document.getElementById("navbarNavAltMarkup");
  myCollapsible.addEventListener("show.bs.collapse", function () {
    $(
      ".navbar-toggler"
    ).html(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
  <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
</svg>`);
  });
  myCollapsible.addEventListener("hidden.bs.collapse", function () {
    $(".navbar-toggler").html('<span class="navbar-toggler-icon"></span>');
  });

  $(".owl-products").owlCarousel({
    loop: true,
    dots: true,
    margin: 24,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 1,
        nav: false,
      },
      1000: {
        items: 3,
      },
      1100: {
        items: 3,
        nav: true,
        navText: [
          `<a class="carousel-control-next" >
                    <i class="lnr lnr-arrow-right arrow"></i>
                </a>
                `,
          `
                <a class="carousel-control-prev">
                    <i class="lnr lnr-arrow-left arrow"></i>
                </a>
                `,
        ],
      },
    },
  });
});
