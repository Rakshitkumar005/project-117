var dog=0;
var cat=0;
var cow=0;
var lion=0;

function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/rGQgP-h7y/model.json',modelReady)
 }

 function modelReady(){
    classifier.classify(gotResults);
 }

 function gotResults(error,results){
    if(error){
console.log(error);
    }
    else{
        console.log(results);
        random_number_r=Math.floor(Math.random()*255)+1;
        random_number_g=Math.floor(Math.random()*255)+1;
        random_number_b=Math.floor(Math.random()*255)+1;

        document.getElementById("detected").innerHTML="Detected Dog - "+dog+"Detected Cat - "+cat+"Detected Cow - "+cow+"Detected Lion - "+lion;
        document.getElementById("detected").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        document.getElementById("animal_voices").innerHTML="Detected Voice Is Of - "+results[0].label;
        document.getElementById("animal_voices").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        img=document.getElementById("animal_img");

        if(results[0].label=="Meowing"){
img.src="https://shravaripatil.github.io/Sound_controlled_animals/meow.gif";
cat=cat + 1;
        }
        else if(results[0].label=="Barking"){
img.src="https://shravaripatil.github.io/Sound_controlled_animals/bark.gif";
cat=cat + 1;
        }
        else if(results[0].label=="Roaring"){
            img.src="http://clipart-library.com/images/kc8kgyXMi.gif";
            lion=lion + 1;
        }
        else if(results[0].label=="Mooing"){
            img.src="https://media3.giphy.com/media/eeN1xWYujLSvufhMwY/200w.gif?cid=6c09b952hxn8gtgzvqzh6qypyfpo4wv3g5yrfgazjyif0bly&rid=200w.gif&ct=s";
            cow=cow + 1;
        }
    }
 }