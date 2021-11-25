function preload(){

}
function setup(){
    canvas=createCanvas(300,600);
    canvas.position(100,250);
    video=createCapture(VIDEO);
    video.hide();
    tintcolor='';
}
function draw(){
    image(video,0,0,400,400);
    tint(tintcolor);
}
function taj(){
    tintcolor=document.getElementById("input1").value;
}
function picture(){
    save('student.png');
}