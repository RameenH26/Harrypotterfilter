function preload() {
    scar = loadImage("Untitled.png ");
    glasses = loadImage("glasses.png");
   }
    function setup() {
        canvas = createCanvas(400, 400);
        canvas.center();
        video = createCapture(VIDEO);
        video.size(400, 400);
        video.hide();
   
        poseNet = ml5.poseNet(video, modelLoaded);
       poseNet.on('pose', gotPoses);
   }
    function draw() {
        image(video, 0 ,0, 400, 400);
       //images
       image(scar, scarPosX - 15, scarPosY - 65, 20, 30);
       image(glasses, eyePosX - 20, eyePosY - 30, 100, 60);
    }
   
    function take_snapshot() {
        save('harryPotter.png');
    }
    function modelLoaded() {
       console.log('PoseNet is initialized');
   }
   scarPosX = 0;
   scarPosY = 0;
   eyePosX = 0;
   eyePosY = 0;
   
   function gotPoses(results) {
       if(results.length > 0) {
           console.log(results);
           scarPosX = results[0].pose.rightEye.x;
           scarPosY = results[0].pose.rightEye.y;
           eyePosX = results[0].pose.rightEye.x;
           eyePosY = results[0].pose.rightEye.y;
           console.log("scar x = " + scarPosX);
           console.log("scar y = " + scarPosY);
           console.log("glasses x = " + eyePosX);
           console.log("glasses y = " + eyePosY);
       }
   }
   