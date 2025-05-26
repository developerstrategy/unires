
console.log("Carga del index.js");


$({ Counter: 0 }).animate({
  Counter: $('.animated-counter').text()
}, {
  duration: 1000,
  easing: 'swing',
  step: function() {
    $('.animated-counter').text(Math.ceil(this.Counter));
  }
});

