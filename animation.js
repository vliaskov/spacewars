


var canvas = null;
var ctx = null;
var frameRate = 1000/30;
var frame = 0;
var assets = [
              'x-wing.jpg'
             ];
var frames = [];

var onImageLoad = function(){
    console.log("IMAGE!!!");
    for (i = 0; i < assets.length; i++) {
	if (frames[i] == this) {
         	frames[i].width = this.naturalWidth;
        	frames[i].height = this.naturalWidth;
	}
    }
};

var setup = function() {
    body = document.getElementById('body');
    canvas = document.createElement('canvas');

    ctx = canvas.getContext('2d');
    
    canvas.width = 100;
    canvas.height = 100;

    body.appendChild(canvas);

    // Load each image URL from the assets array into the frames array 
    // in the correct order.
    // Afterwards, call setInterval to run at a framerate of 30 frames 
    // per second, calling the animate function each time.
    // YOUR CODE HERE
    for (i = 0; i < assets.length; i++) {
        frames.push(new Image());
        frames[i].onload = onImageLoad;
        frames[i].src=assets[i];
	console.log("load %d image", i);
    }
    setInterval(animate, frameRate);
    document.onkeypress = keyControl;
};


var keyControl = function(e) {
    console.log("%d pressed", e.keyCode);
};

var animate = function(){
    console.log("animate");
    // Draw each frame in order, looping back around to the 
    // beginning of the animation once you reach the end.
    // Draw each frame at a position of (0,0) on the canvas.
    
    // Try your code with this call to clearRect commented out
    // and uncommented to see what happens!
    //
    ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.translate(10, 10);
    ctx.translate(frames[frame].width/2, frames[frame].height/2);
    ctx.rotate(0.1);
    ctx.drawImage(frames[frame], -frames[frame].width/2, -frames[frame].height/2);
    ctx.translate(-frames[frame].width/2, -frames[frame].height/2);
    ctx.translate(-10, -10);

    frame = (frame + 1 ) % frames.length;
    
};

setup();


