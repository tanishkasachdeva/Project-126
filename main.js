song_hp="";
song_pp="";

function preload()
{
    song_hp=loadSound("harry_potter.mp3");
    song_pp=loadSound("peter_pan.mp3");
}

function setup()
{
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video,0,0,600,500);
}

function end()
{
    song_hp.stop();
    song_pp.stop();
}
