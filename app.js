function drawBox() {
  var canvas = document.getElementById('myCanvas');
  var context = canvas.getContext('2d');
  
  context.fillStyle = 'red';
  context.fillRect(20,10,250,175);
}

drawBox();