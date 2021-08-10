var mouseEvent = "empty";
var Last_Pos_X, Last_Pos_Y;

Canvas= 
document.getElementById("myCanvas");
ctx = Canvas.getContext("2d");
color= "black";
width_line= 1;
radius= 40;

Canvas.addEventListener("mousedown", mymousedown );

function mymousedown(e){
    color=document.getElementById("Color").value;
    radius=document.getElementById("Radius").value;
    width=document.getElementById("Width").value;
    mouseEvent= "mousedown";
}

Canvas.addEventListener("mousemove", mymousemove );

function mymousemove(e){
    Current_Pos_X= e.clientX - Canvas.offsetLeft;
    Current_Pos_Y= e.clientY - Canvas.offsetTop;
    
    if (mouseEvent == "mousedown"){
        console.log("The last position of X and Y")
        console.log("x = " + Last_Pos_X + "y = " + Last_Pos_Y);
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth= width_line;
        ctx.arc(Last_Pos_X, Last_Pos_Y, radius, 0, 2 *Math.PI);

        console.log("The last position of X and Y")
        console.log("x = " + Last_Pos_X + "y = " + Last_Pos_Y);
        ctx.moveTo(Last_Pos_X, Last_Pos_Y);

        console.log("The current position of X and Y")
        console.log("x = " + Current_Pos_X + "y = " + Current_Pos_Y);
        ctx.stroke();
    }
}

function clearArea(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

Canvas.addEventListener("mouseup", mymouseup );

function mymouseup(){
mouseEvent= "mouseup";

}

Canvas.addEventListener("mouseleave", mymouseleave );

function mymouseleave(){
mouseEvent= "mouseleave";

}
