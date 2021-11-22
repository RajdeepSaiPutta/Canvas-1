canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
colour="purple";
ctx.beginPath();
ctx.strokeStyle=colour;
ctx.linewidth=2;
ctx.arc(399,200,40,0,2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedodwn",my_mousedown);
function my_mousedown(e){
    colour=document.getElementById("colour").value;
mouse_x=e.clientX-canvas.offsetLeft;
mouse_y=e.clientY-canvas.offsetTop;
circle(mouse_x,mouse_y);
}
function circle(mouse_x,mouse_y){
    ctx.beginPath();
    ctx.strokeStyle=colour;
    ctx.linewidth=2;
    ctx.arc(mouse_x,mouse_y,40,0,2*Math.PI);
    ctx.stroke();
    
}function erase(){
ctx.clearRect(0,0,canvas.width,canvas.height);

}