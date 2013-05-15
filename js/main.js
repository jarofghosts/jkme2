!function ($) {

  $(function () {

    $(document)
      .on('mouseenter', 'a', function () {
        this.style.zIndex = 2;
      })
      .on('mouseleave', 'a', function () {
        this.style.zIndex = 1;
      });

  });

}(jQuery);