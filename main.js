canvas=document.getElementById("myCanvas");

ctx=canvas.getContext("2d");

Images=["mars.jpg","Mars_2.jpg","Mars_3.jpg","Mars_4.jpg","Mars_5.jpg"];

random_number=Math.floor(Math.random()*5);

rover_width=100;

rover_height=90;

rover_x=10;

rover_y=10;

mars_bg=Images[random_number];

rover_img="rover.png";

function add(){
    bg_img_tag=new Image();
    bg_img_tag.onload=upload_background;
    bg_img_tag.src=mars_bg;

    rover_img_tag=new Image();
    rover_img_tag.onload=upload_rover;
    rover_img_tag.src=rover_img;     

}

function upload_background(){

    ctx.drawImage(bg_img_tag, 0, 0, canvas.width, canvas.height);
}

function upload_rover(){

    ctx.drawImage(rover_img_tag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", myKey_down)

function myKey_down(e){

    key_pressed=e.keyCode;
    console.log(key_pressed);
    if(key_pressed=="38"){
        console.log("UP");
        up();
    }
    if(key_pressed=="40"){
        console.log("Down");
        down();
    }
    if(key_pressed=="37"){
        console.log("LEFT");
        left();
    }

    if(key_pressed=="39"){
        console.log("RIGHT");
        right();
    }
}

function up(){

    if(rover_y>=0){

        rover_y=rover_y-10;
        console.log("When Up Arrow Is Clicked x ="+ rover_x +" , y= "+ rover_y);
        upload_background();
        upload_rover();
    }
}

function down(){

if(rover_y<=500){
    rover_y=rover_y+10;
    console.log("When Down Arrow Is Clicked x ="+ rover_x +" , y= "+ rover_y);
    upload_background();
    upload_rover();
}
}

function left(){

    if(rover_x>=0){
        rover_x=rover_x-10;
        console.log("When Left Arrow Is Clicked x ="+ rover_x +" , y= "+ rover_y);
        upload_background();
        upload_rover();

    }

}

function right(){

    if(rover_x<=700){
        rover_x=rover_x+10;
        console.log("When Right Arrow Is Clicked x ="+ rover_x +" , y= "+ rover_y);
        upload_background();
        upload_rover();
   
    }

}