song_hp1="";
song_pp2="";
leftWristX=0;
leftWristY=0;
leftWristScore=0;
rightWristX=0;
rightWristY=0;
rightWristScore=0;
songHP1_status="";
songPP2_status="";

function preload()
{
    song_hp1=loadSound("harry_potter.mp3");
    song_pp2=loadSound("peter_pan.mp3");
}

function setup()
{
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded()
{
    console.log("PoseNet is initialized");
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        leftWristScore=results[0].pose.keypoints[9].score;
        console.log("left wrist x= "+leftWristX+" left wrist y= "+leftWristY);
        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        rightWristScore=results[0].pose.keypoints[9].score;
        console.log("right wrist x= "+rightWristX+" right wrist y= "+rightWristY);
    }
}

function draw()
{
    image(video,0,0,600,500);

    songHP1_status=song_hp1.isPlaying();
    fill("#FF0000");
    stroke("#FF0000");

    if (leftWristScore>0.1)
    {
        circle(leftWristX,leftWristY,20);
        song_pp2.stop();

        if (songHP1_status==false)
        {
            song_hp1.play();
            document.getElementById("song").innerHTML="Song: Harry Potter";
        }
    }

}

function stop()
{
    song_hp1.stop();
    song_pp2.stop();
    document.getElementById("song").innerHTML="Song: ";
}


