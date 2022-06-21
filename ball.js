status="";
function preload(){
img=loadImage("ball.jpg")
object=[];
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
   /* fill('red')
    text("ball",45,75)
    noFill()
    stroke('red')
    rect(30,60,450,350)

    fill("red")
    text("ball",320,120)
    noFill()
    stroke("red")
    rect(300,90,270,320)*/

    if(status!=""){
        for(i=0; i<object.length; i++){
            document.getElementById("status").innerHTML="Status = Object Detected";
            fill("red");
            percent= floor(object[i].confidence*100);
            text(object[i].label + " " + percent +"%", object[i].x, object[i].y);
            noFill();
            stroke("red");
            rect(object[i].x,object[i].y, object[i].width, object[i].height);

        }

        
    }
}
    
function back(){
    window.location="index.html"
}