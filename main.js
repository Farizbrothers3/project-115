
function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function draw() {
  circle(30, 30, 20);
  rect(30, 20, 55, 55, 20);
ellipse(56, 46, 55, 55);
}

function take_snapshot(){    
  save('myFirstp5.jsProject.png');
}
