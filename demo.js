(function ($) {
  'use strict';

  $(function () {
    var colors = [
      '#1abc9c',
      '#2ecc71',
      '#3498db',
      '#9b59b6',
      '#34495e',
      '#16a085',
      '#27ae60',
      '#2980b9',
      '#8e44ad',
      '#2c3e50',
      '#f1c40f',
      '#e67e22',
      '#e74c3c',
      '#ecf0f1',
      '#95a5a6',
      '#f39c12',
      '#d35400',
      '#c0392b',
      '#bdc3c7',
      '#7f8c8d'
    ];
    var $meta = $('[name=theme-color]');

    var col_len = colors.length;
    var index = 0;

    setInterval(function () {
      var next = index + 1;
      if (next > col_len) {
        next = 0;
      }
      $meta.attr('content', colors[index]);
      $('body').css('background-color', colors[index]);
      index = next;
    }, 500);
  });
}(this.jQuery));
