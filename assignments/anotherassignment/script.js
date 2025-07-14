const inp=document.getElementById("na");
 const res=document.getElementById("result");
function reverse(){
    let innp=inp.value;

    var revstr=innp.reverse();
    res.textContent=revstr;

}