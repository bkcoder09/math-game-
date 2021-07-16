canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

last_X_pos, last_Y_pos;

mouseevent="empty";

color="aquamarine";
line_width=3;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    mouseevnt="mousedown";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mousevent="mouseup";  
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mousevent="mouseleave"; 
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    current_X_pos = e.clientX-canvas-offsetLeft;
    current_Y_pos = e.clientY-canvas-offsetTop;
    last_X_pos = "";
    last_Y_pos = "";
    if(mouseevent == "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle="color";
        ctx.lineWidth=3;
        ctx.moveTo(last_X_pos, last_Y_pos);
        ctx.lineTo(current_X_pos, current_Y_pos);
        ctx.stroke();
    }
}
var mouseevent="mousemove";

var last_pos_of_x, last_pos_of_y;
var width = screen.width;
var new_width = screen.width-70;
var new_height = screen.height-300;
if (width<992){
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
}
canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e){
    console.log("my_touchstart");
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("pen_width").value;
    last_position_of_x = e.touches[0].clientX-canvas.offsetLeft; 
    last_position_of_y = e.touches[0].clientY-canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e){
    current_position_of_x = e.touchesX[0]-canvas-offsetLeft;
    current_position_of_y = e.touchesY[0]-canvas-offsetTop;
    
    ctx.beginPath();
    ctx.strokeStyle="color";
    ctx.lineWidth=3;
    moveTo(last_position_of_y);
    lineTo(current_position_of_x, current_position_of_y);
    ctx.stroke()
    last_position_of_x = current_position_of_x;
    last_position_of_y = current_position_of_y;
}