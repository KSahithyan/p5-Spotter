// For Best Performance
p5.disableFriendlyErrors = true;

// Other Code
var img; // BG Image
var pixels = []; // Not-Valid Pixels
var spots = []; // Created Spots
var wrong = 1; // Count of Error Pixels drawn
var default_stroke = 255; // normal stroke
var error_stroke = 'red'; // error stroke
var d = 2; // Distance to next point
// var speak_ai;

function preload() {
	img = loadImage('assets/Sahithyan.png');
}

// Keyboard Controles

function setup() {
	// speak_ai = new p5.Speech();
	// speak_ai.speak("Program Started");
	// img.resize(img.width/1.8, img.height/1.8);
	createCanvas(img.width, img.height);
	var density = displayDensity();
  pixelDensity(1);
	background(0);
	img.loadPixels();

	for (i = 0; i < floor(random(1, 5)); i++) {
		spots.push(new Spot(width/2, height/2));
	}

	for (x = 0; x < img.width; x++) {
		for (y = 0; y < img.height; y++) {
			var i = x + y * img.width;
			var pix = img.pixels[i * 4];
			var b = brightness([pix]);
			if (b > 0) {
				// stroke(0,255,0);
				// point(x, y);
				pixels.push(createVector(x, y));
			}
			// This make my pc stuck...
			// var c = get(pix.x, pix.y);
			// if (c[0] == 0 && c[1] == 0 && c[2] == 0) {
			// 	pixels.push(createVector(x, y));
			// }
		}
	}
	// frameRate(120);
	console.log(img.width);
  console.log(img.height);
  console.log("pixels", img.pixels.length);
  console.log(density)
}

function draw() {
	if (floor(random(1, 10)) in [2, 3, 5, 7] && spots.length < 8) {
		console.log('Adding new point');
		randomSpot = pixels[floor(random(0, pixels.length))];
		spots.push(new Spot(randomSpot.x, randomSpot.y));
	}
	document.getElementById('FPS').innerHTML = int(frameRate()) + ' FPS';
	for (var i = 0; i < spots.length; i++) {
		spots[i].move(-1);
	}
	// if (keyIsDown(UP_ARROW)) { spots[random(spots.length - 1)].move(2); }
	// if (keyIsDown(DOWN_ARROW)) { spots[random(spots.length - 1)].move(3); }
	// if (keyIsDown(LEFT_ARROW)) { spots[random(spots.length - 1)].move(1); }
	// if (keyIsDown(RIGHT_ARROW)) { spots[random(spots.length - 1)].move(0); }
}

function mouseReleased() {
	spots.push(new Spot(floor(mouseX), floor(mouseY)));
}

function keyPressed() {
	var SPACE = 32;
	if (keyCode == SPACE) {
		spots.push(new Spot(width/2, height/2));
	}
}
