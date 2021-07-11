noseX = 0;
noseY = 0;
difference = 0;
wristLeftX = 0;
wristRightX = 0;

function setup() {

    canvas = createCanvas(500, 400)
    canvas.position(850, 250)

    video = createCapture(VIDEO)
    video.size(500, 400)

    video.position(200, 250)

    posenet = ml5.poseNet(video, modelLoaded)
    posenet.on('pose', GotResult)

}

function modelLoaded(){
console.log("model Loaded successfully")
}

function GotResult(results){

if(results.length>0){
    console.log (results)
    noseX=results[0].pose.nose.x
    noseY=results[0].pose.nose.y
    wristLeftX=results[0].pose.leftWrist.x
    wristRightX=results[0].pose.rightWrist.x
    difference=floor(wristLeftX-wristRightX)
}

}

function draw(){
textc=document.getElementById("text_color").value 
text_in=document.getElementById("text_input").value
if(text_in==""){

text_in="hello world"

}
background("yellowgreen")
document.getElementById("size").innerHTML=difference+" px "
fill(textc)
textSize(difference)
text(text_in,noseX,noseY)
}