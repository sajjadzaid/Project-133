status="";
function preload(){
img=loadImage("microwave.jpg")
}

function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status:Detecting Object"
}

function modelLoaded(){
    console.log("CocoSSD is initialized");
    status=true;
    objectDetector.detect(img, gotresult);

}

function gotresult(error,result){
    if(error){
        console.log(error)
    }
    else{
        console.log(result)
    }
}


function draw(){
    image(img,0,0,640,420)
    fill('red')
    text("microwave",45,75)
    noFill()
    stroke('red')
    rect(30,60,450,350)

    fill("red")
    text("microwave",320,120)
    noFill()
    stroke("red")
    rect(300,90,270,320)
}
    
function back(){
    window.location="index.html"
}