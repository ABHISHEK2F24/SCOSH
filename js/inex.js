(function() {
  $('.navigation-item > a').on('mouseover', function(event) {
    event.preventDefault();
    $('.navigation-item').removeClass('active');
    return $(this).parent().addClass('active');
  });

}).call(this);