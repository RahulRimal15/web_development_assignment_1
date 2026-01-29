let box=document.getElementById("box");
let colorPicker=document.getElementById("colorPicker");
let resetBtn=document.getElementById("resetBtn");
let defaultColor="darkgoldenrod";

colorPicker.addEventListener("input",function() 
{
    box.style.backgroundColor=colorPicker.value;
});
resetBtn.addEventListener("click",function() 
{
    box.style.backgroundColor=defaultColor;
});
