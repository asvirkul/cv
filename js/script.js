jQuery(document).ready(function() {

  function parallax(event) {
    console.log(event);
    this.querySelectorAll(".layer").forEach((layer) => {
      let speed = layer.getAttribute("data-speed");
      layer.style.transform = `translate(${(event.clientX * speed) / 1000}px, ${
        (event.clientY * speed) / 1000
      }px)`;
    });
  }
  document.addEventListener("mousemove", parallax);

  $('.materialboxed').materialbox();

/*   $('a').prop('target', '_blank');
  $('a[href*="motivation.letter"').prop('target', ''); */

  $('.slider-items').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          centerMode: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.js-tilt').tilt({
    glare: true,
    maxGlare: .5
  });

  $('.scrollspy').scrollSpy();

  $('.sidenav').sidenav();
})
