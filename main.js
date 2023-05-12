img="";
status="";
objects=[];

function preload(){
img=loadImage('gojo.webp');
}

function setup(){
canvas=createCanvas(380,380);
canvas.center();
video=createCapture(VIDEO);
video.size(380,380);
video.hide();

}

function start(){
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
}
function modelLoaded(){
    console.log("modelLoaded!!!");
    status=true;
    objectDetector.detect(video,gotresults);

    
}

function gotresults(error,results){
    if (error){
        console.log(error);

    }
  console.log(results);
objects=results;
}
function draw(){
image(video,0,0,380,380);


if(status!=""){
    for(i=0;i<=objects.length;i++){
        document.getElementById("no._of_objects").innerHTML = "Number of objects detected are : "+ objects.length;
        document.getElementById("status").innerHTML ="Status = Baby Detected";
        fill("#FF0000");
        percent=floor(objects[i].confidence*100);
        text(objects[i].label+" "+ percent+"%",objects[i].x+15,objects[i].y+15);
        noFill();
        stroke("#FF0000");
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
    }
}

}