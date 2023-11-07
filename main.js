function setup(){
    canvas=createCanvas(280,280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifycanvas);
    synth=window.speechSynthesis;


}

function preload(){
    classifier=ml5.imageClassifier("DoodleNet");


}

function clearCanvas(){
    background("white");

}
function draw(){
    strokeWeight(12);
    stroke(0);
    if(mouseIsPressed){
        line(pmouseX, pmouseY, mouseX, mouseY)
    }
}
function classifycanvas(){
    classifier.classify(canvas, gotresult);
    
}

function gotresult(error, results){
    if(error){
        console.error(error)
    }
    else{
        console.log(results)
        document.getElementById("label").innerHTML="label - "+results[0].label;
        document.getElementById("confidence").innerHTML="Confidence - "+Math.floor(results[0].confidence*100)+"%";
        utterthis=new SpeechSynthesisUtterance(results[0].label);
        synth.speak(utterthis)
    }

}