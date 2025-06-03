
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

document.addEventListener('scroll', function() {
  if (window.scrollY > 50) {
    document.body.classList.add('has-menu');
  } else {
    document.body.classList.remove('has-menu');
  }
});


