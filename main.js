leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(400, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background('#FFC0CB');
    textSize(10);
    fill("#FFC0CB");
    text(Vaidik, 20, 100);
}

function modelLoaded() {
    console.log("Posenet is initialized!");
}

function gotPoses(results) {
    if (results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX)
        console.log("leftWrist = "+leftWristX+"rightWrist = "+rightWristX);
        document.getElementById("font-size").innerHTML = difference;
    }
}