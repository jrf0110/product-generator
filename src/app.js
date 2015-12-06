var generator = require('./generator');

document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('genre-form').addEventListener('submit', function( e ){
    e.preventDefault();

    var result = document.getElementById('genre-result');

    result.innerHTML = generator.get();
  });
});