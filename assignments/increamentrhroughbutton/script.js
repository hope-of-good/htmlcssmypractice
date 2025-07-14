
function increament()
{
    var obj=document.getElementById("val");
    var value=obj.textContent;
    value++;
    obj.textContent=value;
}
function decreament()
{
    var obj=document.getElementById("val");
    var value=obj.textContent;
    value--;
    obj.textContent=value;
}
function reset()
{
        var obj=document.getElementById("val");
    obj.textContent="0";
}