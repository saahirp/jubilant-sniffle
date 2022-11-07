song1 = "music.mp3";
song2 = "music2.mp3";
rightwristx = 0;
rightwristy = 0;
leftwristx = 0;
leftwristy = 0;
leftwristscore = 0;
songny = "";
function setup(){
    canvas = createCanvas(505, 505);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function preload(){
    loadSound("music.mp3");
    loadSound("music2.mp3");
}

function draw(){
    image(video, 0, 0, 600, 500);
    stroke("#FF0000");
    fill("#FF0000");
    song1.isPlaying();
    if(leftwristscore > 0.2){
    circle(leftwristx, leftwristy, 20);
    song2.stop();
    if(song1 == "false"){
        song1.play();
        song = "song1";
    }
}
}
function modelLoaded(){
    console.log("Model Loaded!");
}
function gotPoses(results){
    if(results.length > 0){
        leftwristscore = results[0].pose.keypoints[9].score;
        console.log(results);
        leftwristx = results[0].pose.leftWrist.x;
        leftwristy = results[0].pose.leftWrist.y;
        console.log("leftWristX = "+leftwristx+"  leftWristY = "+leftwristy);
        rightWristx = results[0].pose.leftWrist.x;
        rightWristy = results[0].pose.leftWrist.y;
        console.log("rightWristX = "+rightwristx+"  rightWristY = "+rightwristy);
    }
}
